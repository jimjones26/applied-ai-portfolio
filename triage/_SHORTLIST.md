# Portfolio Shortlist — Applied AI Case Studies

Synthesis pass over 83 triage files, then revised with author input.

---

## Thesis

> **"~83 projects in ~2 years, zero lines of hand-written code. The work is
> AI orchestration — refining visions into plans, plans into implementation,
> and implementation into working code, across whatever stack the problem
> calls for."**

This site demonstrates, with browsable evidence, the specific operational skill the Applied AI Engineer role calls for: directing AI to produce durable output at the pace and scale the role implies — not as an assistant on top of hand-written code, but as the primary builder.

---

## How this portfolio was actually built

I did not write a single line of code by hand in any of these ~83 projects across ~2 years of work. That is not a confession — it is the work sample.

### Where the practice started

`framework-story-gen` — **1,111 commits, ~34 distinct AI-orchestration approaches tested against a single problem** (structured story generation). It was the first time I tried using AI to plan and build software, and the repo is essentially a learning lab: 34 attempts at "how do I get AI to refine, plan, and implement an idea?", each scoring how well the previous approach worked and trying something new. By the end of that arc I had a working operational sense of what models could do, what kinds of prompting structures held up under iteration, and what kinds of orchestration patterns produced durable output.

That practice then scaled outward across domains and stacks. ~83 projects since.

### What "orchestration" actually means here

Across all 83 projects my role is the same:

1. **Refining vision** — turning fuzzy ideas into specific, testable problem statements through structured AI dialogue.
2. **Generating planning docs** — having AI explore multiple architectural approaches in parallel; selecting between them based on tradeoffs the AI itself surfaces.
3. **Producing implementation plans** — turning chosen designs into step-by-step task sequences AI can execute.
4. **Executing under direction** — orchestrator/worker patterns, custom Claude Code skills, custom agents, iterative review cycles. Building, testing, and refining new agent behaviors as the work demands them.

