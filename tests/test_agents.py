import pytest
from backend.agents import IngestionAgent, MatcherAgent, DiagnosisAgent, ResolutionAgent, LearningAgent
from backend.kb import KnowledgeBase
from backend.main import app
from fastapi.testclient import TestClient

client = TestClient(app)


# ---------------------------------------------------------------------------
# Basic agent tests
# ---------------------------------------------------------------------------

def test_ingestion_agent():
    agent = IngestionAgent()
    res = agent.process("Error in user-service: connection timeout")
    assert res["extracted_service"] == "user-service"


def test_matcher_agent():
    ingestion = IngestionAgent()
    matcher = MatcherAgent()

    ingest_res = ingestion.process(
        "FATAL: sorry, too many clients already in user-service"
    )
    match_res = matcher.process(ingest_res)

    # Should find a match since it's in seed data
    assert len(match_res["matches"]) > 0
    assert match_res["matches"][0]["id"] == "INC-001"

    # Matcher now returns both raw similarity and boosted_score
    top = match_res["matches"][0]
    assert "similarity" in top       # raw percentage
    assert "boosted_score" in top     # boosted percentage


def test_diagnosis_and_resolution_low_confidence():
    """Nonsense error → low confidence → escalate."""
    ingestion = IngestionAgent()
    matcher = MatcherAgent()
    diag = DiagnosisAgent()
    res = ResolutionAgent()

    ingest_res = ingestion.process("flux capacitor temporal anomaly")
    match_res = matcher.process(ingest_res)

    # Threshold is 15 % — nonsense should fall below it
    assert match_res["max_similarity"] < 15.0

    diag_res = diag.process(match_res)
    assert diag_res["confidence"] == "low"

    res_out = res.process(match_res, diag_res)
    assert "Escalate to on-call." in res_out["resolution_steps"][0]


def test_e2e_analyze_endpoint():
    payload = {"raw_text": "OOMKilled payment-processor"}
    response = client.post("/api/analyze", json=payload)
    assert response.status_code == 200
    data = response.json()

    assert "ingestion" in data
    assert data["ingestion"]["extracted_service"] == "payment-processor"

    assert "matcher" in data
    assert len(data["matcher"]["matches"]) > 0

    assert data["diagnosis"]["confidence"] in ["medium", "high"]


# ---------------------------------------------------------------------------
# Stage 5 — Boost mechanism
# ---------------------------------------------------------------------------

def test_boost_increases_rank_not_raw_similarity():
    """
    Thumbs-up feedback should increase the boosted_score of the matching
    incident in future queries, while the raw similarity stays unchanged.
    """
    # Use a private KB so we don't mutate the global singleton
    private_kb = KnowledgeBase()
    ingestion = IngestionAgent()
    matcher = MatcherAgent()

    query = "FATAL: sorry, too many clients already in user-service"
    ingest_res = ingestion.process(query)

    # --- first pass (no boost applied yet) ---
    result_before = matcher.process(ingest_res)
    top_before = result_before["matches"][0]
    raw_sim_before = top_before["similarity"]
    boosted_before = top_before["boosted_score"]

    # With default boost=1.0, raw and boosted should be equal
    assert raw_sim_before == boosted_before

    # --- apply thumbs-up via LearningAgent ---
    learning = LearningAgent()
    learning.process(top_before["id"], "up")

    # --- second pass (boost should now be > 1.0) ---
    result_after = matcher.process(ingest_res)
    top_after = result_after["matches"][0]
    raw_sim_after = top_after["similarity"]
    boosted_after = top_after["boosted_score"]

    # Raw similarity is deterministic (TF-IDF), so it must stay the same
    assert raw_sim_after == raw_sim_before

    # Boosted score should now be higher than before
    assert boosted_after > boosted_before


# ---------------------------------------------------------------------------
# Stage 5d — Separate warning field
# ---------------------------------------------------------------------------

