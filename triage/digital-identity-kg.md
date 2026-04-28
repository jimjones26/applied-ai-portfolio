# digital-identity-kg

**path**: /Users/jjones/Documents/dev/projects/digital-identity-kg
**last commit**: 2025-11-21 (157 days ago)
**commits**: 50
**stack**: Python 3.9+ + Neo4j + FastMCP + ebooklib + pydantic + tiktoken
**status**: abandoned

## What exists
- Full pipeline implementation: `extractors.py`, `chunker.py`, `entity_processor.py`, `graph_builder.py`, `validators.py`, `checkpoint.py` — all written and non-trivial in size
- MCP server implementation: `server.py`, `tools.py`, `resources.py`, `prompts.py` with Dockerfile and test suites
- Neo4j schema and docker-compose
- Checkpoint-based multi-session entity extraction state management

## Goal (1 sentence)
Build a queryable Neo4j knowledge graph from two digital identity EPUBs and seven markdown blog posts, using LLM-based entity extraction across multiple Claude Code sessions, then expose it via an MCP server.

## Ending state
Phase 9 (MCP Server) was the final phase implemented, including MCP tools, resources, and prompts. The last commit (2025-11-21) fixed the MCP server config and created a fresh deployment. All 9 source documents were processed through entity extraction across 26+ sessions, deduplication was completed (Phase 6), and Neo4j graph was built (Phase 5). The project reached functional completion but no record of a running deployment or user-facing access exists.

## Lesson signal
Entity extraction across 200k context window limits required 26+ checkpoint-based sessions — the core architectural constraint was context window size driving the multi-session design. The project ran to completion at the pipeline level but was never deployed as a usable tool. The MCP server exists but would require a running Neo4j instance to be useful.

## Lineage hints
- No references to other repos in this batch by name
- No imports from other local projects
