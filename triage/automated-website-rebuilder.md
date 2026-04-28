# automated-website-rebuilder

**path**: /Users/jjones/Documents/dev/projects/automated-website-rebuilder
**last commit**: 2025-09-03 (236 days ago)
**commits**: 50
**stack**: TypeScript, Node.js, Jest, Puppeteer (via Lighthouse), Claude CLI (real calls, no API), Zod validation, ESLint + Prettier
**status**: abandoned

## Goal (1 sentence)
Build a production-ready, 12-step TypeScript pipeline that crawls target websites, runs Lighthouse, generates optimized sitemaps and content, and outputs rebuilt HTML — using real Claude CLI calls (not API keys) for the AI steps.

## What exists
- 4 of 12 pipeline steps implemented as TypeScript classes extending PipelineStep base: crawl (01), Lighthouse (02), site-analysis (03), sitemap-optimization (04)
- Orchestrator with multi-site queue management (max 3 concurrent pipelines)
- StateManager with Zod-validated state files at `.pipeline-data/pipelines/{domain}/state.json`
- Claude Code hooks for checkpoint/restore/save-progress/validate-input
- Custom slash commands for each pipeline step (01-crawl through 12-generate-favicon defined)
- Monitoring directory and Jest test suite
- Strict CLAUDE.md: no mock code policy, zero fabrication policy, no `any` types

## Ending state
Steps 1-4 implemented with real functionality; steps 5-12 (HTML generation, content optimization, mobile architecture, tech implementation, QA, migration, monitoring, favicon) not started. The last commit adds a planning document for US-005 (template generation), suggesting step 5 was next but never began. Lighthouse was iteratively hardened (queue manager, reliability fixes, homepage-only optimization).

## Lesson signal
The "no mock code" and "real Claude CLI calls" constraints from the failed subagent experiment carried forward as hard rules. The step-by-step story-based development (US-004 sitemap optimization shows multiple implement/remove/re-implement cycles) suggests the pipeline architecture was solid but individual step complexity was underestimated — particularly Lighthouse reliability on real sites.

## Lineage hints
Directly responds to `website-rebuilder-failed` by switching from subagent bash-invocation to Claude CLI slash commands. Inherits the 12-step pipeline concept from `website-builder-v2`'s 11 command files. The "no API keys, Claude Code Pro Max only" constraint is an explicit callout in CLAUDE.md, echoing the same lesson from the failed subagent attempt.