def test_warning_field_present_on_medium_confidence():
    """
    When diagnosis confidence is 'medium', the ResolutionAgent should return
    a non-null 'warning' string separate from resolution_steps.
    """
    resolution = ResolutionAgent()

    # Fake matcher and diagnosis data to force medium confidence
    matcher_data = {
        "matches": [
            {
                "title": "Test Incident",
                "root_cause": "something",
                "resolution_steps": ["Step A", "Step B"],
                "similarity": 30.0,
                "boosted_score": 30.0,
            }
        ],
        "max_similarity": 30.0,
    }
    diagnosis_data = {
        "root_cause_synthesis": "Looks similar to Test Incident",
        "is_recurring": True,
        "confidence": "medium",
    }

    res = resolution.process(matcher_data, diagnosis_data)

    # warning field must exist and be non-null
    assert "warning" in res
    assert res["warning"] is not None
    assert "MEDIUM CONFIDENCE" in res["warning"]

    # resolution_steps must contain only genuine actions, not the warning
    for step in res["resolution_steps"]:
        assert "MEDIUM CONFIDENCE" not in step


def test_warning_field_absent_on_high_confidence():
    """
    When diagnosis confidence is 'high', warning should be None.
    """
    resolution = ResolutionAgent()

    matcher_data = {
        "matches": [
            {
                "title": "Test Incident",
                "root_cause": "something",
                "resolution_steps": ["Step A"],
                "similarity": 80.0,
                "boosted_score": 80.0,
            }
        ],
        "max_similarity": 80.0,
    }
    diagnosis_data = {
        "root_cause_synthesis": "Exact match",
        "is_recurring": True,
        "confidence": "high",
    }

    res = resolution.process(matcher_data, diagnosis_data)
    assert res["warning"] is None


def test_warning_field_absent_on_low_confidence():
    """
    When diagnosis confidence is 'low', warning should not be present
    (the low-confidence path returns a different structure with escalation steps).
    """
    resolution = ResolutionAgent()

    matcher_data = {"matches": [], "max_similarity": 5.0}
    diagnosis_data = {
        "root_cause_synthesis": "No match",
        "is_recurring": False,
        "confidence": "low",
    }

    res = resolution.process(matcher_data, diagnosis_data)
    # Low-confidence path doesn't include a warning key at all
    assert res.get("warning") is None


# ---------------------------------------------------------------------------
# Stage 9 — Webhook Endpoints
# ---------------------------------------------------------------------------

def test_sentry_webhook_endpoint():
    sentry_payload = {
        "action": "triggered",
        "data": {
            "event": {
                "event_id": "8a37f912e4b04c81b29a1d1234567890",
                "culprit": "auth-service",
                "exception": {
                    "values": [
                        {
                            "type": "TimeoutError",
                            "value": "Redis connection to redis-cluster.internal:6379 timed out after 3000ms. GET session:9842a2"
                        }
                    ]
                }
            }
        }
    }
    res = client.post("/api/webhook/sentry", json=sentry_payload)
    assert res.status_code == 200
    data = res.json()
    assert data["ingestion"]["extracted_service"] == "auth-service"
    assert len(data["matcher"]["matches"]) > 0
    assert data["matcher"]["matches"][0]["id"] == "INC-002"


def test_sentry_webhook_malformed_payload():
    malformed_payload = {"action": "triggered", "data": {"event": {}}}
    res = client.post("/api/webhook/sentry", json=malformed_payload)
    assert res.status_code == 400
    assert "detail" in res.json()


def test_generic_webhook_endpoint():
    generic_payload = {
        "text": "ERROR 1213 (40001): Deadlock found when trying to get lock; try restarting transaction",
        "source": "order-service"
    }
    res = client.post("/api/webhook/generic", json=generic_payload)
    assert res.status_code == 200
    data = res.json()
    assert data["ingestion"]["extracted_service"] == "order-service"
    assert len(data["matcher"]["matches"]) > 0
    assert data["matcher"]["matches"][0]["id"] == "INC-008"


