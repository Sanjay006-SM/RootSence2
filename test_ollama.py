"""
test_ollama.py — Standalone Ollama integration test

Runs a real RootSense pipeline query and prints the full Ollama-rewritten
diagnosis prose.  Requires Ollama to be running (`ollama serve` in another
terminal) with the Mistral model pulled (`ollama pull mistral`).

Usage:
    python test_ollama.py
"""

import sys
import os
import io

# Fix Windows console encoding for emoji/unicode
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

# Ensure project root is on sys.path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from backend.agents import IngestionAgent, MatcherAgent, DiagnosisAgent


def main():
    print("=" * 70)
    print("  RootSense -- Ollama Integration Test")
    print("=" * 70)

    # Use a query that matches a seed incident (Redis timeout)
    query = (
        "TimeoutError: Redis connection to redis-cluster.internal:6379 "
        "timed out after 3000ms in auth-service"
    )

    print(f"\n[INPUT] Query: {query}\n")

    # Run pipeline
    ingestion = IngestionAgent()
    matcher = MatcherAgent()
    diagnosis = DiagnosisAgent()

    ingest_result = ingestion.process(query)
    print(f"[INGEST] Extracted service: {ingest_result['extracted_service']}")

    match_result = matcher.process(ingest_result)
    if not match_result["matches"]:
        print("[ERROR] No matches found in KB. Check seed data.")
        return

    top = match_result["matches"][0]
    print(f"[MATCH] Top match: {top['title']} (similarity: {top['similarity']}%)")
    print(f"        Root cause: {top['root_cause']}")

    diag_result = diagnosis.process(match_result)

    print(f"\n[DIAG] Confidence: {diag_result['confidence']}")
    print(f"[DIAG] Synthesis source: {diag_result['synthesis_source']}")
    print()

    if diag_result["synthesis_source"] == "ollama":
        print("[OK] Ollama detected and used successfully!")
        print("-" * 50)
        print("[OLLAMA] Rewritten diagnosis:")
        print("-" * 50)
        print(diag_result["root_cause_synthesis"])
    else:
        print("[WARN] Ollama not detected, using template fallback")
        print("-" * 50)
        print("[TEMPLATE] Diagnosis:")
        print("-" * 50)
        print(diag_result["root_cause_synthesis"])

    print("-" * 50)
    print()


if __name__ == "__main__":
    main()
