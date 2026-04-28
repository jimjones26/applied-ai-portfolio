# game-dev-design

**path**: /Users/jjones/Documents/dev/projects/game-dev-design
**last commit**: 2025-03-29 (28 days ago)
**commits**: 50
**stack**: Markdown (design docs), HTML templates (outputs), no runnable code
**status**: docs-only

## Goal (1 sentence)
AI-assisted game design documentation project that applied the AI-Fast-Framework (from create-deliverables-mcp) to produce a complete design package for "Space Travel Repair Man," a space survival/resource management game.

## What exists
- `framework/`: 11 phase prompt files plus `all_prompts.md` — the structured prompting chain used to drive document generation
- `outputs/`: 11 detailed design documents (exec summary, gameplay, mechanics, elements, assets, software architecture, tools/tech stack, hardware reqs, networking, performance, technical project plan) plus deliverables/ and final/
- `original_idea.md` (26.8 KB) — the fully fleshed game design spec covering power management, sector progression, ship systems, narrative
- `step1` through `step8` markdown files at top level tracking requirements, personas, journeys, flow maps, epics, user stories

## Ending state
Fully realized as a documentation project — 50 commits of iterative doc generation across all design phases. No game code was written; this is purely the planning artifact. The outputs are detailed enough to hand off to an implementer. The repo demonstrates the AI-Fast-Framework process end-to-end on a concrete domain.

## Lesson signal
The framework phasing (steps 1–11) maps cleanly to the deliverable types in create-deliverables-mcp, confirming this was a live test of that framework's workflow. The quality of the game design docs is high for AI-generated content.

## Lineage hints
Direct consumer of the AI-Fast-Framework defined in create-deliverables-mcp/framework/AI-Fast-Framework.md. The HTML templates in outputs/deliverables/ appear to be the same deliverable types (lean canvas, project brief, user stories, sitemap) that create-deliverables-mcp was designed to generate — this repo may have been the first manual run before the MCP server was built to automate it.
