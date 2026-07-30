"""
Ollama-backed LLM client for diagnosis prose rewriting.

Calls a locally-running Ollama instance (http://localhost:11434) with a
Llama 3 model.  If Ollama is not running or any error occurs, the function
silently returns None so callers fall back to the template synthesis.

No API keys or external services required — fully offline.
"""

from typing import Optional

import requests

OLLAMA_BASE_URL = "http://localhost:11434"
OLLAMA_MODEL = "llama3"

_PROMPT_TEMPLATE = (
    "You are a site reliability engineer writing a concise incident diagnosis "
    "for an internal runbook. Rewrite the following root cause explanation to "
    "be clear and actionable for a DevOps engineer on-call. "
    "Use plain, direct technical language. Keep it under 150 words. "
    "Do not include any preamble or labels — output only the rewritten explanation.\n\n"
    "Original: {root_cause}"
)


def rewrite_root_cause(root_cause: str) -> Optional[str]:
    """
    Call Ollama (Llama 3) to rewrite root_cause into better prose.
    Returns the rewritten string on success, or None on any failure
    (Ollama not running, network error, timeout, bad response).
    Callers should fall back to the template synthesis if None is returned.
    """
    if not root_cause:
        return None

    try:
        response = requests.post(
            f"{OLLAMA_BASE_URL}/api/generate",
            json={
                "model": OLLAMA_MODEL,
                "prompt": _PROMPT_TEMPLATE.format(root_cause=root_cause),
                "stream": False,
            },
            timeout=120,
        )
        response.raise_for_status()
        data = response.json()
        text = data.get("response", "").strip()
        return text if text else None
    except Exception:
        # Connection refused, timeout, HTTP error, JSON parse error, etc.
        # — silently fall back to template
        return None
