# performance_tracker

**path**: /Users/jjones/Documents/dev/projects/performance_tracker
**last commit**: 2024-12-05 (508 days ago)
**commits**: 49
**stack**: SvelteKit 2, Svelte 5, TypeScript, better-sqlite3, @pilcrowjs/db-query, @node-rs/argon2, @oslojs/* (crypto/OTP/encoding), sveltekit-superforms, Zod, Tailwind, bits-ui, lucide-svelte, uqr (QR codes)
**status**: abandoned

## Goal (1 sentence)
A full auth system — login, signup, email verification, 2FA (TOTP + recovery codes), password reset — misnamed as a "performance tracker," likely a reused scaffold or renamed learning project.

## What exists
- Complete authentication route tree: `/login`, `/signup`, `/verify-email`, `/2fa`, `/2fa/setup`, `/2fa/reset`, `/forgot-password`, `/reset-password`, `/settings`
- Server-side session management (`session.ts`), rate limiting (`rate-limit.ts`), encryption (`encryption.ts`), password hashing (argon2), email sending stub
- TOTP setup with QR code generation (`uqr`), recovery code management
- SQLite database via `@pilcrowjs/db-query` (a low-level query adapter, not an ORM)
- Cursor rules file present, indicating AI-assisted development throughout

## Ending state
The most complete project in the batch — a fully implemented auth system with TOTP 2FA. The home route (`/`) exists and redirects unauthenticated users through the full auth flow. No "performance tracking" feature was ever built — the project name does not match the content.

## Lesson signal
This was clearly a deep dive into session-based auth architecture with SvelteKit server actions, using the Lucia-auth adjacent Oslo libraries. The mismatched name suggests either an early-stage pivot or a reused project directory.

## Lineage hints
No direct lineage to other repos in this batch, but shares the Oslo crypto/auth library stack with paic-svelte01. The `.cursorrules` file mirrors patterns seen in agents-workflows.
