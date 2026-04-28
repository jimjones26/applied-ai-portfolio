# questionnaire-copilot

**path**: /Users/jjones/Documents/dev/projects/questionnaire-copilot
**last commit**: 2025-08-08 (262 days ago)
**commits**: 56
**stack**: Python FastAPI, Next.js 14 (TypeScript), Tailwind, shadcn/ui, PostgreSQL (Alembic), MinIO, Stripe, Docker Compose, uv, pytest
**status**: paused

## Goal (1 sentence)
A multi-tenant SaaS platform that helps organizations manage, review, and export answers to security/vendor compliance questionnaires, with LLM-assisted answer retrieval and generation.

## What exists
- Full FastAPI backend with JWT auth (refresh tokens, session limits), RBAC (admin/editor/viewer), Stripe billing (Free/Starter/Professional/Enterprise), structured JSON logging, Prometheus metrics, and disaster recovery scripts
- Next.js 14 frontend through Sprint 11: dashboard with real stats, multi-step upload wizard, virtual-scroll review table (1500+ rows), export modal with progress tracking
- 11 sprints of documented incremental delivery; 87% backend test coverage claimed; CI disabled due to persistent test failures
- Docker Compose stack including Prometheus + Grafana monitoring and MinIO object storage

## Ending state
Sprint 11 is the last tagged sprint; core upload→review→export workflow is UI-complete but US-38 (project management) was explicitly flagged as missing before the flow can be fully tested end-to-end. CI tests were disabled mid-project due to database session and hanging-test issues that were never fully resolved. The 61 KB `full_test_results.txt` suggests significant test-debugging effort.

## Lesson signal
Sprint-driven AI-generated development produced a wide feature surface quickly but test reliability became the blocker. Disabling CI instead of fixing it is a sign the project lost steam before reaching a shippable state.

## Lineage hints
Standalone product — no cross-repo references found. The vendor security compliance PRD in `ai-docs/project/idea/vendor-security-compliance.md` is the origin document.
