# real-transactions

**path**: /Users/jjones/Documents/dev/projects/real-transactions
**last commit**: 2026-04-21 (6 days ago)
**commits**: 764
**stack**: SvelteKit 5, Svelte 5, TypeScript, Bun, Drizzle ORM, PostgreSQL, better-auth, Postmark, Tailwind CSS 4, shadcn-svelte, Playwright
**status**: active

## Goal (1 sentence)
MyTeeCee — a chat-first mobile PWA AI transaction coordinator for real estate agents, where an AI persona named Debbie handles outbound/inbound email communication and manages transaction milestones conversationally.

## What exists
- 7 of 8 planned vertical slices complete: foundation, first transaction, AI conversation, Debbie outbound send, reply routing, notifications/alerts, transaction lifecycle, and team features (S07 landed 2026-04-21)
- 11 comprehensive design docs (auth, contracts, transaction engine, deadline engine, communication, notifications, dashboard, team, AI conversation, API reference) plus 172KB user flows document and 101KB ROLEPLAY-CONSTRAINTS spec
- E2E Playwright test suite, manual test playbooks per slice, and a triage document tracking open product design questions
- Post-pivot architecture (April 2026) replaced Google OAuth/Gmail/Calendar with email/password auth + Postmark; migration plan executed across 88 tasks

## Ending state
Slice 07 (Team Features) landed on 2026-04-21 as the last implemented slice. One open product design issue (#76: new-invitee onboarding flow) is flagged as requiring product decisions before engineering can proceed. The triage doc notes all P0 bugs from the Slice 06 manual test run were closed. The plan-index shows 8 phases total (P0 migration through P7 team features) with P7 now complete.

## Lesson signal
The April 2026 architecture pivot (removing Google OAuth/Gmail) required a dedicated migration phase (P0, 10 tasks) before new slice work could resume — a concrete example of early provider coupling adding rework cost. The 764-commit, ~88-task plan with typed design docs and per-slice manual playbooks shows significant engineering process investment around the feature work.

## Lineage hints
- Design system tokens and visual prototype reference an external repo: `/Users/jjones/Documents/dev/projects/Real-Transactions-Docs/prototype/` (tokens.css, components.css, app/)
- CLAUDE.md references `Real-Transactions-Docs` as the prototype source of truth for the design system
- No imports from the neura-core lineage; LLM provider is user-configured at runtime (Anthropic/Google/OpenRouter/OpenAI) via Settings > Integrations
