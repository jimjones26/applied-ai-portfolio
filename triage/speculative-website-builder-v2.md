# speculative-website-builder-v2

**path**: /Users/jjones/Documents/dev/projects/speculative-website-builder-v2
**last commit**: 2025-07-14 (287 days ago)
**commits**: 41
**stack**: Node.js + TypeScript, Express, PostgreSQL + pgvector, Redis + Bull, Docker
**status**: abandoned

## Goal (1 sentence)
Re-architect the speculative website builder as a Node.js/TypeScript monolith with 8 modular service components, replacing the Python/FastAPI + SvelteKit split with a unified backend and a React frontend.

## What exists
- Phase 1 foundation complete: TypeScript project scaffold, JWT auth, user management endpoints, password reset, role-based middleware, ESLint/Prettier with pre-commit hooks
- Comprehensive project_docs with architecture manifest, domain model, component registry, integration contracts, task specs, and BUILDLOG
- 8 service directories scaffolded (auth, prospect, content, crawler, llm, pipeline_engine, billing, dashboard_ui) but only auth_service has real code
- Pre-commit quality gate (ESLint + TypeScript check) enforced via Husky

## Ending state
Stopped 2 days after the Python version, having only implemented the auth layer. Phase 2 (prospect/content services) never started. The React frontend referenced in the CLAUDE.md vision never materialized — the directory structure was created but empty.

## Lesson signal
The re-architecture decision two days in — before the Python version's pipeline engine was even built — suggests the team recognized the Python/SvelteKit split was adding friction, but the Node rewrite then stalled for the same reason: building auth infrastructure before proving the core pipeline would work.

## Lineage hints
Direct continuation of `speculative-website-builder`. The business model and pipeline concept come from `AI-Website-Builder`. The Living Architecture Documentation (LAD) pattern in `project_docs/` was then dropped in subsequent repos in favor of CLAUDE.md-centric guidance.
