# tiny-fish-project

**path**: /Users/jjones/Documents/dev/projects/tiny-fish-project
**last commit**: 2026-03-19 (39 days ago)
**commits**: 170
**stack**: SvelteKit 2, Svelte 5, Tailwind v4, Drizzle ORM, PostgreSQL, Clerk, TinyFish API, AI SDK (OpenAI), Chart.js, Puppeteer, node-cron, Bun
**status**: paused

## Goal (1 sentence)
"Argus" — a three-module B2B intelligence platform (Sales Intelligence, Competitive Intelligence, Compliance Monitoring) built as the primary TinyFish Accelerator Demo Day project, using TinyFish agents to automate research workflows.

## What exists
- Full SvelteKit app with 5 route groups: dashboard, sales, compete, comply, history, settings, plus invite and CRM/export/share/stream API routes
- 11 Drizzle migration files establishing a mature schema; working Clerk auth with lazy user sync and role-based team invites
- Module implementations: sales briefings, competitor tracking with comparison and removal, compliance filing feed with alert rules and review workflow, PDF export via Puppeteer, CRM push (Salesforce/HubSpot OAuth stubs), scheduled research with node-cron
- Extensive pre-build research (phase 1-4 complete: accelerator rules, TinyFish business analysis, key individual dossiers, idea selection)
- `strategy.md` documents the deliberate research-first selection process that led to Argus over procure-forge

## Ending state
Development reached Slice 7 (S07-08) covering credential vault integration with the TinyFish vault API, team management, and trend charts. The commit history shows steady feature delivery through 7 full slices. Work stopped 39 days ago; no explicit stopping reason in the repo, suggesting the accelerator program concluded or Demo Day passed.

## Lesson signal
The structured slice-based delivery (S01 through S07 with numbered sub-tasks) enabled consistent progress across a wide surface area. Choosing a "platform play" (three modules) over a single-workflow tool like procure-forge appears to have been the correct Demo Day strategy, based on the depth of implementation reached.

## Lineage hints
Direct successor to procure-forge in the TinyFish Accelerator context — the `docs/strategy.md` documents the pivot from procure-forge to Argus. Both share TinyFish SSE streaming, SvelteKit 5, Clerk auth, and OpenRouter/AI SDK for LLM calls.
