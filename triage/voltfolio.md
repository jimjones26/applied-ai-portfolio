# voltfolio

**path**: /Users/jjones/Documents/dev/projects/voltfolio
**last commit**: 2026-03-05 (53 days ago)
**commits**: 9
**stack**: SvelteKit 2, Svelte 5, Tailwind v4, SurrealDB, Auth.js, layerchart, Docker
**status**: paused

## Goal (1 sentence)
A freemium crypto portfolio tracker with live prices, alert rules, and a coin search, gated behind a free/Pro tier model.

## What exists
- Full auth stack wired (Auth.js + SurrealDB adapter, magic-link via Resend, route guards)
- Service layer complete: user tier, holdings, alerts, portfolio CRUD, coin search endpoint
- SurrealDB schema script defining all tables, indexes, access methods, and freemium permissions
- Dashboard UI and v1.1 refactor tasks largely checked off; Vercel deploy and smoke tests still blocked on credentials

## Ending state
The v1.1 refactor progressed through Phases 1–3 (schema, dashboard, coin search) and most of Phase 4 (freemium gating). Final tasks — Vercel env-var configuration, deploy, and live smoke test — are marked incomplete and require external credentials. Stopped 53 days ago; no broken code evident, just an undeployed app.

## Lesson signal
SurrealDB's 3.0 breaking changes (`type::thing` → `type::record`) required a patch commit late in development, suggesting the database version was upgraded mid-build and caused unexpected API churn.

## Lineage hints
No explicit cross-repo references; freemium gating pattern is conceptually adjacent to website-builder-test's two-tier pricing model.
