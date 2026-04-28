# tasky-old

**path**: /Users/jjones/Documents/dev/projects/tasky-old
**last commit**: 2025-01-24 (458 days ago)
**commits**: 7
**stack**: SvelteKit 2, Svelte 5, TypeScript, Drizzle ORM, @libsql/client (Turso), sveltekit-superforms, formsnap, shadcn-svelte (bits-ui), Tailwind
**status**: abandoned

## Goal (1 sentence)
A task management app that got further than its successor — reaching a settings page with a working form before being abandoned and restarted.

## What exists
- SvelteKit app with a settings route (`/settings`) that has a server action using superforms + Zod validation
- shadcn-svelte component library scaffolded (bits-ui, formsnap, tailwind-merge)
- Drizzle ORM configured against @libsql/client (Turso remote SQLite), with a placeholder schema
- An `Input` component with event handling; components.json for shadcn CLI

## Ending state
The most developed of the two tasky variants. Has a functional settings form with superforms validation, a shadcn component library, and a database client — but no task-related data model or UI was ever built. The same-day final commit date as `tasky` confirms it was replaced rather than extended.

## Lesson signal
The switch from @libsql/client (Turso) in tasky-old to better-sqlite3 in tasky, and the removal of shadcn/superforms/formsnap, suggests the author found the dependency stack too heavy and wanted to simplify before building actual features.

## Lineage hints
Directly replaced by `/Users/jjones/Documents/dev/projects/tasky`. Both share the same package name "tasky" and were last committed on the same date (2025-01-24).
