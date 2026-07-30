from typing import Dict, Any, List, Optional
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import re
import time
import uuid
import difflib
from backend.kb import kb

class IngestionAgent:
    """Parses raw incident text and extracts structured features."""
    def process(self, raw_text: str) -> Dict[str, Any]:
        # Simple heuristic extraction
        service_match = re.search(r'(?i)(user-service|auth-service|payment-processor|inventory-api|gateway|kafka-broker|checkout-service|order-service|shipping-service)', raw_text)
        service = service_match.group(1).lower() if service_match else "unknown-service"
        
        return {
            "raw_text": raw_text,
            "extracted_service": service,
            "status": "ingested"
        }

class MatcherAgent:
    """Embeds incoming incident and compares against KB using TF-IDF."""
    def process(self, ingestion_data: Dict[str, Any], top_k: int = 3, threshold: float = 0.15) -> Dict[str, Any]:
        incidents = kb.get_all_incidents()
        if not incidents:
            return {"matches": [], "max_similarity": 0.0}
            
        corpus = [inc["raw_text"] + " " + inc.get("title", "") for inc in incidents]
        query = ingestion_data["raw_text"]
        
        vectorizer = TfidfVectorizer(stop_words='english')
        try:
            tfidf_matrix = vectorizer.fit_transform(corpus + [query])
        except ValueError:
             return {"matches": [], "max_similarity": 0.0}
             
        cosine_similarities = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1]).flatten()
        
        matches = []
        max_sim = 0.0
        for i, raw_sim in enumerate(cosine_similarities):
            raw_sim_val = float(raw_sim)
            boost = incidents[i].get("boost", 1.0)
            boosted_score = raw_sim_val * boost
            
            if raw_sim_val > max_sim: max_sim = raw_sim_val
            if raw_sim_val > threshold: # Minimum threshold on RAW similarity
                match = incidents[i].copy()
                match["similarity"] = round(raw_sim_val * 100, 1) # Raw % for display
                match["boosted_score"] = round(boosted_score * 100, 1) # Boosted % for ranking
                matches.append(match)
                
        # Re-sort descending based on the new boosted similarity score
        matches.sort(key=lambda x: x["boosted_score"], reverse=True)
        
        # Keep top k matches
        matches = matches[:top_k]
                
        return {
            "matches": matches,
            "max_similarity": round(max_sim * 100, 1)
        }

class DiagnosisAgent:
    """Synthesizes probable root cause explanation, optionally enhanced by Ollama."""
    def process(self, matcher_data: Dict[str, Any]) -> Dict[str, Any]:
        matches = matcher_data.get("matches", [])
        if not matches or matcher_data.get("max_similarity", 0) < 15.0:
            return {
                "root_cause_synthesis": "No strong historical match found for this incident.",
                "is_recurring": False,
                "confidence": "low"
            }

        top_match = matches[0]
        confidence = "high" if matcher_data["max_similarity"] > 50 else "medium"

        # Template-based synthesis (always produced as the baseline)
        template_synthesis = (
            f"Based on historical data (Match: {top_match['title']}), "
            f"this appears to be related to: {top_match['root_cause']}"
        )

        # Attempt Ollama rewrite — falls back silently on any failure or Ollama not running
        try:
            from backend.claude_client import rewrite_root_cause
            rewritten = rewrite_root_cause(top_match["root_cause"])
        except Exception:
            rewritten = None

        synthesis = rewritten if rewritten else template_synthesis

        return {
            "root_cause_synthesis": synthesis,
            "is_recurring": True,
            "confidence": confidence,
            "synthesis_source": "ollama" if rewritten else "template",
        }


class ResolutionAgent:
    """Merges and deduplicates resolution steps."""
    def process(self, matcher_data: Dict[str, Any], diagnosis_data: Dict[str, Any]) -> Dict[str, Any]:
        if diagnosis_data["confidence"] == "low":
            return {
                "resolution_steps": ["Escalate to on-call.", "Investigate manually as no strong match was found."],
                "overall_confidence": "low"
            }
            
        # Deduplicate steps from top matches
        seen_steps = set()
        merged_steps = []
        for match in matcher_data.get("matches", []):
            for step in match.get("resolution_steps", []):
                if step not in seen_steps:
                    seen_steps.add(step)
                    merged_steps.append(step)
                    
        final_steps = merged_steps[:5]
        warning = None
        if diagnosis_data["confidence"] == "medium":
            warning = "⚠️ MEDIUM CONFIDENCE: This is a probable match based on semantic similarity, but not a confirmed exact match. Proceed with caution."
                    
        return {
            "resolution_steps": final_steps,
            "overall_confidence": diagnosis_data["confidence"],
            "warning": warning
        }

