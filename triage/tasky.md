# tasky

**path**: /Users/jjones/Documents/dev/projects/tasky
**last commit**: 2025-01-24 (458 days ago)
**commits**: 1
**stack**: SvelteKit 2, Svelte 5, TypeScript, Drizzle ORM, better-sqlite3, Tailwind
**status**: scratch

## Goal (1 sentence)
A task management app scaffold — the cleaner, dependency-leaner restart of tasky-old.

## What exists
- Single commit ("first commit") with SvelteKit scaffold + Drizzle ORM wired to better-sqlite3
- Drizzle schema defines a `user` table with only `id` and `age` columns — clearly placeholder
- No routes beyond `+page.svelte` (empty scaffold) and `+layout.svelte`
- Dependencies are trimmer than tasky-old: no shadcn/superforms/formsnap, just the core stack

## Ending state
This is an empty project template — one commit, no application logic, no UI components, and a trivially stub Drizzle schema. It was either the starting point for a planned rewrite or a clean-slate experiment that was immediately abandoned.

## Lesson signal
Unclear — likely the author wanted a fresh start with a simpler dependency footprint (better-sqlite3 over @libsql/client, no UI component library yet). Never progressed past scaffolding.

## Lineage hints
Direct successor to tasky-old: same project name in package.json, same Drizzle + SvelteKit pattern, but stripped back. tasky-old has 7 commits and a settings page with superforms/formsnap; tasky has 1 commit with none of that — a reset, not a continuation.
