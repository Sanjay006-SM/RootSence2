"""Common interface for all pipeline agents.

Phase 1 scaffold only — no business logic.
"""

from abc import ABC, abstractmethod

from backend.models.pipeline_context import PipelineContext


class BaseAgent(ABC):
    """Abstract base class that every pipeline agent must implement."""

    @abstractmethod
    def run(self, context: PipelineContext) -> PipelineContext:
        """Execute the agent's step of the pipeline and return the updated context."""
        raise NotImplementedError
