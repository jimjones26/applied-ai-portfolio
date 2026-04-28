# simple-task-v5

**path**: /Users/jjones/Documents/dev/projects/simple-task-v5
**last commit**: 2025-03-11 (412 days ago)
**commits**: 18
**stack**: SvelteKit 2, Svelte 5, TypeScript, better-auth 1.2, Drizzle ORM, better-sqlite3, Tailwind CSS 4, Vitest, Playwright
**status**: scratch

## Goal (1 sentence)
Validate the better-auth library as a drop-in replacement for Lucia/Prisma on the same SvelteKit 5 stack, with a Drizzle ORM backend.

## What exists
- `src/lib/auth.ts`: `betterAuth()` configured with `drizzleAdapter` (SQLite provider) and email/password enabled
- `src/hooks.server.ts`: `svelteKitHandler` wiring better-auth into the request lifecycle
- `src/lib/server/`: Drizzle schema and db connection (better-sqlite3)
- `src/routes/auth-client.ts` and `auth.ts` stubs — client-side auth client initialized
- Drizzle migration journal and reset commits showing schema churn during auth setup
- No UI beyond the default SvelteKit scaffold page; no task views

## Ending state
better-auth is wired server-side and hooks are connected; the schema was reset at least twice while stabilizing the auth tables. No protected routes, no task CRUD, and no login UI were built. Work ended after the auth setup commit.

## Lesson signal
The name change from "simple-todo" to "simple-task" and the library swap (Lucia → better-auth) signals a deliberate decision to test better-auth's Drizzle adapter specifically. Drizzle (not Prisma) is the new persistence layer — this is the point where the stack commits to Drizzle + better-auth, carried forward into project-viewer.

## Lineage hints
Direct successor to simple-todo-v4 (Flask + Svelte split). Returns to pure SvelteKit but swaps Prisma+Lucia for Drizzle+better-auth. The "v5" numbering continues the todo arc despite the name change. project-viewer and simple-todo-v6 both post-date this; project-viewer adopts Drizzle but replaces better-auth with Oslo crypto sessions.
