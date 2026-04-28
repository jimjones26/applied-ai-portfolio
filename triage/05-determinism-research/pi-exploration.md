# pi-exploration

**path**: /Users/jjones/Documents/dev/projects/pi-exploration
**last commit**: 2026-04-27 (0 days ago)
**commits**: 1
**stack**: docs-only (Markdown architecture docs)
**status**: scratch

## Goal (1 sentence)
Architecture planning space for neura-core-v4 and the "Stoic Architecture" design discipline — capturing a language-agnostic high-level design blueprint before any implementation begins.

## What exists
- `docs/architecture/neura-core-v4-hlad-v0.6.md` (119KB): a detailed High-Level Architecture Design document defining neura-core-v4's subsystems, durable objects, invariants, and design qualities (continuity, correctness, bounded autonomy, provenance) — explicitly language- and storage-engine-agnostic
- `docs/architecture/archive/`: older architecture draft versions

## Ending state
Single-commit repo created today (2026-04-27). Contains only the v4 architecture blueprint at draft v0.6. No subsystem specs, no ADRs, no implementation has begun. The document positions itself as the artifact that future specs "refine rather than replace."

## Lesson signal
Not stopped — just started. This is a planning repo capturing architecture intent before implementation, consistent with the "design before implementation" discipline being developed in pi-harness.

## Lineage hints
- `neura-core-v4-hlad-v0.6.md` directly references the neura-core lineage (v1 = nuera-core, v2 = neura-core, v3 = neura-core-v3) and is scoped as the next generation
- The Stoic Architecture methodology being developed in pi-harness is intended to gate implementation of v4 — this doc would be the first design artifact put through that workflow