class LearningAgent:
    """Updates KB based on engineer feedback."""
    def process(self, incident_id: str, feedback: str) -> Dict[str, Any]:
        success = kb.record_feedback(incident_id, feedback)
        
        if feedback == "up":
            msg = f"Feedback recorded — incident {incident_id} will be prioritized higher in future similar queries."
        else:
            msg = f"Feedback recorded — incident {incident_id} will be prioritized lower in future similar queries."
            
        return {
            "status": "success" if success else "not_found",
            "message": msg
        }

class SeverityAgent:
    """Evaluates service criticality, confidence, and crisis keywords to compute incident severity."""
    description = "Evaluates service criticality, confidence, and crisis keywords to calculate incident severity."

    SERVICE_CRITICALITY = {
        "payment-processor": 5,
        "auth-service": 5,
        "kafka-broker": 4,
        "checkout-service": 4,
        "gateway": 4,
        "order-service": 3,
        "inventory-api": 3,
        "user-service": 3,
        "shipping-service": 2,
    }

    CONFIDENCE_BONUS = {
        "high": 3,
        "medium": 2,
        "low": 1
    }

    CRISIS_KEYWORDS = [
        "outage", "down", "crash", "oom", "unauthorized",
        "deadlock", "fatal", "evicted", "exhausted", "exceeded"
    ]

    def process(self, service: str, diagnosis_confidence: str, raw_error_text: str) -> Dict[str, Any]:
        # Service criticality score
        service_clean = (service or "").lower().strip()
        base_score = self.SERVICE_CRITICALITY.get(service_clean, 2)

        # Confidence bonus (case-insensitive & graceful fallback)
        conf_str = (diagnosis_confidence or "").lower().strip()
        conf_bonus = self.CONFIDENCE_BONUS.get(conf_str, 0)

        # Keyword bonus (+2 points per matched keyword, capped at +6)
        raw_text_lower = (raw_error_text or "").lower()
        matched_keywords = [kw for kw in self.CRISIS_KEYWORDS if kw in raw_text_lower]
        keyword_bonus = min(len(matched_keywords) * 2, 6)

        total_score = base_score + conf_bonus + keyword_bonus

        # Map total score to severity and priority bands
        if total_score >= 10:
            severity = "Critical"
            priority = "P1"
        elif total_score >= 7:
            severity = "High"
            priority = "P2"
        elif total_score >= 4:
            severity = "Medium"
            priority = "P3"
        else:
            severity = "Low"
            priority = "P4"

        return {
            "severity": severity,
            "priority": priority,
            "score": total_score
        }

class EscalationAgent:
    """Determines team routing and escalation decisions based on service and severity."""
    description = "Determines team routing and escalation decisions based on service and severity."

    TEAM_OWNERS = {
        "payment-processor": "payments",
        "auth-service": "sec-auth",
        "kafka-broker": "infra",
        "inventory-api": "inventory",
        "gateway": "edge",
        "checkout-service": "checkout",
        "order-service": "orders",
        "shipping-service": "logistics",
        "user-service": "identity",
    }

    def process(self, service: str, severity_data: Dict[str, Any], diagnosis_summary: str) -> Dict[str, Any]:
        # SIMULATED INTEGRATION POINT: In production, this dispatches via Slack/PagerDuty webhooks.
        service_clean = (service or "").lower().strip()
        team_name = self.TEAM_OWNERS.get(service_clean, "general-oncall")

        priority = (severity_data.get("priority") if severity_data else None) or "P4"
        escalate = priority in ["P1", "P2"]

        if escalate:
            channel = f"#{team_name}-urgent"
        else:
            channel = f"#{team_name}-alerts"

        message = f"[{priority}] Escalating {service or 'unknown-service'} incident to {team_name}: {diagnosis_summary}"

        return {
            "channel": channel,
            "escalate": escalate,
            "message": message,
            "team": team_name
        }


