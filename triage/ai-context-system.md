# ai-context-system

**path**: /Users/jjones/Documents/dev/projects/ai-context-system
**last commit**: 2025-04-21 (406 days ago)
**commits**: 18
**stack**: Python, FastMCP (MCP SDK), PostgreSQL + pgvector, SQLAlchemy (async), sentence-transformers, torch, NLTK, BM25
**status**: abandoned

## Goal (1 sentence)
An MCP server that provisions structured AI context from a pgvector-backed PostgreSQL database, combining vector search and BM25 ranking to serve relevant documentation chunks to AI agents.

## What exists
- `src/ai_context_system/server.py`: a FastMCP server scaffold (version "1.3-MVP") with placeholder tool/resource registration — no actual tools registered
- `src/ai_context_system/` with subdirectories for `api/`, `core/`, `data/`, `infra/`, `models/`, `processing/`, `tasks/`
- `scripts/setup_db.py` (7 KB): async SQLAlchemy database setup with pgvector extension and data models
- `tests/`: test directory present
- `requirements.txt`: fully specified with sentence-transformers, torch, BM25, tiktoken, markdown-it-py — a complete retrieval stack
- `config/`: configuration directory

## Ending state
The directory structure and dependencies are meaningfully more developed than `ai_dev_framework`, but the MCP server itself (`server.py`) contains only a placeholder: "Tools and resources registered (placeholder)." The database models and setup script appear to have real implementation, but the FastMCP server — the integration point that would expose context to AI agents — was never wired up. The 18 commits suggest active development through April 2025 before stopping.

## Lesson signal
The gap between the detailed retrieval stack (pgvector + BM25 + sentence-transformers) and the placeholder MCP server suggests the data-layer work was completed first, but the final integration step connecting the retrieval logic to MCP tools was never written. Version "1.3-MVP" in the server name implies iteration happened, which makes the placeholder state more surprising.

## Lineage hints
The intended downstream use of `docs-graph-db` data — once that graph was queryable, this MCP server would be the interface for AI agents to consume it. Architecturally mirrors the MCP tooling layer described in `ai_dev_framework`'s implementation plan. The pgvector approach here is an alternative to the Neo4j vector index approach used in `llm-vectors-unstructured` and `docs-graph-db`.
