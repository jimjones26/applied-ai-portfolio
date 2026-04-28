# website-builder

**path**: /Users/jjones/Documents/dev/projects/website-builder
**last commit**: 2025-09-29 (210 days ago)
**commits**: 314
**stack**: TypeScript + Node.js + Puppeteer + Lighthouse + Handlebars + Anthropic API (Claude) + PostgreSQL + TailwindCSS
**status**: abandoned

## Goal (1 sentence)
An AI-powered website rebuilder that crawls an existing site, analyzes its content and performance with Lighthouse, uses Claude to generate semantically restructured HTML/CSS, and outputs a deployable static site — designed as an internal tool for a speculative website sales workflow.

## What exists
- 13-step slash-command pipeline: crawl (`/01-crawl`) → lighthouse analysis → LLM-driven content analysis → sitemap suggestion → content generation → template generation → rebuild (YAML content fragments) → template assembly (Handlebars) → content validation (fabrication prevention) → harmonization → semantic CSS generation → image optimization → favicon generation
- `src/crawler.ts` (71.7K) — Puppeteer-based crawler with robots.txt, rate limiting, URL list mode, image metadata, SEO signal extraction, and GitHub service integration
- `src/tools/` — deploy-website, image-optimizer (AVIF/WebP), template-assembler (Handlebars-based), favicon-generator, tailwind-init; `src/reporting/` — scheduled report generation with nodemailer; `src/database/` — Postgres schema + migrations for crawl data
- Content validation step (`/09-validate-content`) explicitly described as "CRITICAL: prevent fabrication" — LLM content is checked against source before assembly

## Ending state
The last 5 commits show active feature work through September 2025: adding AI searchability docs for markdown (2025-09-29), a TailwindCSS Plus + Astro architecture plan (suggesting a planned migration to Astro), a mobile-first responsive design fix, and some CSS iteration. The architecture plan commit ("Add comprehensive TailwindCSS Plus + Astro architecture plan") suggests the project was mid-pivot toward a different frontend framework before stopping. The crawler.ts at 71.7K is the heaviest single artifact, indicating most engineering effort went into crawling reliability.

## Lesson signal
The `/09-validate-content` step ("CRITICAL: validate content against source to prevent fabrication") and the commit "Streamline content generation with strict fact verification" indicate that LLM content hallucination during site reconstruction was a real operational problem, not a theoretical one. The harmonization step (`/10-harmonize-site`, described as "REQUIRED before Step 11") emerged as a necessary intermediate — LLM-generated HTML sections had inconsistent structure that had to be normalized before CSS could be applied. The 13-step pipeline length reflects accumulated patches to quality failures rather than upfront design. The `iap-al` repo contains planning artifacts for this exact platform, suggesting this was the implementation that followed that methodology exercise.

## Lineage hints
- `iap-al/speculative_website_test/` contains a "refined project idea" document for an "AI-Driven Speculative Website Builder Platform" that matches this project's purpose almost exactly — `iap-al` was the planning phase for website-builder
- CLAUDE.md saves docs to `ai-docs/project-docs/` using the same local-docs bundling pattern as claude-agent-sdk and mcp_context_server
- No imports referencing other repos in this list by path
