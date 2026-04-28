# twcss-templates

**path**: /Users/jjones/Documents/dev/projects/twcss-templates
**last commit**: 2025-12-18 (130 days ago)
**commits**: 23
**stack**: HTML, Tailwind CSS 4.1, Node.js (Cheerio for HTML transforms), no framework
**status**: paused

## Goal (1 sentence)
Transform a collection of 179 raw Tailwind CSS UI blocks from non-semantic "div soup" HTML into semantically correct HTML backed by a design-system token layer that supports theming.

## What exists
- 179 raw HTML UI blocks organized into `ui-blocks-raw/marketing/` covering elements (banners, flyout menus, headers), page sections (hero, feature, pricing, testimonials, CTA, blog, contact, FAQ, footer, stats, team, bento grids), and full page examples (landing, about, pricing, 404)
- A partially completed semantic HTML transformation pipeline using Cheerio; 13 banner/element files were transformed before work stopped
- An automation tooling attempt ("over-engineered solution") that was reverted and removed
- `CLAUDE.md` with a detailed project structure guide and Tailwind v4 `@theme` directive usage notes

## Ending state
The last commit (2025-12-18, "remove stupid over-engineered solution") reverted an automation approach that was too complex. Before that, 13 banner/element files had been semantically transformed. The desired state documented in README.md — design-system theming, semantic HTML, AI manifest for block discovery — remains unimplemented beyond those 13 files.

## Lesson signal
The "over-engineered solution" removal suggests an attempt to batch-transform HTML programmatically hit edge cases that made it impractical vs. iterative manual transformation. Work paused at ~7% completion (13/179 files). No design system token layer was implemented.

## Lineage hints
- The design goals (semantic HTML for AI/SEO discoverability, design-system token layer for theming) overlap conceptually with p4p-design-system's token-to-output pipeline
- No explicit imports or references to other repos in this batch
