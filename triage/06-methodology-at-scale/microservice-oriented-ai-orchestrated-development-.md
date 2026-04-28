# microservice-oriented-ai-orchestrated-development-

**path**: /Users/jjones/Documents/dev/projects/microservice-oriented-ai-orchestrated-development-
**last commit**: 2025-07-19 (281 days ago)
**commits**: 43
**stack**: Go 1.22, SQLite (WAL), HTMX + Alpine.js + Tailwind, Podman, chi router, zerolog, testify
**status**: abandoned

## Goal (1 sentence)
A 21-microservice Go platform for automated website analysis and redesign — prospect identification through client conversion — built using a MOAD (Microservice-Oriented AI-Orchestrated Development) process with strict TDD.

## What exists
- One implemented microservice: the Data Persistence Service (`services/data-persistence-service/`) with Go repository interfaces, service interfaces, HTTP handlers, and integration tests
- `.claude/commands/` with 7 phase-specific command files (idea refinement through deployment readiness) that encode the MOAD framework
- `ai-docs/` with decomposition docs defining all 21 planned services
- Commit history shows TDD enforcement: failing tests written first, then implementation, then test coverage checks before advancing phases

## Ending state
Only the Data Persistence Service was implemented before the project stopped. With 20 services remaining and no commits after 2025-07-19, development halted after the first service. The CLAUDE.md itself acknowledges the project was in a planning/early-implementation phase. Trailing dash in the repo name suggests it was created hastily.

## Lesson signal
21-microservice scope was too large to sustain momentum in a solo AI-orchestrated workflow. The TDD-first, one-service-at-a-time approach was methodologically sound but the scope made the finish line invisible.

## Lineage hints
Same core domain (website analysis/redesign pipeline) as `life-saver-biz` and `life-saver-biz-v3`, but a complete architectural rewrite in Go with a different AI orchestration methodology. MOAD is a distinct name from MAOD (`maod-framework`) — the CLAUDE.md uses "MOAD" while the repo directory spells out "Microservice-Oriented AI-Orchestrated Development." The `maod-framework` repo uses "MAOD" for "Minimal AI-Orchestrated Development" — same acronym letters, different expansion, different tech stack, different target domain. These are parallel experiments in AI-orchestrated development methodology, not the same project.
