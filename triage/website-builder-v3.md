# website-builder-v3

**path**: /Users/jjones/Documents/dev/projects/website-builder-v3
**last commit**: 2025-09-16 (223 days ago)
**commits**: 3
**stack**: TypeScript, Node.js, Puppeteer, @octokit/rest, robots-parser, dotenv
**status**: scratch

## Goal (1 sentence)
Build a standalone website crawler that extracts site structure and content, then pushes the results to a GitHub repository as the storage/handoff layer for downstream AI processing.

## What exists
- Single large crawler.ts (71.7KB) implementing a full Puppeteer-based crawler with robots.txt compliance, GitHub integration via Octokit, and configurable crawl settings
- A config/ and services/ directory structure under src/
- A prototype brief document (claude-prototype-brief-v1.md) describing the 7-stage pipeline this crawler feeds into
- Standard TypeScript project scaffold with ts-node for dev and tsc for production build

## Ending state
Three commits all on the same day (2025-09-16): initial, add prototype brief, implement crawler with GitHub integration. The crawler appears to be a standalone extraction tool — the GitHub push was intended to decouple crawl from the AI rebuild steps. Nothing downstream of the crawl was implemented.

## Lesson signal
The GitHub-as-storage pattern was a new approach to solving the state/handoff problem that plagued earlier pipeline attempts. Extracting the crawl into a single standalone module (vs. step 1 of a larger pipeline) suggests recognition that crawl reliability was the bottleneck in `automated-website-rebuilder`. However, the repo was abandoned the same day it was created — likely superseded immediately by a different approach.

## Lineage hints
The prototype brief (claude-prototype-brief-v1.md) is dated September 15, 2025 and describes the same 7-stage pipeline from `AI-Website-Builder`'s Stage 4 foundation. This repo appears to be a same-week implementation attempt of the crawl step from `automated-website-rebuilder`, exploring GitHub as an artifact store rather than local `.pipeline-data/` files.
