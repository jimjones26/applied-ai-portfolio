# maod-framework

**path**: /Users/jjones/Documents/dev/projects/maod-framework
**last commit**: 2025-07-17 (283 days ago)
**commits**: 48
**stack**: TypeScript, Node.js 20, Fastify, SQLite (better-sqlite3, Kysely), Playwright, Google Gemini AI, JWT (jose), Vitest, pnpm
**status**: paused

## Goal (1 sentence)
A completed website-analysis-to-sales-material pipeline (URL validation → scraping → content analysis → AI content generation → sales materials) built as both a working application and a demonstration of the MAOD (Minimal AI-Orchestrated Development) framework.

## What exists
- 9 fully implemented TypeScript modules in `src/`: URL Validator, Website Fetcher, Content Analyzer, AI Content Generator, Sales Material Creator, Pipeline Tracker, Data Store, Auth Module, API Gateway — all with passing Vitest tests (107+ API Gateway tests; 11-29 per module)
- Fastify backend with JWT auth, job queue system, event-driven job processors, and SQLite persistence
- `.claude/commands/` with 8 MAOD process command files (`/prime` through `/07-module-revision-feature-addition`)
- Live SQLite databases checked in (`api-server.db`, `demo.db`) indicating the system was actually run

## Ending state
All 9 modules and backend infrastructure are marked complete in CLAUDE.md. The pipeline runs end-to-end and databases show real execution. Development stopped at the integration/polish stage — no deployment configuration, no CI, no frontend. The project reached functional completeness for a demo but not production-readiness.

## Lesson signal
MAOD's "Minimal" philosophy (atomicity, empiricism, markdown-first outputs) produced a more complete result than the 21-service MOAD approach in the microservice-oriented repo. Constraining scope to 9 modules with single responsibilities kept the project finishable.

## Lineage hints
MAOD ("Minimal AI-Orchestrated Development") is a refinement of the IAP-AL methodology from `iap-al-v2`. The website-analysis domain overlaps with `life-saver-biz-v3` and the microservice-oriented repo, but uses Gemini AI instead of Claude and TypeScript instead of Python/Go. The CLAUDE.md references "959cb53 Add MAOD framework requirements to integration plan" in commit history, confirming `web-scraping-service` was an earlier test run of the same methodology. This is NOT the same project as `microservice-oriented-ai-orchestrated-development-` (MOAD vs MAOD, different expansions, different stacks, different domains).
