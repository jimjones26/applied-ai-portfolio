# ai_dev_framework

**path**: /Users/jjones/Documents/dev/projects/ai_dev_framework
**last commit**: 2025-05-03 (389 days ago)
**commits**: 5
**stack**: Python (uv/pyproject.toml), no implementation code
**status**: docs-only

## Goal (1 sentence)
Build an autonomous AI-driven enterprise software development framework using A2A (Agent2Agent) and MCP (Model Context Protocol) where specialized AI agents design, code, test, and deploy software under human oversight.

## What exists
- `PROJECT_OVERVIEW.md` (13 KB): full architectural vision with A2A/MCP protocol design, agent roles (Orchestrator, Coder, Tester, Requirements, Deployment, Maintenance), and phased rollout
- `DETAILED_IMPLEMENTATION_PLAN.md` (40 KB): exhaustive Phase 0–N task breakdown, all tasks marked "To Do"
- `PROGRESS_TRACKER.md` (18 KB): table of all implementation tasks — every single one shows status "To Do"
- `TECH_STACK.md`, `CODE_INVENTORY.md`: supporting documentation
- `pyproject.toml` and `uv.lock` exist but contain no source code or installed A2A/MCP dependencies

## Ending state
No implementation has begun. The `pyproject.toml` is a shell with dev tool config (ruff, mypy) but no runtime dependencies for A2A or MCP. The progress tracker's "Last Updated: YYYY-MM-DD HH:MM" placeholder was never filled in. All 18+ Phase 0 tasks remain "To Do." This is a docs-only project.

## Lesson signal
The planning effort is substantial (70+ KB of docs across 5 files) but was never converted into code. The ratio of documentation to implementation (100:0) and the placeholder date in the progress tracker suggest the project was abandoned immediately after the planning phase was completed in a single session.

## Lineage hints
Direct evolution of `framework-story-gen` — takes the same phased AI-assisted development philosophy and formalizes it as a Python project with A2A/MCP protocols. The agent orchestration vision here maps onto `ai-context-system`, which is the one repo in this batch that did begin MCP server implementation.