def test_generic_webhook_missing_text():
    res = client.post("/api/webhook/generic", json={"source": "order-service"})
    assert res.status_code == 422


# ---------------------------------------------------------------------------
# Stage 11 — Ollama-enhanced DiagnosisAgent
# ---------------------------------------------------------------------------

import os
import importlib
import unittest.mock as mock


def _make_high_confidence_matcher_data():
    """Returns realistic matcher_data that produces a high-confidence diagnosis."""
    from backend.kb import kb
    incidents = kb.get_all_incidents()
    # Use INC-002 (Redis Cache Timeout) as the top match
    redis_inc = next(inc for inc in incidents if inc["id"] == "INC-002")
    match = redis_inc.copy()
    match["similarity"] = 82.5
    match["boosted_score"] = 82.5
    return {"matches": [match], "max_similarity": 82.5}


def _is_ollama_running() -> bool:
    """Check if Ollama is reachable on localhost:11434."""
    import requests
    try:
        resp = requests.get("http://localhost:11434/api/tags", timeout=3)
        return resp.status_code == 200
    except Exception:
        return False


def test_diagnosis_without_ollama_fallback():
    """
    When Ollama is not running (simulated via mock), DiagnosisAgent must
    fall back to the template synthesis without raising any exception.
    The response dict must still contain root_cause_synthesis, confidence,
    is_recurring, and synthesis_source='template'.
    """
    import backend.claude_client as cc_module

    # Patch rewrite_root_cause to return None (simulates Ollama down)
    with mock.patch.object(cc_module, "rewrite_root_cause", return_value=None):
        from backend.agents import DiagnosisAgent
        diagnosis = DiagnosisAgent()
        matcher_data = _make_high_confidence_matcher_data()
        result = diagnosis.process(matcher_data)

    assert "root_cause_synthesis" in result
    assert "confidence" in result
    assert "is_recurring" in result
    assert result["synthesis_source"] == "template"
    assert "Network partition" in result["root_cause_synthesis"]  # template text


def test_diagnosis_with_ollama_mocked():
    """
    When Ollama returns a non-empty string, DiagnosisAgent must use it as
    root_cause_synthesis and set synthesis_source='ollama'.
    This test mocks the rewrite call so it passes without Ollama running.
    """
    import backend.claude_client as cc_module

    fake_ollama_prose = (
        "A network partition isolated auth-service from the Redis cluster "
        "in eu-west-1, causing session validation to time out. Failover to "
        "the eu-west-2 secondary node and lower the client timeout to 1 s."
    )

    with mock.patch.object(cc_module, "rewrite_root_cause", return_value=fake_ollama_prose):
        from backend.agents import DiagnosisAgent
        diagnosis = DiagnosisAgent()
        matcher_data = _make_high_confidence_matcher_data()
        result = diagnosis.process(matcher_data)

    assert result["root_cause_synthesis"] == fake_ollama_prose
    assert result["synthesis_source"] == "ollama"
    assert result["confidence"] == "high"
    assert result["is_recurring"] is True


@pytest.mark.skipif(not _is_ollama_running(), reason="Ollama is not running on localhost:11434")
def test_diagnosis_with_ollama_available():
    """
    Live integration test — requires Ollama running with 'mistral' model.
    Verifies that DiagnosisAgent actually calls Ollama and gets a rewritten
    diagnosis (synthesis_source='ollama').
    """
    from backend.agents import DiagnosisAgent
    diagnosis = DiagnosisAgent()
    matcher_data = _make_high_confidence_matcher_data()
    result = diagnosis.process(matcher_data)

    assert result["synthesis_source"] == "ollama"
    assert len(result["root_cause_synthesis"]) > 20  # Ollama should return real prose
    assert result["confidence"] == "high"
    assert result["is_recurring"] is True


