# simple-todo-v2

**path**: /Users/jjones/Documents/dev/projects/simple-todo-v2
**last commit**: 2025-02-28 (423 days ago)
**commits**: 24
**stack**: SvelteKit 2, Svelte 5, TypeScript, Prisma 6 (SQLite), Tailwind CSS 4, Vitest, Playwright
**status**: scratch

## Goal (1 sentence)
Validate email magic-link authentication (custom verification token flow) on SvelteKit 5 with Prisma as the ORM, mirroring the lead-guardian auth approach.

## What exists
- `src/routes/login/+page.svelte`: a Tailwind-styled email form that submits to `/api/auth/signin/email` and shows "Check your email for the magic link!"
- `src/routes/api/auth/`: SvelteKit API route handling magic-link email dispatch and token verification
- `src/routes/tasks/+page.svelte`: a stub tasks page (46 bytes — likely just a placeholder)
- `prisma/schema.prisma`: User model with verification token support
- `hooks.server.ts` (1.3 KB): session/auth middleware
- Tests covering magic-link endpoint, token creation (with Prisma mocking), and an e2e magic-link flow

## Ending state
Magic-link auth is largely wired: the login UI, email endpoint, and token system are all present. The tasks page is an empty stub. Work stopped after fixing token creation syntax and enabling the email verification e2e test — authentication works, the app does nothing after login.

## Lesson signal
Learned the SvelteKit server-route + Prisma pattern for token-based auth; the commit history shows iteration on `+server.ts` request URL handling and Prisma mock syntax in tests. Established the testing patterns (Vitest unit + Playwright e2e) carried forward through all subsequent versions.

## Lineage hints
First version after the original simple-todo (v1, magic-link + SvelteKit + Lucia per earlier triage). v2 drops Lucia and implements a custom token flow directly against Prisma. v3 re-introduces Lucia but with a Prisma adapter, effectively combining lessons from v1 and v2. The login page UI here (Tailwind card layout) matches the lead-guardian frontend aesthetic.
