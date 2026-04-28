# life-saver-biz

**path**: /Users/jjones/Documents/dev/projects/life-saver-biz
**last commit**: 2025-06-21 (310 days ago)
**commits**: 254
**stack**: Python, Playwright, Claude CLI (LLM orchestration), Markdown-first output
**status**: paused

## Goal (1 sentence)
An AI-first lead-generation workflow for selling website redesigns to local businesses: crawl a prospect site, produce a marketing-ready analysis report, then generate email and video-script copy.

## What exists
- `website-analyzer-tool-v2` through `v4`: progressive Python crawler/analyzer with Playwright, Lighthouse, stealth anti-detection, image/page-size analysis, and LLM-powered report generation via Claude CLI
- `ai-first-redesign-framework.md` (28 KB): detailed v4.1 SOPs for multi-AI market research (Claude + Gemini + Grok) and reusable research libraries
- `Market_Research_Library/` and `research-2/`: accumulated market research assets and prototype materials
- `TODO.md`: 9-step pipeline with WAT integration complete but steps 3-9 (redesign → email/video → outreach) not yet started

## Ending state
The crawler/analyzer is fully built (all 6 milestones complete) and was being tested against a real target site (`yamaguchimartin.com`). The downstream steps — generating a new website design, producing outreach copy, and sending the email — were never started. The project stalled mid-pipeline after tooling completion.

## Lesson signal
Tooling overbuilt relative to workflow progress; 254 commits on the analysis tool while the actual sales workflow (the product goal) never started. A common pattern of perfecting the instrument before using it.

## Lineage hints
The Website Analyzer Tool is the direct predecessor to `life-saver-biz-v3`, which is a more mature Python CLI continuation of the same pipeline. The framework references `research-2/phase-1-foundation/stage-3-rapid-prototype/prototype` for email/video scripts, suggesting both repos share the same end-to-end vision.
