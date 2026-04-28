# aria

**path**: /Users/jjones/Documents/dev/projects/aria
**last commit**: 2026-03-15 (43 days ago)
**commits**: 2981
**stack**: Python 3.11 + Neo4j + Ollama + MCP (FastMCP) + Docker Compose + launchd daemons
**status**: paused

## Goal (1 sentence)
A neuroscience-inspired long-term memory system for Claude Code that ingests documents and session transcripts, extracts entities, embeds them into a Neo4j graph, and exposes retrieval via an MCP server.

## What exists
- Full service stack: Neo4j (production + test), MCP HTTP server, 3D/2D graph viewer (migrated from 3d-force-graph to Sigma.js), embedding/extraction watcher daemon, observation scanner daemon, recall regression detector daemon — all running via Docker Compose + macOS launchd
- `src/library/` — document ingestion pipeline with chunking, extraction, storage, and Ollama-backed embeddings; `src/evals/` — retrieval eval harness with delta tracking, benchmark suites, and a regression detector that files observation findings
- `src/safety/` — contamination detection (Cypher queries), context injection for subagents, hook-based docker command interception to prevent accidental production DB wipes
- `docs/` — a 42.9K "agent architecture" design document; `data/observations/findings.db` SQLite store; live backup infrastructure in `src/services/`

## Ending state
Last commit (2026-03-15) consolidated benchmarks and evals into a unified evaluation system (#416). The system was actively running production-quality eval infrastructure, not just scaffolding. The graph viewer had just been migrated from 3d-force-graph to Sigma.js (commits #402/#408) suggesting active UI iteration. No active development since mid-March; the service stack appears complete but ongoing tuning had stopped.

## Lesson signal
The repo's own safety infrastructure (hook-based docker command interception, contamination detection, multi-confirmation flows) documents a recurring problem: production Neo4j data was accidentally deleted multiple times during development. The design constraint — using `claude -p` for extraction which is only available on the host, not in Docker — forced the embedding watcher and observation scanner out of the compose stack onto launchd, creating split deployment complexity. Recall regression detection suggests the retrieval quality was unstable enough to require automated monitoring.

## Lineage hints
- `CLAUDE.md` references `~/.claude/CLAUDE.md` as the location of Aria's identity layer (commit #389 moved identity to global scope), indicating a tight coupling to the user's global Claude Code config
- No explicit references to other repos in this list by path
- The MCP server at port 8765 is likely consumed by any other Claude Code-driven project on the same machine (e.g., lead-guardian, rllms-exploration)
