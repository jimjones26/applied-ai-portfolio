# aria-v2

**path**: /Users/jjones/Documents/dev/projects/aria-v2
**last commit**: 2026-03-07 (51 days ago)
**commits**: 50
**stack**: Rust + Cargo workspace (aria-core, aria-cli, aria-desktop) + SurrealDB embedded + Tauri 2.0 + Svelte 5
**status**: paused

## Goal (1 sentence)
Build a sovereign personal cognitive companion ("JARVIS-class") with seven architectural pillars (SCA, SAGE, SHIELD, CORE, ECHO, SPEX, SENSE), local-first AI reasoning, zero-trust security, and eventual physical embodiment.

## What exists
- Rust workspace with three crates: `aria-core`, `aria-cli`, `aria-desktop/src-tauri`
- Comprehensive architecture docs: 7-pillar blueprints, phased implementation roadmap, technical design split-docs, audit observations
- CLAUDE.md describes Phases 0–3.5 as complete; Phase 4A (Desktop UX via Tauri + Svelte) is next
- Extensive performance hard constraints documented (RAM, latency, storage budgets)

## Ending state
Last commit (2026-03-07) wired SAGE worker orchestration — `WorkerManager`, parallel execution, and config updates — completing a series of tasks that included SHIELD audit log browser, budget/spend trend charts, session timeline visualization, and a 3D force-directed cognitive map (Threlte/D3). Phase 4A (Desktop UX) had not been started. No tagged release or runnable demo binary committed.

## Lesson signal
The scope is large and layered: each pillar has narrow versioned APIs that interact through SHIELD's `verify_and_execute` gatekeeper. Adding the Desktop UX (Tauri + Svelte) on top of a Rust core with seven subsystems is a significant integration surface — not a single clear next task, which likely contributed to the pause.

## Lineage hints
- Described as "JARVIS-class" in CLAUDE.md — conceptually related to `jarvis-core`
- `neura-core-v2` ARCHITECTURE-v3.md explicitly cites "JARVIS" as the named predecessor model being addressed/evolved
- No import or file-level references to other repos by path
