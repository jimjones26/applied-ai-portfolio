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

## What's been done (in a prior session)

I inventoried, triaged, and synthesized ~83 project repos with you. All triage outputs live in `triage/`:

- **`triage/_SHORTLIST.md`** — 8 picked case studies + cross-portfolio frame + "Additional AI-orchestrated work" table + cuts. **Source of truth for what goes on the site.** Read this first.
- **`triage/_LINEAGES.md`** — full lineage map: 13 arcs, standalones, and cuts. Companion to the shortlist.
- **`triage/<repo-name>.md`** (83 files) — per-repo triage notes used to build the synthesis above.
- **`potential-project-showcase.md`** — the original raw list of repo names I gave you.

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

## What's next

In order:

### 1. Reorganize triage files into arc subdirs

83 flat `triage/<name>.md` files. Move into subdirs grouped by arc (e.g. `triage/01-build-half-worked/`, `triage/04-personal-ai-memory/`). Add `triage/_INDEX.md` mapping repo → arc.

### 2. Resolve the one outstanding question

In `_LINEAGES.md` "Still open" section, one question remains:

- **`aria` operational status today**: is the MCP server (port 8765) still running on my host machine? If yes, it's the only continuously-deployed AI system in the portfolio. If no, the framing in case study #4 should reflect that. **Ask me at the start of the session.**

(`lead-guardian` deployment was already resolved: never deployed in production; case study #7 reflects this.)

### 3. Site design and build

The actual portfolio site. Open decisions:

- **Tech stack**: my fluency is SvelteKit. Probably SvelteKit + Tailwind 4 + shadcn-svelte. Confirm with me before scaffolding.
- **Hosting**: Vercel / Cloudflare Pages / GitHub Pages — ask my preference.
- **Resume**: link to a downloadable PDF (do NOT inline).
- **Wireframes / copy decisions**: design first, copy second.
- Voice rules below are non-negotiable.

## Voice rules (non-negotiable)

- ✅ "I stopped because the embedding approach couldn't disambiguate X"
- ❌ "I gave up" / "got busy" / "lost interest"
- Each project ends on a **transferable lesson**, not a status.
- Don't fabricate progress or shipped status.
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

Read `triage/_SHORTLIST.md` end-to-end. Then skim `triage/_LINEAGES.md` for the full repo map. Ask me about `aria`'s operational status. Then ask any other clarifying questions before touching anything.

---

*This file was generated by the previous session. Update it as work progresses so subsequent sessions stay oriented.*
