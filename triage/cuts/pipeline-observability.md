# pipeline-observability

**path**: /Users/jjones/Documents/dev/projects/pipeline-observability
**last commit**: 2026-02-11 (75 days ago)
**commits**: 2
**stack**: SvelteKit 5, Svelte 5, Tailwind CSS 4, better-sqlite3, TypeScript
**status**: abandoned

## Goal (1 sentence)
A SvelteKit dashboard for observing Claude Code pipeline events — ingesting hook payloads from an agent harness and displaying them as a live observability feed.

## What exists
- SvelteKit app scaffold with an `api/runs/` route, `src/lib/` components, and a `data/observability.db` SQLite database (with non-empty WAL — 704KB — suggesting some real data was ingested)
- Two commits: initial scaffold and one iteration rebuilding agent ingestion around actual hook payloads
- Source structure shows `routes/api/`, server/client split, and a `types.ts`

## Ending state
Work stopped after 2 commits on 2026-02-11. The second commit ("Rebuild agent ingestion around actual hook payloads") suggests the initial approach didn't match the real payload format and was corrected, but development halted immediately after. The SQLite WAL file indicates real data was ingested at some point, but no further UI or feature work followed.

## Lesson signal
Unclear whether stopped because the observability need was satisfied by other means, or because the project was deprioritized when neura-core-v3's Track 1 became the active focus. The hook payload mismatch on commit 2 suggests the integration was still being figured out when work stopped.

## Lineage hints
- Directly related to Claude Code hook/agent observability infrastructure; the ingested events would be Claude Code dispatch payloads
- No explicit cross-repo imports, but conceptually feeds the same development workflow as pi-harness (which has its own `.pi/` extension infrastructure)
