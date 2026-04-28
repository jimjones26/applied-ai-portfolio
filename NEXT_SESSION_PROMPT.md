# Next Session Prompt

Copy/paste the section below into a new Claude Code session as your first message, after `cd /Users/jjones/Documents/dev/projects/applied-ai-portfolio`.

---

## Who I am

Jimmy Jones (jimmy@uxfx.io, GitHub: jimjones26). I'm building a portfolio site to support an Applied AI Engineer role at Nasdaq. My brother is Sr. Director of AI Strategy there. He's already sold on hiring me; the site exists to give him **ammunition to justify the hire** to:

1. His peers and boss (anti-nepotism — proof I have real chops)
2. HR (paper-qualified checkbox)
3. The wider AI org (this guy can prototype + translate)

## The thesis the site supports

> **"~83 projects in ~2 years, zero lines of hand-written code. The work is AI orchestration — refining visions into plans, plans into implementation, and implementation into working code, across whatever stack the problem calls for."**

This is honest and verifiable. Don't inflate. Treat AI-built code as the **work sample**, not a confession.

## What's been done (across two prior sessions)

The triage and synthesis pass is **complete**. The last session also reorganized the triage outputs and corrected the aria framing.

### Triage outputs (in `triage/`)

- **`triage/_SHORTLIST.md`** — 8 picked case studies + cross-portfolio frame + "Additional AI-orchestrated work" table + cuts. **Source of truth for what goes on the site.** Read this first.
- **`triage/_LINEAGES.md`** — full lineage map: 13 arcs, standalones, and cuts. Companion to the shortlist.
- **`triage/_INDEX.md`** — repo → arc/case-study/category lookup table. The reorg map.
- **`triage/<arc-dir>/<repo>.md`** (83 files, organized into subdirs):
  - `00-origin/` (1) — `framework-story-gen`
  - `01-build-half-worked/` through `08-adversarial-browser-automation/` (29 total) — case-study repos
  - `arcs/<slug>/` (29) — multi-repo arcs not anchoring a case study
  - `standalones/` (10) — single-repo entries cited in shortlist's Additional table
  - `cuts/` (14) — cut from the site (narrow lessons, scaffolds, planning-only)
- **`potential-project-showcase.md`** — the original raw list of repo names.

### The 8 case studies (validated)

1. **The Build Half Worked**: AI-Generated 70 Websites in 4 Weeks → 1 Paying Client + Active Pipeline
2. **When the LLM Is the Runtime** (vs. When It Can't Be)
3. **Hallucination as a Pipeline Stage**, Not a One-Time Fix
4. **Personal AI Memory: The O(history) Problem** (JARVIS = ARIA, one arc)
5. **Active Research: Mixing Determinism and Non-Determinism** for Consistent, Correct Results
6. **AI Development Methodology at Scale**: When the LLM Can't Hold the Map
7. **Production AI Agents**: Claude Agent SDK Stability as an Architectural Risk
8. **Browser Automation Against Adversarial Targets**

### Origin story (cross-portfolio frame, not a case study)

`framework-story-gen` — 1,111 commits, ~34 distinct AI-orchestration approaches tested against structured story generation. The learning lab where the methodology was built.

### Resolved questions

- **aria operational status**: aria is **deployed locally and runnable on demand, but not in active daily use** (last used several weeks before late April 2026). Case study #4 framing in `_SHORTLIST.md` and `_LINEAGES.md` reflects this honestly — *not* "operational" or "running in production." Voice rules forbid fabricated shipped status.
- **lead-guardian deployment**: never deployed in production. Case study #7 reflects this.
- **questionnaire-copilot** and **create-deliverables-mcp** (previously unclassified): now placed (`standalones/` and `cuts/` respectively); both have rows in `_SHORTLIST.md` Additional and/or `_LINEAGES.md` cuts.

## What's next: site design and build

### Decisions already made

- **Stack**: vanilla HTML/CSS, **no framework**. Author was explicit: "I'm not sure we need to get crazy and use a framework." Just static files.
- **Design reference**: pattern after `design-reference/neura-core-v2-landing.html` (copied into this repo for reference). The aesthetic to inherit:
  - Light cream surface (`#fcf8f8`) + deep orange accent (`#FF6700`) + dark inverted sections
  - Three fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono)
  - Sharp edges (`border-radius: 0` everywhere)
  - Mono numbered kickers ("01 / Sovereign Intelligence" style)
  - Editorial card grids with 1px gaps
  - Stats panels with mono numerals and uppercase labels
