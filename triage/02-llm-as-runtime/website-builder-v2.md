# website-builder-v2

**path**: /Users/jjones/Documents/dev/projects/website-builder-v2
**last commit**: 2025-09-14 (225 days ago)
**commits**: 4
**stack**: Claude Code slash commands only — 11 markdown command files, no runtime code
**status**: scratch

## Goal (1 sentence)
Define a complete 11-step website rebuild workflow as Claude Code slash commands, covering the full pipeline from crawl through post-launch monitoring.

## What exists
- 11 slash command files in .claude/commands/: 01-crawl, 02-lighthouse, 03-website-audit, 04-info-architect, 05-html-designer, 06-content-optimizer, 07-mobile-first-architect, 08-tech-implementation, 09-qa-testing, 10-migration-launch, 11-post-launch-monitoring
- No source code, no package.json, no tests — purely command definitions

## Ending state
Four commits: initial, add steps 1-2 from old builder, add comprehensive command system, then a commit removing a doc that wasn't requested. The command system was complete as a specification but never wired to any runtime implementation.

## Lesson signal
Defining the pipeline as slash commands before building the underlying code created a well-scoped spec but no executable system. The commands represent the intended pipeline shape that `automated-website-rebuilder` then tried to implement in real TypeScript.

## Lineage hints
Steps 1-2 were explicitly ported from "old website builder" (likely the AI-Website-Builder prototype concept). The 11-step numbering maps almost directly to `automated-website-rebuilder`'s 12-step pipeline. This repo functioned as a design artifact that informed both `automated-website-rebuilder` and `website-rebuilder-failed`.
