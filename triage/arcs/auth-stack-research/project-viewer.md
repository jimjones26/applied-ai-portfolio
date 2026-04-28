# project-viewer

**path**: /Users/jjones/Documents/dev/projects/project-viewer
**last commit**: 2025-03-14 (409 days ago)
**commits**: 10
**stack**: SvelteKit 5, Svelte 5, TypeScript, Drizzle ORM, better-sqlite3, Oslo crypto (session auth), Tailwind CSS 4, Vitest, Playwright
**status**: paused

## Goal (1 sentence)
A "FlowStack Project Visualizer" — a SvelteKit app that reads structured project phase data from a large static JSON and renders it through phased Svelte 5 components.

## What exists
- A 96 KB `/api/project-data/+server.js` endpoint serving static phase JSON
- `phase1/` route with `Phase1Component.svelte`, `RequirementsList`, `ConstraintsList`, `ProductVision` components all migrated to Svelte 5 `$props()` syntax
- A `projectStore.js` writable store that fetches from the API and exposes `getPhaseData()`
- Full session-based auth wired up (Oslo crypto, Drizzle schema, `hooks.server.ts`) — but appears unused by the visualizer itself
- `src/routes/api/lucia/` stub suggesting an earlier auth library was tried first

## Ending state
Phase 1 display components exist and use correct Svelte 5 syntax; the auth plumbing is complete but disconnected from any protected route. Only phase 1 is scaffolded; the project data JSON likely contains more phases that were never rendered. Work stopped after the component refactor commit.

## Lesson signal
Validated Svelte 5 `$props()` migration pattern and server-side session auth (Oslo/Drizzle, not Lucia) in a SvelteKit context; the 96 KB static JSON as a data source suggests this was also exploring how to feed AI-generated structured output into a UI.

## Lineage hints
Auth approach (Oslo crypto + Drizzle sessions) is more advanced than the simple-todo arc's Prisma/Lucia/better-auth experiments — this repo appears to be downstream of those learnings. No direct version chain; stands alone as a visualizer prototype. The `api/lucia/` stub shows residual influence from simple-todo-v3's Lucia experiment.