- **Resume**: link to a downloadable PDF (do NOT inline).
- **Hosting**: deferred — author may use GitHub Pages or a private server. Don't block on this; just build the static files such that they work from any static host.

### Open decisions for the next session

1. **Information architecture: one-page vs. multi-page?** Most likely answer: `index.html` (landing — hero, practice, case-study cards, additional grid, contact) + `case-studies/<NN-slug>.html` per case study (each a deep dive, linked from the index card). Confirm with author before scaffolding.
2. **Case-study card content** on the index — full lesson + status + stack? Or just title + one-liner + "Read the full breakdown →"? The shortlist has the long-form content; the question is how much of it lives on the index vs. the deep-dive page.
3. **The "Additional AI-orchestrated work" presentation** — the shortlist has 14 rows in a markdown table. On the site this could be:
   - A clean data-grid (mono numerals, uppercase labels, like the hero stats panel)
   - A compact card grid
   - A scrollable table styled with mono type
4. **Contact section** — email + GitHub + LinkedIn + resume PDF link. Confirm what to include.
5. **Hero stats** — what 4 numbers? Candidates: `~83` (projects), `~2 yr` (timespan), `12+` (stacks worked in via AI orchestration), `0` (lines hand-written). Confirm or substitute.

### Build approach (recommended, but confirm first)

- `index.html` — landing page
- `case-studies/01-build-half-worked.html` through `08-adversarial-browser-automation.html` — one file per case study
- `assets/resume.pdf` — author to provide
- `assets/styles.css` — extracted from `design-reference/neura-core-v2-landing.html` design tokens (or kept inline per page if simpler)
- No build step. No framework. Pure static. Should work from any static host (GitHub Pages, Cloudflare Pages, S3, the author's private server, `python -m http.server`, etc.).

## Voice rules (non-negotiable)

- ✅ "I stopped because the embedding approach couldn't disambiguate X"
- ❌ "I gave up" / "got busy" / "lost interest"
- Each project ends on a **transferable lesson**, not a status.
- Don't fabricate progress or shipped status. (See aria framing — author corrected "operational" → "deployed locally, runnable on demand, not in active daily use.")
- Curation is part of the signal. Respect the cuts in `_SHORTLIST.md`.
- Don't bolt the resume into the page — link to PDF.

## Hard constraints

- **All ~83 projects in `triage/` are AI-orchestrated. None of the code was hand-written by me.** The site framing must lead with this; it's the differentiator.
- "Lots of devs can write AI-assisted code; very few can show 83 projects of AI orchestration in 2 years across many stacks." That's the unique-skill claim.
- Audience is not my brother — it's his peers, HR, and the wider AI org. Anti-nepotism scrutiny is real.

## Other context worth knowing

- **My fluent stacks** (for *reviewing* AI output, not for writing): JavaScript, TypeScript, SvelteKit.
- **Stacks worked in via AI orchestration** with no hand-written code: Rust (heavy — full personal AI memory arc), Go (MOAD methodology), Java + Spring Boot (user-management), Unity C# (SpaceTravelRepairMan), Python (heavy — aria, real-transactions, life-saver-biz, MCP servers).
- The triage docs reference real client outcomes (1 paying client closed, 1 in talks, 1 fresh prospect) and real production systems. **Keep this repo private.**

## How to start

1. Read `triage/_SHORTLIST.md` end-to-end (it's the content source of truth).
2. Skim `triage/_INDEX.md` to see the reorg layout. Optional: skim `triage/_LINEAGES.md` for full repo map.
3. Open `design-reference/neura-core-v2-landing.html` in a browser (or read the file) — this is the visual target.
4. Confirm the open decisions above with me (IA, hero stats, additional-work presentation, contact links).
5. Then scaffold `index.html` and the case-study pages. Build static, no framework, no build step.

---

*Updated by previous sessions as work progressed. Triage + synthesis + reorg + aria reframing are done; site build is next.*
