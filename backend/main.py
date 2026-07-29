from fastapi import FastAPI, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Dict, Any, Optional
import os
import uvicorn

from backend.agents import (
    IngestionAgent,
    MatcherAgent,
    DiagnosisAgent,
    SeverityAgent,
    ResolutionAgent,
    EscalationAgent,
    LearningAgent
)
from backend.kb import kb


app = FastAPI(title="RootSense API")

# Initialize agents
ingestion_agent = IngestionAgent()
matcher_agent = MatcherAgent()
diagnosis_agent = DiagnosisAgent()
severity_agent = SeverityAgent()
resolution_agent = ResolutionAgent()
escalation_agent = EscalationAgent()
learning_agent = LearningAgent()

def run_analysis_pipeline(raw_text: str) -> Dict[str, Any]:
    """Shared pipeline execution used by standard UI endpoint and webhook integrations."""
    ingestion_result = ingestion_agent.process(raw_text)
    matcher_result = matcher_agent.process(ingestion_result)
    diagnosis_result = diagnosis_agent.process(matcher_result)
    
    severity_result = severity_agent.process(
        service=ingestion_result.get("extracted_service", "unknown-service"),
        diagnosis_confidence=diagnosis_result.get("confidence", "low"),
        raw_error_text=raw_text
    )
    
    resolution_result = resolution_agent.process(matcher_result, diagnosis_result)
    
    escalation_result = escalation_agent.process(
        service=ingestion_result.get("extracted_service", "unknown-service"),
        severity_data=severity_result,
        diagnosis_summary=diagnosis_result.get("root_cause_synthesis", "")
    )
    
    return {
        "ingestion": ingestion_result,
        "matcher": matcher_result,
        "diagnosis": diagnosis_result,
        "severity": severity_result,
        "resolution": resolution_result,
        "escalation": escalation_result
    }

class AnalyzeRequest(BaseModel):
    raw_text: str

class FeedbackRequest(BaseModel):
    incident_id: str
    feedback: str # "up" or "down"

class GenericWebhookRequest(BaseModel):
    text: str
    source: Optional[str] = None

@app.post("/api/analyze")
async def analyze_incident(req: AnalyzeRequest):
    if not req.raw_text or not req.raw_text.strip():
        raise HTTPException(status_code=400, detail="Missing or empty raw_text")
    return run_analysis_pipeline(req.raw_text)

@app.post("/api/webhook/sentry")
async def sentry_webhook(request: Request):
    try:
        payload = await request.json()
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid JSON payload")
        
    if not isinstance(payload, dict):
        raise HTTPException(status_code=400, detail="Payload must be a JSON object")

    # Extract event data (Sentry issue alerts nest under data.event; direct event hooks may pass event at root)
    data = payload.get("data", {})
    event = data.get("event") if isinstance(data, dict) and "event" in data else payload.get("event", payload)
    
    if not isinstance(event, dict):
        raise HTTPException(status_code=400, detail="Invalid Sentry payload structure: missing event object")

    # Extract exception values
    exception = event.get("exception")
    values = []
    if isinstance(exception, dict):
        values = exception.get("values", [])
    
    exc_type = ""
    exc_value = ""
    if values and isinstance(values, list) and isinstance(values[0], dict):
        first_val = values[0]
        exc_type = first_val.get("type", "")
        exc_value = first_val.get("value", "")

    # Fallback to top-level message/title if exception values missing
    if not exc_value and not exc_type:
        exc_value = event.get("message") or event.get("title") or payload.get("message") or ""

    culprit = event.get("culprit") or event.get("transaction") or payload.get("culprit") or ""

    if not exc_type and not exc_value:
        raise HTTPException(status_code=400, detail="Invalid Sentry payload: could not extract exception type, message, or title")

    # Format extracted info into a unified error string suitable for IngestionAgent
    parts = []
    if exc_type and exc_value:
        parts.append(f"{exc_type}: {exc_value}")
    elif exc_value:
        parts.append(str(exc_value))
    elif exc_type:
        parts.append(str(exc_type))

    if culprit and culprit not in str(exc_type) and culprit not in str(exc_value):
        parts.append(f"in {culprit}")

    formatted_raw_text = " ".join(parts)
    return run_analysis_pipeline(formatted_raw_text)

@app.post("/api/webhook/generic")
async def generic_webhook(req: GenericWebhookRequest):
    if not req.text or not req.text.strip():
        raise HTTPException(status_code=400, detail="Payload missing required 'text' field")

    text = req.text.strip()
    if req.source and req.source.strip() and req.source not in text:
        text = f"{text} in {req.source.strip()}"

    return run_analysis_pipeline(text)

@app.post("/api/feedback")
async def submit_feedback(req: FeedbackRequest):
    result = learning_agent.process(req.incident_id, req.feedback)
    if result["status"] == "not_found":
        raise HTTPException(status_code=404, detail="Incident not found in KB")
    return result

@app.get("/api/stats")
async def get_stats():
    incidents = kb.get_all_incidents()
    return {
        "total_incidents": len(incidents),
        "estimated_hours_saved": round(len(incidents) * 2.5, 1)  # Demo estimate: not a real measurement
    }

# Serve static files for the frontend (avoiding CORS issues)
frontend_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "frontend")
if not os.path.exists(frontend_dir):
    os.makedirs(frontend_dir)
app.mount("/", StaticFiles(directory=frontend_dir, html=True), name="frontend")

if __name__ == "__main__":
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
