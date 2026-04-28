# lead-guardian

**path**: /Users/jjones/Documents/dev/projects/lead-guardian
**last commit**: 2026-03-10 (48 days ago)
**commits**: 46
**stack**: Python 3.13 + FastAPI + Anthropic SDK (Claude Agent SDK) + SQLAlchemy 2.0 + Celery + Redis + Postgres + SvelteKit 5 + Tailwind CSS + Docker Compose
**status**: paused

## Goal (1 sentence)
A self-hosted, multi-tenant AI agent that responds to HVAC contractor website leads in under 60 seconds, qualifies them via SMS (Vonage), and books appointments on Google Calendar — with a SvelteKit dashboard showing live metrics.

## What exists
- Complete backend: FastAPI webhook receiver, persistent per-lead Claude agent (`backend/app/agent/core.py` at 25.5K), full tool suite (`sms_service.py`, `calendar_service.py`, `email_service.py`), Celery tasks for follow-up/stale-session detection/weekly reports, SSE endpoint with Redis pub/sub for live dashboard metrics, row-level multi-tenancy across all models
- Complete frontend: SvelteKit 5 with Svelte 5 runes, JWT auth, dashboard with SSE-backed live metrics, lead list with filtering/sorting, lead detail page with conversation thread, admin pages for client management (CRUD)
- Production deployment config: Dockerfiles for backend and frontend, unified `docker-compose.yml`, Alembic migrations that run automatically on startup, environment validation on boot
- `docs/vision.md` (7K), `docs/architecture.md` (39.9K), `docs/implementation-plan.md` (25.5K)

## Ending state
Last commit (2026-03-10, Phase 9.4) completed production hardening: Alembic auto-migrations on startup, env var validation at boot, explicit credential requirements in docker-compose. The implementation plan ran through Phase 9 of what appears to be a 9-phase build. The system is architecturally complete — all major code paths exist. Whether it's been deployed against real Vonage/Google Calendar credentials or tested end-to-end is not determinable from the repo alone.

## Lesson signal
The CLAUDE.md contains a mandatory warning to pull live SDK docs before writing any Agent SDK code: "Do NOT rely on training data or web searches for SDK usage patterns — they are frequently outdated or incorrect." This was copied from claude-agent-sdk (the predecessor sandbox). The agent `core.py` (25.5K) is the largest single file in the backend, suggesting the Claude Agent SDK integration is the most complex and brittle layer. No test files are visible in `backend/tests/` beyond the scaffolded directory — unclear if integration tests against the agent were written.

## Lineage hints
- `CLAUDE.md` explicitly names `claude-agent-sdk` as the SDK dependency and references the exploration repo's doc-bundling pattern
- The frontend stack (SvelteKit 5, Svelte 5 runes, shadcn-svelte) matches `simple-todo`, suggesting simple-todo may have been the frontend scaffolding testbed used before this project
- `docs/vision.md` was written as a prompt to Claude Code (the doc ends with "Start now"), indicating the entire project was bootstrapped from a single detailed vision document