class CorrelationAgent:
    """Detects whether an incoming incident belongs to an already-processed incident
    (same service, high text similarity, within a recent time window) to avoid
    duplicate analysis and alert storms. Uses an in-memory cache only — no database."""

    def __init__(self, window_seconds: int = 300, similarity_threshold: float = 0.75):
        self.window_seconds = window_seconds
        self.similarity_threshold = similarity_threshold
        self._recent_incidents: List[Dict[str, Any]] = []  # in-memory cache

    def process(self, service: str, raw_text: str) -> Dict[str, Any]:
        now = time.time()
        # Evict entries outside the correlation time window
        self._recent_incidents = [
            entry for entry in self._recent_incidents
            if now - entry["timestamp"] <= self.window_seconds
        ]

        service_clean = (service or "").lower().strip()
        best_match = None
        best_score = 0.0
        for entry in self._recent_incidents:
            if entry["service"] != service_clean:
                continue
            score = difflib.SequenceMatcher(None, entry["raw_text"], raw_text).ratio()
            if score > best_score:
                best_score = score
                best_match = entry

        if best_match and best_score >= self.similarity_threshold:
            incident_id = best_match["incident_id"]
            is_duplicate = True
        else:
            incident_id = uuid.uuid4().hex[:8]
            is_duplicate = False
            self._recent_incidents.append({
                "incident_id": incident_id,
                "service": service_clean,
                "raw_text": raw_text,
                "timestamp": now
            })

        return {
            "incident_id": incident_id,
            "is_duplicate": is_duplicate,
            "correlation_confidence": round(best_score * 100, 1)
        }


class DiagnosisVerificationAgent:
    """Validates whether the Diagnosis Agent's output is reliable enough for downstream
    agents to act on. Only validates — it never regenerates or alters the diagnosis."""

    def process(self, matcher_data: Dict[str, Any], diagnosis_data: Dict[str, Any]) -> Dict[str, Any]:
        similarity = matcher_data.get("max_similarity", 0.0) / 100.0
        confidence = (diagnosis_data.get("confidence") or "low").lower()
        has_evidence = bool(matcher_data.get("matches"))

        if similarity > 0.80 and confidence == "high":
            status = "Verified"
            reason = "High similarity match combined with high diagnosis confidence."
        elif not has_evidence or confidence == "low":
            status = "Low Confidence"
            reason = "Insufficient matching evidence to trust this diagnosis without review."
        else:
            status = "Needs Human Review"
            reason = "Moderate similarity/confidence — recommend human confirmation before acting."

        return {
            "verification_status": status,
            "verification_reason": reason,
            "verified_confidence": confidence
        }


class ImpactBlastRadiusAgent:
    """Estimates which downstream services may be affected by an incident using a
    lightweight, static service dependency map (no Kubernetes/Prometheus integration)."""

    DEPENDENCY_GRAPH = {
        "gateway": ["auth-service", "checkout-service"],
        "payment-processor": ["checkout-service", "order-service"],
        "auth-service": ["user-service", "checkout-service"],
        "checkout-service": ["order-service", "shipping-service"],
        "kafka-broker": ["order-service", "inventory-api", "shipping-service"],
        "inventory-api": ["order-service"],
        "user-service": ["auth-service"],
        "order-service": ["shipping-service"],
    }

    def process(self, service: str) -> Dict[str, Any]:
        service_clean = (service or "").lower().strip()
        affected = self.DEPENDENCY_GRAPH.get(service_clean, [])

        if len(affected) >= 3:
            impact_level = "High"
        elif len(affected) >= 1:
            impact_level = "Medium"
        else:
            impact_level = "Low"

        business_impact = (
            f"Potential disruption to {len(affected)} downstream service(s)."
            if affected else "No known downstream dependencies affected."
        )

        return {
            "affected_services": affected,
            "business_impact": business_impact,
            "estimated_impact_level": impact_level
        }


class KnowledgeCurationAgent:
    """After positive engineer feedback on a weak match, suggests whether the incident
    should become a new reusable KB entry. Only produces a draft suggestion — it never
    writes to the knowledge base automatically."""

    def process(
        self,
        feedback: str,
        match_confidence: Optional[float],
        incident_context: Dict[str, Any],
        confidence_threshold: float = 50.0
    ) -> Optional[Dict[str, Any]]:
        if feedback != "up" or match_confidence is None or match_confidence >= confidence_threshold:
            return None

        service = incident_context.get("service", "unknown-service")

        return {
            "suggested_title": f"New recurring issue in {service}",
            "root_cause": incident_context.get("root_cause", "Root cause not yet documented."),
            "resolution_steps": incident_context.get("resolution_steps", []),
            "tags": [service, "auto-suggested"],
            "service": service,
            "status": "draft"
        }

