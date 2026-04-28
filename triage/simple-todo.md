# simple-todo

**path**: /Users/jjones/Documents/dev/projects/simple-todo
**last commit**: 2025-02-28 (423 days ago)
**commits**: 35
**stack**: SvelteKit 2 + Svelte 5 + Tailwind CSS 4 + shadcn-svelte + Prisma (SQLite) + nodemailer + Playwright + Vitest
**status**: abandoned

## Goal (1 sentence)
A SvelteKit 5 application built around magic-link (passwordless) email authentication — the "todo" framing was likely a thin pretext; the actual work was scaffolding and validating the auth stack.

## What exists
- Magic-link auth flow: login page (`src/routes/login/+page.svelte`), email-sending server action (`+page.server.ts`), email confirmation page (`login/sent/`), nodemailer integration, Prisma schema with `User` and `MagicLinkToken` models (SQLite)
- `src/lib/auth.ts` — magic link token generation and verification logic
- E2E tests (Playwright) for the login page email input, submit button, and magic link URL construction; unit tests with nodemailer mocking
- Full toolchain configured: Tailwind CSS 4, shadcn-svelte (bits-ui), superforms, formsnap, prettier, eslint, vitest, playwright

## Ending state
The last commit (2025-02-28) added an email verification request in the login flow — the auth cycle was functionally complete. There is no todo feature: the only route is `/login` and its `/login/sent` confirmation step. The repo's README is the default SvelteKit scaffold README, unchanged. The Prisma schema has no `Todo` model. This was a stack validation exercise, not a product.

## Lesson signal
The repo name ("simple-todo") is misleading — no todo feature was ever built. The actual goal was validating the SvelteKit 5 + Svelte 5 runes + shadcn-svelte + magic-link auth stack. The `.aider.conf.yml` file in the root indicates this was initially worked on with Aider (AI coding assistant) before Claude Code, suggesting a tooling transition partway through. The Gemini model reference in one commit (`Update Gemini model to 2.0-pro-exp-02-05`) confirms multiple AI tool experiments.

## Lineage hints
- The frontend stack (SvelteKit 5, Svelte 5 runes, Tailwind CSS 4, shadcn-svelte, magic-link auth) is a direct match for lead-guardian's frontend — this almost certainly served as the scaffolding testbed for lead-guardian's auth system
- No explicit cross-repo file references, but the stack identity is too close to be coincidental
