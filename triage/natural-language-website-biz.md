# natural-language-website-biz

**path**: /Users/jjones/Documents/dev/projects/natural-language-website-biz
**last commit**: 2025-07-22 (279 days ago)
**commits**: 50
**stack**: No traditional code — natural language markdown modules executed by Claude as runtime; Python tools for crawling (website-crawler.py) and Lighthouse analysis (lighthouse-analyzer.py)
**status**: abandoned

## Goal (1 sentence)
Explore whether a complete business application — prospect management, website crawling, content analysis, outreach — could be built entirely in plain-English markdown "modules" with Claude acting as the runtime interpreter.

## What exists
- Natural language modules organized by domain: prospect-management, website-analysis, website-crawling, market-research, hosting-packages, maintenance-packages, test-utilities
- Slash commands as the user interface layer, wired to nl-modules
- A test-creation guide (35KB) documenting the pattern for validating NL-code behavior
- Two real Python tools (website-crawler.py, lighthouse-analyzer.py) for operations Claude cannot perform via tool calls alone
- Data stored as markdown files under /data/; CLAUDE.md enforces no direct writes — only slash command execution

## Ending state
The prospect CRUD flow (list, view, search, delete, update) was implemented and tested. A website crawl + Lighthouse + screenshot test was added last. The commit "remove files claude added on its own" signals Claude repeatedly broke the no-direct-file-write constraint.

## Lesson signal
The NL-code paradigm proved brittle at the edges: Claude couldn't reliably self-constrain from using Write/Edit tools directly (enforced boundary required constant correction), and operations requiring deterministic I/O (datetime logging, file rotation, crawl timeouts) kept failing and needed iterative fixing that NL instructions couldn't express precisely.

## Lineage hints
Conceptually parallel to the full-stack attempts but takes a radically different path — no server, no framework, Claude IS the runtime. The website-crawling module and Lighthouse analysis tools feed the same speculative-rebuild concept. This experiment directly informed the decision to return to real TypeScript code in `automated-website-rebuilder`.
