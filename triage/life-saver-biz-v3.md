# life-saver-biz-v3

**path**: /Users/jjones/Documents/dev/projects/life-saver-biz-v3
**last commit**: 2025-08-08 (262 days ago)
**commits**: 613
**stack**: Python, Playwright (stealth), asyncio, Claude CLI (Sonnet 4), Lighthouse, pytest
**status**: paused

## Goal (1 sentence)
A mature, production-grade Python CLI tool that crawls and deeply analyzes any website, then outputs marketing-ready business intelligence reports to support a local-business website redesign sales workflow.

## What exists
- Full async crawler with stealth/anti-detection capabilities (`crawler_stealth.py`, `anti_detection.py`, `human_behavior.py`)
- Multi-layered analysis engine: performance (Lighthouse), accessibility, security, platform detection, page/image sizing
- LLM reporting pipeline using Claude Sonnet via CLI — generates `DetailExtractor`, `BusinessImpactTranslator`, and `EvidenceBank` output
- Content creation module (recently added) for generating redesign copy
- Comprehensive pytest suite; config-file support (`--config-file config.yaml`); market research integration flag

## Ending state
613 commits makes this the most developed repo in the batch. The analysis pipeline is functionally complete and documented. A content creation feature was added late and may be partially integrated. The downstream workflow (using analysis output to build and deliver a redesign) is still not implemented in this repo — the tool produces artifacts, but nothing consumes them automatically.

## Lesson signal
Strong engineering quality (async, pooling, typed modules, real test coverage) but the product loop is still open: analysis → redesign → outreach has never been closed end-to-end. The project kept adding analysis capability instead of wiring up the downstream steps.

## Lineage hints
Direct evolution of `life-saver-biz`'s `website-analyzer-tool-v4`. Shares the same AI-First Redesign Framework concept. `web-scraping-service` and `maod-framework` both reference this same domain (website analysis) but approach it with different architectural philosophies.
