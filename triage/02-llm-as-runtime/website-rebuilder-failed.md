# website-rebuilder-failed

**path**: /Users/jjones/Documents/dev/projects/website-rebuilder-failed
**last commit**: 2025-08-23 (247 days ago)
**commits**: 1
**stack**: Bash scripts, TypeScript (SQLite, event coordinator, orchestrator, quality-mesh, PatternLearner), Claude Code subagents (14 defined in .claude/subagents/), hooks
**status**: abandoned

## Goal (1 sentence)
Build a parallel agent swarm for website rebuilding using Claude Code subagents called from bash scripts, with an event-driven coordinator, SQLite learning database, and a quality mesh for continuous self-improvement.

## What exists
- 14 subagent definitions covering discovery (crawler, lighthouse, tech-detector, asset-scanner), analysis (seo-expert, a11y-guardian, perf-optimizer, ux-analyst), creation (content-writer, style-designer, html-builder, image-optimizer), and quality (quality-checker, auto-fixer)
- Three increasingly complex rebuild shell scripts (rebuild.sh, rebuild-working.sh, rebuild-v2.sh)
- TypeScript source for orchestrator, swarms coordinator, event emitter, quality-mesh, PatternLearner, and SQLite DB schema
- A full architecture docs directory (ARCHITECTURE.md, PRD-v2, GREENFIELD-ARCHITECTURE, LEARNING-SYSTEM, MIGRATION-COMPARISON, STARTER-KIT)
- Test data from example.com: screenshots, HTML snapshots, partial analysis JSONs in data/sites/

## Ending state
Committed as a single "Initial commit: Failed website rebuilder experiment" with the explicit failure documented in the commit message. The test run on example.com captured screenshots and basic fetch, but no actual AI rebuilding occurred.

## Lesson signal
The explicit failure mode from the commit message: **subagents cannot be called from bash scripts — they only work in interactive Claude Code sessions**. The entire architecture assumed `claude --subagent=<name>` was a valid CLI invocation from shell, which it is not. This meant the orchestrator and swarm logic had no way to actually spawn agents programmatically; the system was only fetch + screenshot with no AI generation. The CLAUDE.md claims "PRODUCTION READY" and "100% success rate" — this optimistic self-assessment was the state before testing on real sites exposed the fundamental constraint.

## Lineage hints
The architecture docs in `website-rebuilder-architecture/` reference "your current website-builder" as reference material, indicating this was built after the earlier `website-builder-v2` slash-command system. The swarm/agent pattern and event-driven design were then abandoned in favor of `automated-website-rebuilder`'s sequential TypeScript pipeline using real Claude CLI calls.
