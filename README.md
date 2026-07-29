# RootSense — Agentic Root-Cause Matching

RootSense is a multi-agent system that matches incoming production errors against a knowledge base of historical incidents using TF-IDF similarity, then recommends resolution steps drawn from past fixes. Built for the AgentVerse Grand Challenge 2026.

## Setup and Run Instructions

**Prerequisites:** Python 3.13+ (exact dependency versions are pinned in `requirements.txt` and tested against Python 3.13.7 on Windows)

1. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # macOS/Linux:
   source venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the API server:
   ```bash
   python -m backend.main
   # or
   uvicorn backend.main:app --host 0.0.0.0 --port 8000
   ```
4. Open your browser and navigate to `http://localhost:8000` to view the dashboard.

*Note: The frontend is served directly by FastAPI via `StaticFiles` from the same origin, so there are no CORS issues.*

## Architecture

RootSense uses a 5-agent pipeline. Data flows sequentially through the agents, with the Knowledge Base (KB) feeding into the Matcher and receiving feedback updates from the Learning Agent. The multi-agent pipeline visualization shows real-time progress as each agent completes — watch it light up as errors are analyzed.

```
Incoming Incident Text / Webhook Payload
       │
       ▼
 [ Ingestion Agent ]  ──(Extracts service name via regex)──┐
       │                                                    │
       ▼                                                    ▼
 [ Matcher Agent ] ◀────(TF-IDF & Cosine Similarity)──── [ Knowledge Base ]
       │                                                    ▲
       ▼                                                    │
 [ Diagnosis Agent ] ──(Synthesizes root cause & confidence)│
       │                                                    │
       ▼                                                    │
 [ Resolution Agent ] ──(Deduplicates & merges actions)     │
       │                                                    │
       ▼                                                    │
(Feedback via UI) ──────────────────────────────────────────┘
 [ Learning Agent ]
```

### The 5 Agents

1. **Ingestion Agent**: Extracts the service name from raw incident text using a fixed regex list of 9 known service names (`user-service`, `auth-service`, `payment-processor`, `inventory-api`, `gateway`, `kafka-broker`, `checkout-service`, `order-service`, `shipping-service`). Any text that doesn't match one of these falls back to `"unknown-service"`. No category extraction is performed.

2. **Matcher Agent**: Builds a TF-IDF vector from the query and all KB incidents, then computes cosine similarity scores. Returns two numbers per match:
   - **`similarity`** (raw %): The actual TF-IDF cosine similarity, displayed to the user. This value is deterministic and unaffected by feedback.
   - **`boosted_score`** (ranked %): `similarity × boost_factor`, used only for ranking order. The boost factor starts at 1.0 and is adjusted by the Learning Agent.
   
   Matches are gated on the **raw** similarity (≥15% threshold), then sorted by **boosted** score. This means feedback can reorder results but never fabricate a match that didn't pass the raw quality bar.

3. **Diagnosis Agent**: Synthesizes a probable root cause explanation from the top match's historical data. Assigns confidence bands based on raw `max_similarity`:
   - **High**: >50% — strong textual overlap with a known incident
   - **Medium**: 15–50% — partial match, displayed with a warning banner
   - **Low**: <15% — no usable match, falls back to "escalate to on-call"

4. **Resolution Agent**: Merges and deduplicates resolution steps from the top KB matches into a single action plan (capped at 5 steps). Returns a separate `warning` field (not embedded in the steps list) when confidence is medium, which the frontend renders as a distinct yellow banner above the numbered action list.

5. **Learning Agent**: Processes engineer feedback (thumbs up/down) by adjusting a per-incident `boost` multiplier (±0.1 per vote, clamped to `[0.5, 2.0]`). This affects the **ranking order** of future matches via `boosted_score`, while leaving the raw `similarity` display untouched. The boost is stored **in-memory only** and resets to 1.0 when the server restarts. No model is trained; this is simple multiplicative reinforcement on the ranking score.

### Dashboard Stats

The header displays two stats:
- **KB: N incidents** — the actual count of incidents loaded in the knowledge base.
- **Est. saved: ~N hrs** — a **demo estimate** computed as `incident_count × 2.5`. This is an illustrative placeholder for the dashboard, not a real measurement of time saved. It does not track actual resolution times or user outcomes.

> **Note on Data Persistence**: The Knowledge Base is stored in-memory and seeded from `backend/data/seed_incidents.json` on startup. All learned feedback (boost adjustments) will reset if the backend server is restarted.

## External Webhook Integrations

RootSense supports external webhook ingestion so error-tracking services and monitoring scripts can trigger analysis automatically.

### 1. Generic Webhook (`POST /api/webhook/generic`)

Useful for custom monitoring scripts, CI/CD pipelines, or live demos via `curl`.

**Example curl command:**
```bash
curl -X POST "http://localhost:8000/api/webhook/generic" \
     -H "Content-Type: application/json" \
     -d '{
           "text": "ERROR 1213 (40001): Deadlock found when trying to get lock; try restarting transaction",
           "source": "order-service"
         }'
```

**Payload Schema:**
- `text` (string, required): The raw log message or error stack trace.
- `source` (string, optional): Component or service name (e.g. `order-service`).

### 2. Sentry Webhook (`POST /api/webhook/sentry`)

Accepts Sentry Issue Alert webhook payloads. It extracts the exception type, exception message, and culprit/transaction, formats them into an incident string, and executes the analysis pipeline.

**Payload Example:**
```json
{
  "action": "triggered",
  "data": {
    "event": {
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
```

> **Verification Note**: `/api/webhook/sentry` is implemented and verified against Sentry's documented Issue Alert JSON payload schema using unit tests (`test_stage9.py` / `tests/test_agents.py`). It has not been tested against a live production Sentry account hook.

## Optional: Local Ollama Model for Natural Diagnosis Prose

By default, RootSense generates root cause explanations using a deterministic template. If you have [Ollama](https://ollama.ai) running locally with the **Mistral** model, the DiagnosisAgent will rewrite the explanation into clearer, more actionable prose for on-call engineers — completely offline, with **no API keys or payments needed**.

### Prerequisites

1. Install Ollama from [ollama.ai](https://ollama.ai)
2. Pull the Mistral model:
   ```bash
   ollama pull mistral
   ```

### Usage

1. Start Ollama in a separate terminal:
   ```bash
   ollama serve
   ```
2. Start RootSense backend:
   ```bash
   uvicorn backend.main:app --host 0.0.0.0 --port 8000
   ```
3. RootSense will **auto-detect** Ollama and use it for diagnosis prose rewriting.

> **Graceful Fallback**: If Ollama isn't running, RootSense gracefully falls back to template-based diagnosis — it still works perfectly. No errors are raised and no requests fail.

> **Note**: This is completely offline. No API keys, no cloud services, no payments needed. The Mistral model runs entirely on your local machine.

The `synthesis_source` field in the `/api/analyze` response tells you which path was used: `"ollama"` or `"template"`.

## Running Tests

```bash
pytest tests/test_agents.py -v
```

The test suite (15 tests) covers: ingestion extraction, matcher similarity + boosted scores, diagnosis confidence bands, resolution step separation, end-to-end API round-trip, boost reinforcement mechanics, warning field presence/absence, Sentry/Generic webhook endpoints, Ollama integration (mocked + live when available), and template fallback path.

