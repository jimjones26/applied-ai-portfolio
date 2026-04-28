# rllms-exploration

**path**: /Users/jjones/Documents/dev/projects/rllms-exploration
**last commit**: 2026-04-27 (0 days ago)
**commits**: 1
**stack**: docs-only (Python + anthropic SDK planned but not yet scaffolded)
**status**: scratch

## Goal (1 sentence)
Build a documented consulting methodology for combining deterministic code with LLMs — demonstrated via an AI Transaction Coordinator for real estate that converts an executed purchase agreement into a timeline and document checklist — using a Lambda-RLM architecture (fixed DAG planner + bounded LLM leaf calls).

## What exists
- `docs/project-notes.md` — project orientation: north star (consulting methodology, not TC product), scope (WA jurisdiction, NWMLS Form 21), architecture (deterministic spine + jurisdiction packs + LLM leaves), glossary, references
- `docs/plan.md` — 8-phase working plan with session-kickoff protocol, success criteria per phase, and a "Where We Are Right Now" pointer
- `docs/session-log.md` — single session entry (2026-04-26) documenting framing decisions, research findings from reading Flath's RLM blog, Harness's Lambda-RLM blog, and arXiv:2603.20105 (Roy et al.)
- `docs/reference/` — four synthesized reference documents: lambda-rlm-implementation-playbook.md, lambda-rlm-repo-notes.md, academic-lambda-rlm-paper-notes.md, lambda-rlm-diagram.html

## Ending state
One planning session completed yesterday (2026-04-26). No source code exists yet — the repo was initialized today. Phase 0 (Setup: `uv init`, create `src/`, `tests/`, write hello-world Claude call) is the next step, confirmed at the end of the session log. The docs represent thorough upfront design research, not stalled progress.

## Lesson signal
Too early to have a lesson signal — this is a fresh start. The session log explicitly notes one early correction: the `lambda-calculus-LLM/lambda-RLM` GitHub repo is the codebase for the Roy et al. academic paper, not the Harness blog companion repo, which doesn't exist publicly. This forced the planner design to be invented from scratch rather than ported.

## Lineage hints
- Session log notes the stack decision: Python 3.11+, `anthropic` SDK, `pydantic`, `tomllib`
- No references to other repos in this list; this appears to be a standalone new project
- The consulting framing ("deterministic spine + LLM leaves") is architecturally related to the Lambda-RLM pattern explored here; aria's memory pipeline uses a similar boundary between deterministic chunking/graph writes and LLM-driven entity extraction
