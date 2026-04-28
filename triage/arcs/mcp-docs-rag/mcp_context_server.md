# mcp_context_server

**path**: /Users/jjones/Documents/dev/projects/mcp_context_server
**last commit**: 2025-04-11 (381 days ago)
**commits**: 49
**stack**: Python 3.10 + FastMCP + SQLAlchemy 2.0 (async) + pgvector + sentence-transformers + PyTorch + Alembic + Postgres
**status**: abandoned

## What exists
- `src/mcp_context_server/main.py` (10K) — FastMCP server with a status resource, ping tool, review_code prompt, and a `trigger_processing` tool that queries a Postgres-backed `TaskQueue` and `Document` table to enqueue reprocessing jobs
- `src/mcp_context_server/db/models.py` (12.8K) — SQLAlchemy async models for `Document`, `ProcessingJob`, `TaskQueue` with timezone-aware timestamps and configurable vector dimensions
- `src/mcp_context_server/core/config.py` (7.6K) — Pydantic settings with database URL configuration and server metadata
- `docs/` — MCP specification docs, Python SDK reference, and tool documentation (synthesized once as reference material)

## Goal (1 sentence)
An MCP server that ingests technical documentation (markdown, PDFs, web pages), stores it in Postgres with pgvector embeddings, and exposes it as retrieval context tools for AI assistants.

## Ending state
The processing pipeline was never implemented — `main.py` contains `# ... (previous implementation) ...` placeholder comments inside several functions, and the `trigger_processing` tool creates `TaskQueue` entries but there is no worker that consumes them. The `src/mcp_context_server/core/` module has only `config.py` and `logging_config.py`; there is no chunking, embedding, or retrieval logic. The last 5 commits show repeated "implement initial project structure" / "remove empty files" cycling (commits `275d749`, `1d696c8`, `c5f2855`, `03d19ba`), suggesting the implementation never got past scaffolding.

## Lesson signal
The dependency set (PyTorch 2.2.2, torchvision, torchaudio all pinned; sentence-transformers for local embeddings) indicates a local-embedding approach rather than an API-backed one. Pinning the full torch ecosystem for a server-side embedding pipeline creates a heavyweight dependency that may have been the friction point — `pyproject.toml` notes the pins came from a `requirements_current.txt` freeze, implying a prior failed attempt at flexible versioning. Aria's memory system solved a nearly identical problem (document ingestion + graph storage + retrieval via MCP) and is much further along; this may have been superseded by aria rather than independently completed.

## Lineage hints
- Functionally identical goal to aria's `src/library/` pipeline (document ingestion, embedding, MCP retrieval) — likely a predecessor or parallel attempt
- No explicit references to other repos in this list by name or path
- `docs/` contains synthesized MCP spec docs similar in spirit to the ai-docs bundles in claude-agent-sdk, suggesting a common pattern of bundling official docs locally
