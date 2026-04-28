# website-builder-test

**path**: /Users/jjones/Documents/dev/projects/website-builder-test
**last commit**: 2026-03-02 (56 days ago)
**commits**: 310
**stack**: Python (uv), Playwright, BeautifulSoup, SQLite, Astro (generated sites), SvelteKit (dashboard)
**status**: paused

## Goal (1 sentence)
An automated "speculative website rebuild" pipeline: crawl local business websites, generate rebuilt versions, and run outreach email campaigns to convert them into paying clients.

## What exists
- Full multi-phase pipeline: crawl → content extract → business profile → site generation → outreach email sequences
- SQLite campaigns database (1.3MB) with live campaign data across 15+ real business domains
- SvelteKit dashboard for campaign management with status tracking, email scheduling, and conversation thread sync from Gmail
- Python skill scripts for each pipeline phase, migration scripts for schema changes, and a `refresh_campaign_emails.py` orchestrator
- Extensive markdown research: 36K-word marketing report, 29K-word SEO/geo research, site status tracker, outreach overhaul plan

## Ending state
Active campaigns were running for Group A sites (7 domains) with a 3-email sequence, and Group B (4 domains) was ready to launch. Group C (6+ domains) had completed the build phase but never ran outreach. The last commit bumped daily send limits and added Gmail thread syncing; work halted ~56 days ago with campaigns mid-flight and no stated stopping reason.

## Lesson signal
310 commits over a sustained period indicates this was a production-adjacent system, not a toy. The migration scripts (`migrate_to_report_page.py`, `migrate_social_links.py`) show iterative business model pivots (from name-your-price to two fixed tiers) being applied retroactively to already-built sites.

## Lineage hints
life-saver-biz-v2 shares the same "automated business website" thesis at larger scale; `SKILL-ORCHESTRATION-PATTERN.md` in this repo likely influenced the agent skill pattern used there.
