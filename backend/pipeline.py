"""Pipeline entry point placeholder.

Phase 1 scaffold only. This class is not wired into the application and
contains no implementation — it exists solely to reserve the module's
location in the target architecture for a future phase.
"""

from backend.models.pipeline_context import PipelineContext


class Pipeline:
    """Placeholder for the future multi-agent pipeline orchestrator."""

    def run(self, context: PipelineContext) -> PipelineContext:
        """Not yet implemented."""
        raise NotImplementedError("Pipeline is a Phase 1 scaffold and is not yet implemented.")