I'm fluent in JavaScript, TypeScript, and SvelteKit — that fluency is how I review what AI produces in those stacks competently and catch divergence early. In stacks I'm not fluent in (Rust, Go, Java, C#, Python at depth), I developed different review strategies: architectural review, type-signature audits, test-outcome verification, comparing AI output against canonical examples, and using AI itself to critique its own output.

### A partial map of where the work landed

- **Rust** — five iterations of a personal AI memory system: `jarvis-core`, `aria-v2`, `nuera-core`, `neura-core-v2` (12-crate Cargo workspace, post-quantum crypto, HMAC chronicle, async mailbox neurons), `neura-core-v3` (15-crate workspace, 404 commits, working REPL with cross-session memory). See case study #4.
- **Go** — `microservice-oriented-ai-orchestrated-development-` (MOAD): 21-microservice platform planned, 1 service implemented before the methodology hit its context-coherence ceiling. See case study #6.
- **Java + Spring Boot + React** — `user-management`, 167 commits of AI-orchestrated end-to-end build.
- **Unity C#** — `SpaceTravelRepairMan`, 59 commits, AI-driven TDD on a power-allocation mechanic.
- **Python** — `aria` (2,981 commits — Neo4j + Ollama + FastMCP), `real-transactions` (764 commits backend), most of the `life-saver-biz` arc, multiple MCP servers, the `first-principles` RAG eval harness. The majority of backend code in case studies #1, #3, #5, and #7.
- **TypeScript / SvelteKit** — the `website-builder` pipeline, the `life-saver-biz` arc, `lead-guardian`, `claude-agent-sdk`, `procure-forge` / `tiny-fish-project`, the seven-version `simple-todo` auth research arc, and dozens more.

### What I've observed across the practice

- **Where AI holds the architecture** — the 9-module MAOD framework (single-responsibility modules, narrow interfaces) finished cleanly.
- **Where AI generates structurally-complete-but-wrong output** — cognishift's "100% complete!" commit immediately preceded a 7-session refactor; website-rebuilder-failed's CLAUDE.md self-assessed "PRODUCTION READY" before testing exposed that its core CLI invocation was invalid.
- **Where AI hits a context-coherence ceiling** — the same methodology succeeded at 9 modules and broke at 21.
- **Where AI is correct in synthesis but wrong in deterministic I/O** — natural-language-website-biz: Claude as runtime broke on file writes, datetime, and timeouts.

Each of the 8 case studies below picks one specific lesson from this body of practice. The **"Additional AI-orchestrated work"** section after them is a representative slice of projects that didn't anchor their own case study but are concrete browsable evidence of the practice. The complete map of every repo and arc is in `_LINEAGES.md`.

---

## The 8 Case Studies

---

## #1. The Build Half Worked: AI-Generated 70 Websites in 4 Weeks → 1 Paying Client + Active Pipeline

**Repos**: website-builder-test (primary), life-saver-biz, life-saver-biz-v2, life-saver-biz-v3
**Stack**: SvelteKit + Python (FastAPI / Neo4j / Haystack)
**Status**: shipped, paused (build pipeline functioning end-to-end; conversion loop is the open problem)
**Last touched**: website-builder-test 2026-03; life-saver-biz-v3 2025-08

### What I was trying to build

A speculative website rebuild service for local businesses: AI crawls the existing site, generates a rebuilt version, and outreach lands the rebuilt site as a sales artifact — without requiring client buy-in before the work is done. The rebuild side and the outreach side were each AI-orchestrated; my role was direction.

### How far I got

- **~70 websites built in ~4 weeks**, with very little ongoing involvement from me. AI handled crawl, analysis, content generation, semantic HTML output, image optimization, and template assembly. SQLite campaigns DB (1.3MB) records real campaign data across 15+ active domains.
- **Email outreach campaigns ran end-to-end**: 3-email sequences across multiple domain groups, Gmail thread sync, SvelteKit dashboard for monitoring.
- **Outcomes**: 1 paying client closed; 1 client in active talks; 1 fresh prospect from work delivered last week.
- The accompanying `life-saver-biz` arc (3 versions, 1,188 commits combined) built progressively more sophisticated analysis tooling — async stealth crawler, Lighthouse + accessibility + security analysis, LLM-driven business impact translation, evidence banks. v2 added a full multi-service SaaS architecture (FastAPI + Neo4j + Redis + ARQ + Haystack + SvelteKit). v3 is the most invested codebase (613 commits, comprehensive pytest suite).

### Where it broke / why I stopped

The build half worked. **The bottleneck was sales conversion, not LLM capability.** AI-orchestrated build produced 70 production-ready rebuilt sites faster than a one-person sales motion could move them. The `life-saver-biz` arc kept refining the analysis side (always a tractable LLM problem) instead of closing the conversion loop (which depends on a sales motion the build side was outpacing). The migration scripts in `website-builder-test` (`migrate_to_report_page.py`, `migrate_social_links.py`) document model pivots being applied retroactively to already-built sites — the AI-driven build pipeline was outrunning the human-managed pricing strategy.

### What this means for applied AI in production

Build capacity scales independently of go-to-market capacity. AI-driven build pipelines can hand a one-person business 70 production-grade artifacts in a month — but only if the downstream conversion motion can absorb that throughput. For applied AI in production: pair AI build pipelines with sales/distribution motions sized to match the throughput, or the value sits idle. **AI tools amplify the bottleneck rather than relieve it.**

### For iteration arcs: what each version learned

- **life-saver-biz** (v1, 254 commits): Validated AI could do site analysis end-to-end. Pipeline steps 3–9 (redesign → outreach) never started; tooling outpaced workflow.
- **life-saver-biz-v2** (321 commits): Rebuilt as proper SaaS (FastAPI + Neo4j + Redis + Haystack). Lesson: Neo4j was overkill for a CRM-shaped data model, adding infrastructure overhead for no retrieval benefit.
- **life-saver-biz-v3** (613 commits): Most invested. Async stealth crawler, multi-layer analysis, LLM reporting. Same pattern: tooling kept growing; conversion loop never closed.
- **website-builder-test** (310 commits): Stopped building the SaaS, started running the actual business. AI-orchestrated build pipeline + email outreach. Build side scaled. Sales motion was the bottleneck.

---

## #2. When the LLM Is the Runtime (vs. When It Can't Be)

**Repos**: natural-language-website-biz, website-rebuilder-failed, automated-website-rebuilder, website-builder-v2
**Stack**: TypeScript + Claude CLI + Markdown-as-runtime
**Status**: abandoned (natural-language-website-biz, website-rebuilder-failed); paused (automated-website-rebuilder)
**Last touched**: 2025-09

### What I was trying to build

Two architecturally radical experiments — one with the LLM as runtime interpreter, one with a 14-subagent swarm invoked from bash — to compress the website-builder pipeline. The goal was to find out whether either approach could replace a conventional TypeScript orchestrator.

### How far I got

- **website-rebuilder-failed**: 14 subagent definitions, orchestrator, event emitter, quality mesh, PatternLearner, architecture docs. Real test run against example.com captured screenshots and HTML fetch.
- **natural-language-website-biz**: Prospect CRUD flow fully implemented in plain-English markdown "modules" and tested. Live website crawl + Lighthouse + screenshot pipeline added as the final step.
- **website-builder-v2**: Complete 11-step pipeline specified as Claude Code slash commands.
- **automated-website-rebuilder**: 4 of 12 TypeScript pipeline steps with real Claude CLI calls; Lighthouse iteratively hardened through multiple reliability cycles.

### Where it broke / why I stopped

Two distinct hard walls, discovered in sequence.

**Wall 1 — website-rebuilder-failed**: the architecture was built around `claude --subagent=<name>` as a bash invocation pattern that hadn't been validated — that specific form isn't a valid Claude CLI command, so the orchestrator and 14 subagent definitions had no way to spawn agents through the path the design assumed. The CLAUDE.md self-assessed "PRODUCTION READY" and "100% success rate" before this was tested against a real site. (Programmatic agent invocation through other mechanisms — the Claude Agent SDK, tool-use loops, custom while-loop frameworks like `caa-exploration` — is fine; the failure was committing architecture to an unvalidated runtime primitive, not the impossibility of programmatic agents.)

**Wall 2 — natural-language-website-biz**: Claude repeatedly broke the no-direct-file-write constraint despite explicit CLAUDE.md rules. Commit message: *"remove files claude added on its own."* Operations requiring deterministic I/O — datetime logging, file rotation, crawl timeouts — kept failing in ways that natural-language instructions couldn't express precisely. The LLM treated the enforcement boundary as a suggestion, not a constraint.

### What this means for applied AI in production

Two distinct lessons, often conflated:

1. **Text instructions aren't enforcement boundaries.** A `CLAUDE.md` rule that says "do not write files directly" is a hint, not a constraint. If a behavior must not happen, the surrounding deterministic system has to make it impossible — sandboxed file ops, capability-restricted tools, validation layers — not a sentence the LLM is asked to honor.
2. **Validate runtime primitives before architecture commits to them.** The website-rebuilder-failed orchestrator was built on top of a CLI invocation pattern that turned out not to exist in that form. The mistake wasn't ambition; it was building 14 subagent definitions and a swarm coordinator before running the simplest possible test of the primitive they all depended on. This is the same pattern as cogni-shift's "100% complete!" preceding a 7-session refactor — AI-generated structural completeness is not the same as tested correctness.

LLMs *can* orchestrate — orchestrator/worker patterns run across this entire portfolio, and `caa-exploration` is a reusable framework for exactly that. The lesson here isn't about the LLM's role in the topology; it's about what kind of constraint can live where. Constraints expressible as deterministic checks belong in the surrounding system. Constraints expressible only as natural language belong in prompts and review, not in places where violation produces silent corruption.

The TypeScript pipeline (`automated-website-rebuilder`) — built afterward with hard rules against mock code and real Claude CLI calls — got to 4/12 steps before stalling on Lighthouse reliability, which is a *correct* architecture failing on operational complexity, not a conceptual failure.

### For iteration arcs: what each version learned

- **website-rebuilder-failed**: the architecture was committed to a CLI invocation pattern that hadn't been validated against the actual runtime. The fix is "test the primitive first," not "don't use LLMs as orchestrators."
- **natural-language-website-biz**: LLMs cannot reliably self-constrain from write operations when the constraint exists only as text instruction.
- **website-builder-v2**: Slash commands as *specification* (not runtime) was the correct abstraction — define the pipeline shape, then implement each step as real code.
- **automated-website-rebuilder**: Real TypeScript + real Claude CLI calls + hard rules against mock code = the correct architecture; stalled at step 5 on Lighthouse complexity, not a conceptual flaw.

---

## #3. Hallucination Needs Its Own Pipeline Stage

**Repos**: website-builder
**Stack**: TypeScript + Puppeteer + Postgres + Claude API
**Status**: paused
**Last touched**: 2025-09-29

### What I was trying to build

The mature TypeScript pipeline that crawls an existing business website and outputs a rebuilt, deployable static version — Claude generates semantically restructured HTML/CSS, content optimized for the business. 314 commits.

### How far I got

A 13-step slash-command pipeline: crawl → Lighthouse analysis → LLM content analysis → sitemap suggestion → content generation → template generation → rebuild (YAML content fragments) → template assembly (Handlebars) → **content validation** → **harmonization** → semantic CSS generation → image optimization → favicon generation. 71.7KB Puppeteer-based crawler with robots.txt compliance, rate limiting, SEO signal extraction. Real Claude API calls for content generation, template generation, and analysis. `src/tools/` with deploy-website, image-optimizer (AVIF/WebP), template-assembler (Handlebars), favicon-generator, TailwindCSS integration. Postgres schema + migrations for crawl data.

### Where it broke / why I stopped

Two failure modes were discovered during real pipeline runs and required *new mandatory stages* to be added:

**Step 9 — content validation** (`/09-validate-content`, described as "CRITICAL: prevent fabrication"): LLM-generated content included details not present in the source site. The commit "Streamline content generation with strict fact verification" documents that hallucination during site reconstruction was an *operational* problem on real sites, not hypothetical. A validation step was added to check every generated content element against the source before assembly.

**Step 10 — harmonization** (`/10-harmonize-site`, marked "REQUIRED before Step 11"): LLM-generated HTML sections for different parts of the same page had inconsistent structure. Each section was internally coherent, but sections generated in *separate* LLM calls didn't align structurally. A normalization pass was required before CSS could be applied uniformly.

The 13-step pipeline length reflects accumulated patches to quality failures rather than upfront design. The pipeline grew as each failure mode was encountered and retrofitted.

### What this means for applied AI in production

When an LLM is asked to *reconstruct* something that already exists (a website's content, in this case), as opposed to creating something new, two distinct failure modes show up in production and don't go away with better prompts:

1. **Factual hallucination** — the model invents details that weren't in the source. Closing this requires a stage that compares each generated element against the source before assembly. Prompt instructions like "use only details from the input" reduce the rate but don't eliminate it.
2. **Structural inconsistency** — sections generated in separate LLM calls are each internally coherent but don't compose. The same page section coming back in two different shapes from two different calls breaks downstream consumers (here, CSS application). This requires a normalization stage that rewrites all sections to a common shape after generation.

Neither stage was in the original design; both were retrofitted after the failure mode showed up on real sites. **Pipeline length, after the fact, is diagnostic: every extra stage is a production failure mode that the original design didn't anticipate.** For applied AI engineering, this is worth taking seriously — the cost of a pipeline you only know is correct after running it scales with the number of stages you needed to add.

---

## #4. Personal AI Memory: The O(history) Problem

**Repos**: jarvis-core → aria → aria-v2 → nuera-core → neura-core-v2 → neura-core-v3 (one continuous arc)
**Stack**: Rust (12+ then 15-crate Cargo workspaces) + Python (deployed `aria` instance)
**Status**: active (neura-core-v3 last touched 2026-04-18); aria is deployed locally and runnable on demand, not in active daily use as of late April 2026
**Last touched**: neura-core-v3 2026-04-18; neura-core-v2 2026-04-02; aria 2026-03-15

### A note on naming and architectural complexity

The same system has carried different names across iterations — JARVIS in v1, ARIA in later versions. The Iron Man metaphor was deliberate: it gave non-technical reviewers an immediate frame for what the system was trying to be (a sovereign personal AI that accumulates memory across sessions). That framing choice — using a familiar reference to communicate technical architecture to a non-technical audience — is itself part of the *technical-liaison* skill the Applied AI Engineer role calls out. JARVIS = ARIA. One arc, six iterations.

This arc is one of the most architecturally complex examples of AI-orchestrated work in the portfolio: 12-crate then 15-crate Rust Cargo workspaces with post-quantum crypto, HMAC chronicle, async mailbox neuron systems, WASM-sandboxed hot-swappable skills, HNSW vector indexes from scratch, and an MCP server fronting Neo4j + Ollama embeddings. All of it specified, reviewed, and iterated under my direction.

### What I was trying to build

A local-first personal AI assistant that accumulates memory across sessions rather than starting from scratch on every conversation — a system where long-term knowledge, preferences, and context survive and compound rather than evaporating at session end.

### How far I got

- **jarvis-core**: Full Tauri 2.0 desktop app with 3D graph visualization, 7 completed phases, Ollama-backed LLM, agentic execution, cinematic Svelte UI. Finished per its own roadmap.
- **aria** (2,981 commits, deployed): Python — Neo4j + Ollama + FastMCP MCP server (port 8765) + Docker Compose + macOS launchd. Eval harness with delta tracking and regression detection. Safety infrastructure: hook-based Docker command interception (the local Neo4j store was wiped multiple times during development), contamination detection, multi-confirmation flows. The Python memory layer, locally deployed and runnable on demand while the Rust runtime matures; not in active daily use today.
- **aria-v2**: Rust workspace with seven named pillars (SCA, SAGE, SHIELD, CORE, ECHO, SPEX, SENSE) and a SHIELD `verify_and_execute` gatekeeper. Reached Phase 3.5.
- **nuera-core** (folder typo for neura-core, 207 commits): Single-binary Rust system with append-only Chronicle log as sole source of truth, WASM-sandboxed hot-swappable skills, IMAP/CalDAV listeners, HNSW vector index from scratch. Phase 4 complete.
- **neura-core-v2** (50 commits): 12-crate Cargo workspace with post-quantum crypto (ML-DSA, ML-KEM, Shamir), HMAC chronicle, async mailbox neuron system, CLI REPL. The 58KB `ARCHITECTURE-v3.md` documents the fundamental limitation.
- **neura-core-v3** (404 commits, active): 15-crate Cargo workspace, Track 1 (Substrate Lifecycle: 12 slices, 59 tasks) completed. Working REPL with cross-session memory, input classification, proactive surfacing. Vertical prototypes (P1–P4) confirmed memory, learning, delegation, and proactive behavior.

### Where it broke / why I stopped

The `ARCHITECTURE-v3.md` (58KB) in neura-core-v2 names the core technical limitation explicitly:

> *"Boot time grows linearly with history. After years of operation, the system gets slower the longer it lives."*

Chronicle-based identity reconstruction is **O(history length)** at boot. The proposed v3 fix — a micro-model neural substrate with Hebbian learning, where identity lives in weight files (O(1) boot) rather than a replay log — required building novel ML infrastructure (graph of small MLPs, LSH routing, mmap-encrypted weight files) before integration. This is genuinely open ML research, not a tooling problem.

A separate constraint discovered in aria: `claude -p` (the Claude Code subprocess API for LLM extraction) is host-only and cannot run inside Docker. This forced a split deployment architecture — deterministic services in Docker Compose, LLM-dependent services on macOS launchd daemons — creating operational complexity that had to be managed with safety tooling.

For neura-core-v3: Track 1 is complete, but every threshold parameter (activation levels, cosine recall cutoffs, decay coefficients) is an uncalibrated guess. `V3-NEXT-PHASE.md` explicitly states tuning without real-usage telemetry will fail — and the system cannot generate that telemetry until it's in real sustained use.

### What this means for applied AI in production

Event-sourced AI memory (replay-from-log) is auditable and correct but fundamentally degrades with use — boot time scales with history. Learned-weight memory (neural substrate) avoids the O(history) problem but loses auditability. **Neither is a clean answer**, and the tradeoff has to be made consciously. Additionally: AI memory systems require explicit safety infrastructure around irreversible operations — the local Neo4j store was accidentally deleted multiple times in aria during development despite human oversight, requiring hook-based interception as a mitigation. **Memory systems for AI are not just storage problems; they are safety architecture problems.**

### For iteration arcs: what each version learned

- **jarvis-core**: The concept is buildable end-to-end (3D UI, graph, LLM, agentic execution); the monolithic SurrealDB + single-binary design made each new feature expensive.
- **aria**: A separate Python + Neo4j deployment, locally runnable on demand, while the Rust runtime matures. Documented the `claude -p` host-only constraint and the need for safety tooling around irreversible operations.
- **aria-v2**: Pillared Rust architecture introduced explicit security/governance boundaries (SHIELD gatekeeper). Demonstrated the multi-pillar pattern is buildable but each pillar is a meaningful integration project.
- **nuera-core**: Append-only Chronicle from scratch proved the architecture. Single-crate sprawl (22KB main.rs, 25+ deps) created debt that blocked the next layer; v3's CLAUDE.md cited this explicitly.
- **neura-core-v2**: Multi-crate workspace fixed the modularity problem. Post-quantum crypto, HMAC chronicle, and WASM tools proven. The O(history) boot cost documented as the fundamental limitation requiring a different memory substrate.
- **neura-core-v3**: Redesigned around persistent substrate (weights survive restart) vs. reconstructed state. Track 1 complete. Blocked on calibration — can't tune without real usage data.

---

## #5. Active Research: Mixing Determinism and Non-Determinism for Consistent, Correct Results

**Repos**: pi-harness + pi-exploration + first-principles + rllms-exploration → `real-transactions` Phase 2 (production target)
**Stack**: Python + Rust
**Status**: **active** — all four research repos and the production target had commits within the last 8 days

### What I was trying to build

A research thread targeting the question: **how do we mix deterministic and non-deterministic execution to produce LLM-powered systems that are both consistent and correct?** This is a current problem, not a finished one. The thread has both an architectural face (`pi-harness`'s "Stoic Architecture" gating workflow) and a research face (`first-principles` empirically comparing RAG vs. open RLM vs. Lambda-RLM patterns), with `real-transactions` Phase 2 as the in-flight production application.

### How far I got

- **pi-harness** (active, 81 commits): "Stoic Architecture" workflow tooling — five Claude Code slash commands (`/stoic-start`, `/stoic-design`, `/stoic-check`, `/stoic-status`, `/stoic-implement`) that **force deterministic vs. non-deterministic boundary decisions before implementation is unlocked**. Phase 6 complete.
- **pi-exploration** (active, 1 commit, today): 119KB `neura-core-v4-hlad-v0.6.md` — language-agnostic architecture blueprint. Designed to be processed through the pi-harness Stoic workflow before implementation begins.
- **first-principles** (active, 1 commit): Python prototype empirically comparing **RAG baseline vs. open RLM loop vs. Lambda-RLM pipeline**. Baseline RAG and open RLM both score 9/10 on the test suite. Discovered a concrete LLM behavioral ceiling for the open-RLM approach: Gemini frequently emits invalid single-quoted multiline strings in REPL blocks, causing SyntaxError loops; structured report generation hits provider read timeouts before producing a final answer.
- **rllms-exploration** (active, 1 commit): Lambda-RLM architecture research. Deterministic spine + LLM leaf calls. Session log notes the lambda-calculus-LLM GitHub repo is the academic paper codebase, not a companion blog repo — the planner has to be built from scratch.
- **real-transactions / MyTeeCee** (764 commits, last touched 2026-04-21, active): Phase 1 — chat-first mobile PWA AI transaction coordinator for real estate agents. AI persona "Debbie" handles outbound/inbound email conversationally and manages transaction milestones. 7 of 8 slices complete. **Phase 1 surfaced additional requirements that Phase 2 will incorporate using the determinism + non-determinism research above.** This is the in-flight production target for the research.

### Where the research currently sits

This is the only "active research thread you could observe in real time" in the portfolio. The research is converging on the same answer from two directions:

1. **Architecturally** (pi-harness): Force the engineer to declare what's deterministic and what's non-deterministic before implementation — make the boundary explicit, not implicit.
2. **Empirically** (first-principles, rllms-exploration): Open-loop LLM agents (RLM) hit specific behavioral failures (syntax-error loops, timeout failures) that closed-loop pipelines (Lambda-RLM: deterministic spine, LLM leaves) avoid by constraining where the LLM is allowed to be non-deterministic.

`real-transactions` Phase 2 is where this research will be field-tested in a high-stakes business workflow (real estate transactions) — exactly the kind of context where uncontrolled LLM non-determinism is unacceptable.

### What this means for applied AI in production

The hardest question in production AI is not "can the model do the task" — it's "can the system produce consistent, correct output when the model is sometimes wrong." The pattern emerging from this research thread (deterministic spine + constrained LLM leaves, with explicit boundary declarations) is one practical answer. **An applied AI engineer's job is, in large part, drawing that boundary**: deciding which steps must be deterministic, which can be non-deterministic, and how to validate the outputs of the latter before they propagate.

### For the hiring audience

This is the "watch me work in real time" thread. A reviewer can clone the repos and see commits flowing this week. The architecture blueprint, the empirical experiments, and the production application are all in flight, with cross-references between them.

---

## #6. AI Development Methodology at Scale: When the LLM Can't Hold the Map

**Repos**: iap-al → iap-al-v2 → web-scraping-service (one-shot output) → microservice-oriented-ai-orchestrated-development- (MOAD) → maod-framework (MAOD)
**Stack**: Go (MOAD) + TypeScript (MAOD)
**Status**: paused (maod-framework, 9-module version functional); abandoned (MOAD, 1/21 services)
**Last touched**: maod-framework 2025-07-17; microservice-oriented 2025-07-19

### What I was trying to build

A repeatable AI-orchestrated development methodology — Claude Code commands and process constraints that enable solo developers to build complex multi-module systems with LLM assistance without losing architectural coherence.

### How far I got

- **iap-al / iap-al-v2**: Methodology definition and empirical iteration. 8+ phase prompt templates. Experiment-001 ran on a web scraper test case and discovered sub-agent coordination issues.
- **web-scraping-service**: One-shot generation output of experiment-001. 8 TypeScript modules each with test suites, integrated by an integration agent. `FINAL_SUMMARY_REPORT.md` declared completion.
- **microservice-oriented-ai-orchestrated-development-** (MOAD): TDD-first **Go** platform for website analysis, **21 microservices planned**, 7 CLAUDE.md phase command files. **Only the Data Persistence Service was implemented** out of 21 before stopping.
- **maod-framework** (MAOD): Renamed "**M**inimal AI-Orchestrated Development" — a philosophical correction to MOAD. TypeScript, **9 modules**, 107+ Vitest tests, live SQLite databases showing the system was actually run, **all 9 modules complete**.

### Where it broke / why I stopped

The same methodology succeeded at 9 modules and failed at 21. The MOAD project stopped after 1/21 services — 20 services remaining.

The constraint is not LLM capability but **context coherence**: at 21 services, the LLM cannot hold the full set of interface contracts in working context while implementing a new service. Each new service requires knowing the interface of every service it interacts with; as the service count grows, the context required to maintain coherence grows faster than the context window.

The web-scraping-service experiment revealed a second failure mode: "FINAL_SUMMARY_REPORT declared complete" is not the same as "tests pass in a real environment." The one-shot generation produced structurally complete modules that *claimed* passing tests — but whether the integration actually worked was never verified post-generation.

### What this means for applied AI in production

AI-orchestrated development has a **context-coherence ceiling**: it works at small module counts (≤9) where interface contracts fit in context and fails at large module counts (21+) where they don't. This is a fundamental LLM constraint that scales with **architectural complexity**, not code volume. For production AI-assisted development: decompose systems into independently verifiable modules with narrow interfaces, and treat the LLM as a **module implementer**, not a system architect. MAOD's "atomicity, single responsibility, markdown-first outputs" is a practical response to this ceiling.

### For iteration arcs: what each version learned

- **iap-al / iap-al-v2 / web-scraping-service**: "Declared complete" by the orchestrating agent is optimistic self-assessment; real-environment validation is required.
- **MOAD (21 services)**: Scope was too large to sustain context coherence; TDD-first was correct but the finish line was invisible.
- **MAOD (9 modules)**: Constraining scope to single-responsibility modules with narrow interfaces made the project finishable. The "Minimal" framing was the architectural insight.

---

## #7. Production AI Agents: Claude Agent SDK Stability as an Architectural Risk

**Repos**: claude-agent-sdk + lead-guardian
**Stack**: Python/FastAPI + SvelteKit
**Status**: paused. **Complete codebase, never deployed in production with real Vonage/Google Calendar credentials. Exists as a fully-built reference implementation, not a tested-in-production system.**
**Last touched**: lead-guardian 2026-03-10

### What I was trying to build

A self-hosted, multi-tenant AI agent that responds to HVAC contractor website leads in under 60 seconds, qualifies prospects via SMS (Vonage), and books appointments on Google Calendar — with persistent per-lead conversation state managed via the Claude Agent SDK.

### How far I got

- **Complete backend**: FastAPI webhook receiver, persistent per-lead Claude agent (25.5KB `core.py`), full tool suite (SMS via Vonage, Google Calendar, email), Celery tasks for follow-up scheduling and stale-session detection, SSE endpoint with Redis pub/sub for live dashboard metrics, row-level multi-tenancy.
- **Complete frontend**: SvelteKit 5 with JWT auth, dashboard with SSE-backed live metrics, lead list with filtering/sorting, lead detail page showing conversation thread, admin pages for client CRUD.
- **Production deployment config**: Docker Compose, Alembic auto-migration on startup, env var validation at boot.
- **claude-agent-sdk exploration repo** (prior art): 6-phase development orchestrator, SDK documentation **bundled locally** because web searches return stale results.
- **Honest scope note**: Codebase complete through Phase 9; never run against real leads or real Vonage/Google credentials. Reviewer-browseable as a reference implementation.

### Where it broke / why I stopped

The agent `core.py` at 25.5KB is the largest single file in the backend — meaning the Claude Agent SDK integration is the most complex and brittle layer. The CLAUDE.md carries a mandatory warning copied verbatim from the prior exploration repo:

> *"Do NOT rely on training data or web searches for SDK usage patterns — they are frequently outdated or incorrect. Pull live SDK docs before writing any Agent SDK code."*

The SDK was changing fast enough during development that training data and web search results were consistently wrong. The solution adopted was bundling the official SDK docs locally as reference files — a maintenance burden not required for stable libraries. No integration test suite exists for the agent layer specifically, suggesting the SDK's instability made automated testing of agent behavior impractical.

### What this means for applied AI in production

Fast-moving AI SDKs (Anthropic's Agent SDK, OpenAI's Agent SDK) require treating documentation as a **first-class dependency** — bundling specific versions locally and treating SDK updates as breaking changes rather than patch improvements. The production risk is real: outdated SDK usage patterns produce behavior that is *subtly* wrong (tool invocation fails silently, conversation state is lost, retries don't fire) rather than loudly wrong, which makes regression detection harder. The 25.5KB agent `core.py` also documents the complexity cost of stateful per-lead AI agents: managing conversation state, handling partial responses, implementing retry logic, and enforcing tool-use constraints is substantially more code than the business logic it serves.

---

## #8. Browser Automation Against Adversarial Targets

**Repos**: procure-forge → tiny-fish-project (argus)
**Stack**: TypeScript + SvelteKit + TinyFish API + OpenRouter
**Status**: paused (both)
**Last touched**: tiny-fish-project 2026-03-19; procure-forge 2026-03-25

### What I was trying to build

A procurement tool that launched a swarm of TinyFish browser automation agents to scrape supplier portals (DigiKey, LCSC, Mouser, Arrow) in parallel, then used an LLM to rank results in a live mission-control UI. Built for the TinyFish Accelerator Demo Day.

### How far I got

- Full working demo: agentic orchestrator with concurrency queue, SSE streaming, in-memory state recovery on server restart.
- Live 4×4 iframe grid showing TinyFish agent streams, event timeline, per-supplier audit trails.
- LLM-powered result synthesis (OpenRouter), sortable results, sequential RFQ submission, jsPDF export.
- Fully containerized (Docker Compose), MIT licensed, credential-stripped for open sourcing.

### Where it broke / why I stopped

From the README's "Why I Stopped" section:

> *"Cloudflare bot protection defeats TinyFish agents on DigiKey/Mouser at unpredictable rates. Credential management doesn't scale past a demo. Supplier UI fragility means any site redesign breaks the agent goals."*

The failure mode is **non-deterministic**: an agent that works 90% of the time in controlled demo conditions fails unpredictably in production because the anti-bot systems update independently of the deployment. There is no mitigation that doesn't require either supplier API access (which the suppliers don't provide) or a continuous maintenance burden that exceeds the tool's value.

The pivot to **Argus** (tiny-fish-project) was the correct response: three-module B2B intelligence platform (Sales, Competitive, Compliance) using browser automation against targets that *don't actively fight it* (public business intelligence). 170 commits, 7 full slices delivered.

### What this means for applied AI in production

Browser automation against sites deploying active bot protection (Cloudflare, behavioral fingerprinting, CAPTCHAs) **is not productionizable** without supplier API access. Even if the agent works correctly today, the anti-bot systems update independently and break the agent at unpredictable intervals. **The correct product decision is to pivot to targets that want to be automated** — internal tools, non-adversarial data sources — which is what the Argus pivot did.

---

## Additional AI-orchestrated work (no dedicated case study)

These didn't anchor case studies — the lessons are either too narrow for a portfolio slot, overlap with stronger picks, or are *meta* lessons about the practice itself (covered in the frame above). All are concrete, browsable evidence of AI-orchestrated work. A reviewer can clone any of them.

| Repo | Stack | Commits | What it is |
| --- | --- | --- | --- |
| `framework-story-gen` | Python | **1,111** | **The origin of the practice.** First attempt at AI-planning-and-building software; ~34 distinct AI-orchestration approaches tested against structured story generation. The learning lab where the methodology was built. |
| `user-management` | Java + Spring Boot + React | 167 | AI-orchestrated end-to-end Java enterprise stack — directly relevant to environments like Nasdaq's. |
| `SpaceTravelRepairMan` | Unity C# | 59 | AI-driven TDD on a power-allocation mechanic. AI-orchestrated delivery in a domain (game engine + statically-typed C#) far from frontend territory. |
| `performance_tracker` | SvelteKit + Drizzle + Oslo | n/a | Misnamed — actually a complete AI-built auth system (login, signup, email verify, TOTP 2FA, recovery codes, password reset). Production-grade auth, AI-built. |
| `simple-todo` arc (8 repos) | SvelteKit + multiple auth libraries | many | Seven-version AI-driven systematic search for a non-brittle SvelteKit auth stack. Documents Lucia v3 / Prisma 6 peer-dep failure and convergence on Drizzle + Oslo. The productionized result is `lead-guardian` (case study #7). |
| `cogni-shift / cognishift` | SvelteKit + PWA | 40+ | AI-built end-to-end neuroscience PWA. The "100% complete!" commit preceded a 7-session refactor — concrete documentation of AI's structural-vs-architectural completeness gap. |
| `claro-sight` | docs-only | 155 | 155 commits of pure AI-driven design walkthroughs (75+ user flows resolved via structured AI review). Demonstrates AI-driven design practice at scale, no implementation. |
| `digital-identity-kg` | Python + Neo4j + MCP | n/a | AI-built end-to-end Neo4j knowledge graph pipeline with MCP server. Completed at the pipeline level across 26+ checkpoint sessions; never deployed as a usable tool. |
| `caa-exploration` / `caa-test` | TypeScript | 99 + 8 | **CAA = Canonical Agent Architecture.** AI-built reusable while-loop agent framework with span-based SQLite tracer and Svelte 5 trace UI. Reached v0.2.0 production-ready. |
| `taskflow` | TypeScript + MCP | n/a | AI-built MCP-native task manager. Multi-turn tool chaining with Ollama tool-call response normalization. |
| `metis-theia` | FastAPI + SvelteKit | n/a | AI-built application shell. Cross-stack practice. |
| `architecting-agent-memory` | Python + Neo4j + Celery | n/a | AI-built agent memory backend. Complete (FastAPI service, Neo4j storage, async enrichment, NL query, forgetting mechanism); never integrated with a consumer. |
| `voltfolio` | TypeScript + crypto APIs | n/a | AI-built crypto portfolio tracker. Fluent-stack full-stack delivery. |
| `questionnaire-copilot` | FastAPI + Next.js 14 + Postgres + Stripe | 56 | Multi-tenant SaaS for security/vendor compliance questionnaires with LLM-assisted answer retrieval. 11 sprints of AI-orchestrated delivery: full backend (JWT + RBAC + Stripe billing + Prometheus), Next.js frontend through dashboard/upload/review/export. Stalled when test reliability degraded and CI was disabled rather than fixed — concrete instance of the AI-orchestrated "wide feature surface, brittle test foundation" failure mode. |

This is a representative slice — `_LINEAGES.md` has every repo and arc in full.

---

## Cuts and rationale (truly cut from the site)

These projects represent real AI-orchestrated work but their lessons either overlap with stronger picks, are too narrow to anchor a case study, or are meta-shaped (covered in the cross-portfolio frame above).

**RAG-at-scale arc** (`proof_vitality_chatbot` v1+v2, `docs-graph-db`, `ai-context-system`, `mcp_documentation_server`, `mcp-docs-server`) — Strong technical content. FastMCP's tool-registration gap (instantiating an MCP server class doesn't register its methods as tools — the Python implementations reduced to `ping` at runtime) is a clean applied-AI lesson. Cut from the shortlist; documented in `_LINEAGES.md`.

**Smaller scaffold/exploration repos** (`prd-creator`, `pipeline-observability`, `twcss-templates`, `merlin-pai`, `tasky` / `tasky-old`, `paic-svelte01/02`, `agents-workflows`, `youtube_summarizer`, `poc_yt_ts_chat`, `p4p-design-system`, `content-framework-poc`, `game-dev-design`, `ai_dev_framework`, `simple-todo-v6`, `todo-app`) — Each is AI-orchestrated and represents real practice, but the lessons are too narrow, too overlap-y with stronger picks, or too local to a specific domain to anchor a portfolio case study. Documented in `_LINEAGES.md`.
