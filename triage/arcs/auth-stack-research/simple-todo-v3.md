# simple-todo-v3

**path**: /Users/jjones/Documents/dev/projects/simple-todo-v3
**last commit**: 2025-03-02 (421 days ago)
**commits**: 13
**stack**: SvelteKit 2, Svelte 5, TypeScript, Lucia 3, @lucia-auth/adapter-prisma, Prisma 6 (SQLite), Tailwind CSS 4, Vitest, Playwright
**status**: scratch

## Goal (1 sentence)
Validate Lucia v3 session auth on SvelteKit 5, replacing the magic-link Prisma setup from v2 with username/password session cookies via a Prisma adapter.

## What exists
- `src/lib/auth.ts`: `new Lucia()` configured with `PrismaAdapter`, session cookie attributes, and `getUserAttributes()` returning email and username
- `src/lib/db.ts`: Prisma client singleton
- `prisma/schema.prisma`: User, Session (and presumably Task) models
- `src/routes/+page.svelte` and `+layout.svelte` stubs — no login UI, no task pages
- Commit history shows Prisma CRUD tests (User, Task, Session) added, then Lucia wired

## Ending state
Auth is configured server-side (Lucia adapter compiles) but the final commit is a Lucia config update, and there is no UI or protected route. The `@lucia-auth/adapter-prisma` override in package.json (forcing `@prisma/client ^6.3.1`) indicates a dependency compatibility fix was the last substantive work.

## Lesson signal
Learned that Lucia v3's Prisma adapter has peer-dependency friction with Prisma 6; the `overrides` field in package.json is evidence of that. v3 establishes Prisma as the ORM and Lucia as the auth library — both of which are then replaced in v5 (Drizzle + better-auth).

## Lineage hints
Direct successor to simple-todo-v2 (magic-link Prisma). Drops magic links in favour of Lucia session cookies. Both v2 and v3 use Prisma + SvelteKit; the ORM doesn't change until v5. v4 breaks the pattern completely by introducing Flask; v3 is the last pure SvelteKit+Prisma iteration.
