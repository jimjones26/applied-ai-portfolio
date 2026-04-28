# mcp-docs-server

**path**: /Users/jjones/Documents/dev/projects/mcp-docs-server
**last commit**: 2025-04-04 (23 days ago)
**commits**: 50
**stack**: TypeScript, Node.js, MCP SDK v1.8, PostgreSQL, natural + stopword (NLP), Express (HTTP/SSE transport)
**status**: paused

## Goal (1 sentence)
A TypeScript rewrite of the same docs-serving MCP concept: store documentation in Postgres, provide stemming/TF-IDF search, and expose retrieval tools to LLM clients via both stdio and HTTP/SSE transports.

## What exists
- Working server with stdio and HTTP/SSE transports, full DB schema, and a `db-setup.sh` reset script
- Layered src: mcp/, services/ (including a `unifiedDocumentService`), db/, utils/, types/
- An `eval-framework.md` (9.4 KB) for measuring retrieval quality
- Active improvements/ and upgrades/ directories with phased enhancement proposals (TF-IDF, search index, MDX support, background task removal, analytics)
- GitHub repo (`jimjones26/mcp-docs-server`) confirmed in package.json

## Ending state
This is the most developed iteration: 50 commits, actual NLP libraries wired in, two transport modes, and a written evaluation framework. Work stalled mid-enhancement cycle — the upgrades/01-implementation-status.md tracks partial completion of Phase 1 search improvements. No test suite exists; MDX support and analytics were added incrementally but not finalized.

## Lesson signal
The upgrades directory shows a clear pattern of scope creep: each improvement proposal spawned new sub-problems (background task removal, deduplication, MDX, analytics) before the prior one was finished. This is the most portfolio-ready of the three docs-server repos if polished.

## Lineage hints
Direct TypeScript successor to mcp_documentation_server (Python). Both implement the same hybrid-search-over-docs-via-MCP idea. docs-kb-manager-mcp is the upstream planning artifact. The `create-deliverables-mcp` notes reference a "MCP server code discrepancy with fast framework," likely referring to this server or mcp_documentation_server.
