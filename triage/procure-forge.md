# procure-forge

**path**: /Users/jjones/Documents/dev/projects/procure-forge
**last commit**: 2026-03-25 (33 days ago)
**commits**: 189
**stack**: SvelteKit 2, Svelte 5, Tailwind v4, MongoDB 8, TinyFish API, OpenRouter, Clerk, Bun, Docker, jsPDF, Playwright
**status**: paused

## Goal (1 sentence)
A demo procurement tool that launches a swarm of TinyFish browser automation agents to scrape supplier portals (DigiKey, LCSC, Mouser, Arrow) in parallel, then uses an LLM to rank results in a live NASA mission-control-style UI.

## What exists
- Working agentic orchestrator with concurrency queue, SSE streaming, and in-memory state recovery on server restart
- Live mission monitoring page with 4x4 iframe grid showing TinyFish agent streams, event timeline, and per-supplier audit trails
- LLM-powered result synthesis (OpenRouter), sortable results table, sequential RFQ submission flow, and jsPDF export
- E2E test plan (11.7KB), per-domain RFQ templates for each supplier, rotating example specs for demo variety
- Fully containerized (Docker Compose), MIT licensed, credential-stripped for open sourcing

## Ending state
The demo was built and polished for the TinyFish Accelerator program and works end-to-end. The README explicitly documents why work stopped: Cloudflare bot protection defeats TinyFish agents on DigiKey/Mouser at unpredictable rates, credential management doesn't scale past a demo, and supplier UI fragility means any site redesign breaks the agent goals. The last commits were open-source preparation (stripping credentials, adding license).

## Lesson signal
The README's "Why I Stopped" section is an unusually honest technical post-mortem: reliable browser automation against sites that actively fight it is a maintenance burden that exceeds the value for a production procurement tool, particularly without supplier API access.

## Lineage hints
Built during the same TinyFish Accelerator cohort as tiny-fish-project/argus. Both use the TinyFish SSE API (`agent.tinyfish.ai/v1/automation/run-sse`) and share the SvelteKit + Clerk + OpenRouter stack. procure-forge was the earlier, abandoned direction; argus is the pivot project from the same accelerator.
