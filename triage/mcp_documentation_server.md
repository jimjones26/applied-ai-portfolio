# mcp_documentation_server

**path**: /Users/jjones/Documents/dev/projects/mcp_documentation_server
**last commit**: 2025-04-05 (22 days ago)
**commits**: 31
**stack**: Python, FastMCP, PostgreSQL + pgvector, SQLAlchemy, Alembic, Docker
**status**: paused

## Goal (1 sentence)
A backend MCP server that ingests documents (MD, PDF, HTML, text), chunks and embeds them into PostgreSQL with pgvector, and exposes hybrid search to AI assistants via the Model Context Protocol.

## What exists
- Full layered package structure: transport, mcp_interface, service, data_access, processing, background_task, utils
- Alembic migrations and Docker Compose for Postgres + pgvector
- FastMCP wiring in `main.py` with lifespan management, but only a `ping` tool and a status resource are actually registered — the full MCPServer class is instantiated but its tools are not surfaced
- README is polished and thorough; requirements.txt is complete with sentence-transformers, BM25, tiktoken, etc.

## Ending state
The scaffolding is architecturally complete and the DB layer is wired, but the MCP tool surface area reduces to `ping` at runtime — the deeper search/ingest tools exist in `MCPServer` but are not registered on the FastMCP instance. This is the most architecturally serious of the docs-server iterations; it got further than mcp-docs-server in Python/DB design but stalled before closing the wire between MCPServer and FastMCP tools.

## Lesson signal
The FastMCP tool registration pattern requires explicitly decorating or registering each handler on the `mcp` instance; instantiating `MCPServer(server, db)` does not automatically expose its methods. That gap was likely discovered at test time and not resolved before the branch paused.

## Lineage hints
Direct conceptual predecessor to mcp-docs-server (which rewrites the same idea in TypeScript). docs-kb-manager-mcp is the planning-only phase that preceded both. All three address the same core problem: serving LLM-optimized doc chunks via MCP.
