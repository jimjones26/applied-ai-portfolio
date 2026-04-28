# speculative-website-builder

**path**: /Users/jjones/Documents/dev/projects/speculative-website-builder
**last commit**: 2025-07-12 (289 days ago)
**commits**: 50
**stack**: Python/FastAPI, SvelteKit (Svelte 5), Celery + RabbitMQ, PostgreSQL + JSONB, MinIO, Playwright, Docker
**status**: abandoned

## Goal (1 sentence)
Build the first full-stack, production-grade platform to run the speculative website rebuild pipeline end-to-end, with a frontend prospect management UI and AI-powered backend crawl/analysis tasks.

## What exists
- FastAPI backend with auth, prospect CRUD, pipeline trigger endpoint, Playwright scraper service, and Celery tasks for crawl + content analysis
- SvelteKit frontend with login, protected layout, prospect list/detail pages, ProspectForm modal, and sidebar navigation (TASK-038 completed)
- Docker Compose infrastructure wiring Postgres, RabbitMQ, MinIO
- Task-directive build methodology with per-task markdown specs and a living BUILD_LOG

## Ending state
Stopped at TASK-038 (frontend prospect detail tabs). Backend reached Phase 1 auth + partial Phase 3 (crawler/LLM tasks); Phases 4-6 (pipeline engine, billing, dashboard UI) never started. The payment gateway service is explicitly a placeholder stub.

## Lesson signal
The Context7 MCP constraint (CLAUDE.md warns "IMMEDIATE AND COMPLETE FAILURE" if violated) created rigid documentation overhead. The task-directive system was methodical but slow; 38 tasks completed out of an estimated 6-phase roadmap suggests forward momentum stalled before the actual pipeline engine shipped.

## Lineage hints
This is an early full-stack attempt at the same speculative-rebuild business concept defined in AI-Website-Builder. The task-by-task build pattern was later compressed into `automated-website-rebuilder`'s story-based pipeline. `speculative-website-builder-v2` re-architected this as a pure Node/TypeScript monolith, dropping Python/FastAPI entirely.
