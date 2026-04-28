# life-saver-biz-v2

**path**: /Users/jjones/Documents/dev/projects/life-saver-biz-v2
**last commit**: 2026-01-13 (104 days ago)
**commits**: 321
**stack**: FastAPI, Python 3, Neo4j, Redis, MinIO, ARQ (async workers), Haystack AI pipeline service, SvelteKit 2 (frontend), Docker Compose, Playwright, Anthropic SDK, Google Gemini
**status**: paused

## Goal (1 sentence)
A SaaS platform automating the "speculative website rebuild" business model: AI-powered prospect discovery, market report generation, screenshot capture, and project management for selling rebuilt websites to small businesses.

## What exists
- Full backend: FastAPI app with routers for prospects, projects, market reports, clients, dashboard KPIs, and activity feed; Prometheus metrics; Redis caching; JWT auth
- Service layer: prospect service, market report service, embedding service, prompt service (with DB-backed prompt management and `expected_output_schema`), job queue, screenshot service (Playwright), MinIO for storage, LLM trace service
- Shared `lifesaver-common` package extracted for reuse across services; Neo4j graph DB for relationship modeling
- SvelteKit frontend with Skeleton UI, routes for dashboard, prospects, projects, market-intelligence, diagnostic reports, observability, and jobs
- Haystack AI pipeline microservice and ARQ background worker for async processing

## Ending state
321 commits across a broad full-stack surface. The last active development cluster (late commits) focused on performance optimization for the prospects page, a centralized prompt management system, and completing the `simple-project-workflow` service with tests. Halted 104 days ago. No broken state noted, but several TODO comments were observed in commit messages. The `lifesaver-common` extraction indicates the architecture was maturing toward multi-service deployment.

## Lesson signal
The Neo4j graph database choice for prospect/project relationship modeling adds significant infrastructure overhead (separate container, Cypher queries) compared to a relational approach; this may have slowed feature velocity for what is essentially a CRM-adjacent data model.

## Lineage hints
Shares the "speculative website rebuild" business model concept with website-builder-test, but v2 rebuilt everything as a proper multi-service SaaS rather than a Python script pipeline. The Anthropic SDK and Playwright usage pattern appears in both repos.
