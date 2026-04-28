# claro-sight

**path**: /Users/jjones/Documents/dev/projects/claro-sight
**last commit**: 2026-03-27 (31 days ago)
**commits**: 155
**stack**: docs-only (no implementation directory found); design targets Supabase Postgres, Svelte/SvelteKit implied
**status**: docs-only

## Goal (1 sentence)
A mental health continuity platform connecting recently-discharged crisis patients to outpatient care, with consent-gated team collaboration, AI-assisted timelines, and multi-channel notifications.

## What exists
- 12 deep technical design documents covering foundation data model, auth/identity, consent engine, timeline, team management, conversation engine, safety/crisis flows, notification delivery, intake pipeline, provider knowledge, founder tools, and full API reference
- A `clarosight-user-flows.md` (141KB) and `ROLEPLAY-CONSTRAINTS.md` (62KB) document 75+ detailed user flows and AI behavioral guardrails
- Vision directory with problem statement, solution vision, data model, information architecture, requirements matrix, user journeys, and integration requirements
- All 155 commits are design walkthrough iterations (UF-xx pattern), resolving gaps found during structured design reviews

## Ending state
This is a pure design artifact — no `src/` directory, no package.json, no framework scaffold exists anywhere in the repo. The design is unusually thorough: 75 user flows have been walked and gap-resolved through an automated review process. The most recent version (UF-75) covers immutable discharge event fields. No implementation has begun.

## Lesson signal
The structured walkthrough commit pattern (`walkthrough(UF-xx): CLEAN after N walk(s), N gap(s) resolved`) suggests a disciplined AI-assisted design review process was applied to every user flow before writing any code — an intentional design-first methodology.

## Lineage hints
No cross-repo code references; the domain (mental health, post-discharge care) is entirely distinct from other repos in this batch.
