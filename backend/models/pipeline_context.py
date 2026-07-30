"""PipelineContext data model.

Phase 1 scaffold only. This model defines the shape of state that will be
passed between agents in the future multi-agent pipeline. Fields are
intentionally left unpopulated and unused — no existing code reads or
writes to this model yet.
"""

from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field


class PipelineContext(BaseModel):
    """Shared state object passed between agents across the pipeline.

    Every field is optional so the context can be constructed and
    incrementally filled in as it flows through successive agents.
    Field shapes are provisional and expected to be refined as each
    agent's real implementation is migrated in later phases.
    """

    raw_input: Optional[str] = None
    requirements: Optional[Dict[str, Any]] = None
    retrieved_cases: Optional[List[Dict[str, Any]]] = None
    execution_plan: Optional[Dict[str, Any]] = None
    diagnosis: Optional[Dict[str, Any]] = None
    fixes: Optional[List[Dict[str, Any]]] = None
    severity: Optional[str] = None
    priority: Optional[str] = None
    escalation: Optional[Dict[str, Any]] = None
    documentation: Optional[Dict[str, Any]] = None
    security: Optional[Dict[str, Any]] = None
    deployment: Optional[Dict[str, Any]] = None
    memory: Optional[Dict[str, Any]] = None
    metadata: Dict[str, Any] = Field(default_factory=dict)
    errors: List[str] = Field(default_factory=list)
    final_response: Optional[Dict[str, Any]] = None
