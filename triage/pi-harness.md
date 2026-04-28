# pi-harness

**path**: /Users/jjones/Documents/dev/projects/pi-harness
**last commit**: 2026-04-19 (8 days ago)
**commits**: 81
**stack**: docs + TypeScript prototype (Pi extensions, Docker Compose)
**status**: active

## Goal (1 sentence)
A project-local prototype of "Stoic Architecture" as a Pi workflow — a gated design discipline that forces explicit separation of deterministic vs. non-deterministic (LLM) behavior before implementation is unlocked.

## What exists
- Stoic Architecture framework documents (`docs/frameworks/stoic-architecture-v0.3.md`, `stoic-pi-v1-spec.md`, `stoic-design-artifact-template-v1.md`) and originating idea in `docs/ideas/`
- TypeScript Pi extension prototype (`.pi/extensions/stoic/index.ts` and `utils.ts`) implementing five slash commands: `/stoic-start`, `/stoic-design`, `/stoic-check`, `/stoic-status`, `/stoic-implement`
- A 23KB test plan (`docs/stoic-pi-test-plan.md`) that defines exactly what a validation run must prove before the workflow is considered trustworthy
- `docs/archive/` with previous framework drafts and intermediate analysis

## Ending state
The last batch of 81 commits (ending 2026-04-19) systematically filed and closed GitHub Issues (#5, #7, #12, #13, #15, #22, #26, #31, #32, #37) fixing gaps in the framework: BR classification, MissingAuthorizingBR gap type, walker sequentiality, ripple protocol, FlowGranularity, and cross-reference enrichment. Phase 6 was marked complete. The prototype now does better phase gating and design-target anchoring but per the README does not yet deeply validate semantic design quality.

## Lesson signal
Work is actively iterating on framework correctness via the issue tracker. The README is candid that the checker still misses semantic quality, not just structural completeness. The test plan exists but has not yet been executed against a real system end-to-end — that run is the stated next step.

## Lineage hints
- The Stoic Architecture framework originated here and is intended to gate implementation of neura-core-v4 (see pi-exploration)
- `docs/stoic/design.md` is the default project-level design artifact path for any system run through the workflow
- `docker-compose.yml` present but no application code — the harness is purely a workflow/tooling repo
