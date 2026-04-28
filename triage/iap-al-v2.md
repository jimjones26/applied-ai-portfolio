# iap-al-v2

**path**: /Users/jjones/Documents/dev/projects/iap-al-v2
**last commit**: 2025-07-15 (286 days ago)
**commits**: 23
**stack**: Docs/prompts only — no runnable code; Markdown, YAML (Claude Code commands)
**status**: docs-only

## Goal (1 sentence)
A research and prompt-engineering repository for iterating on IAP-AL (Iterative AI-Prototyping Adaptive Loop), a multi-phase Claude Code command framework for AI-orchestrated microservice development.

## What exists
- `philosophy/` directory with first-principles essays on AI-assisted development (context loss, probabilistic generation, pattern-based validation)
- `protocols/` directory with per-phase prompt templates: idea refinement, goal artifact, modular decomposition, prototyping (generic and microservice-specific), integration agent, validation
- `experiments/` with a prompt-iteration tracking system (experiment log, versioned prompts, results directories)
- `artifacts/` with a goal artifact and module breakdown for a web scraper test case

## Ending state
This is purely a prompt-development sandbox. The framework was being empirically tested using a web scraper as the target project — experiment-001 ran and discovered sub-agent coordination issues; experiment-002 was planned but no results directory was ever created. No code was generated here; that output lives in `web-scraping-service`.

## Lesson signal
Methodology research repo: the insight being tested is that explicit directory instructions, interface pre-coordination, and a "composer not creator" framing for integration agents reduces AI-generated code drift. The experiment log shows this was an active empirical process, not just documentation.

## Lineage hints
IAP-AL v2 is the prompt-framework predecessor to both MAOD (`maod-framework`) and the microservice-oriented repo. The web scraper test case referenced in `artifacts/` and `experiments/` corresponds directly to `web-scraping-service`. An earlier `iap-al` repo (already triaged separately) likely contains v1.
