# jarvis-core

**path**: /Users/jjones/Documents/dev/projects/jarvis-core
**last commit**: 2026-03-04 (54 days ago)
**commits**: 12
**stack**: Rust (Tauri 2.0) + SurrealDB (RocksDB) + Svelte 5 + Threlte/Three.js + Ollama + TailwindCSS 4
**status**: paused

## Goal (1 sentence)
A local-first personal intelligence desktop app built on a SurrealDB cognitive graph, with a cinematic Svelte UI rendered from graph state, an Augmentor consciousness layer backed by local LLMs, and agentic execution via sandboxed tools.

## What exists
- Full Tauri 2.0 + Rust backend with SurrealDB, Ollama embeddings, aes-gcm encryption, system telemetry
- Svelte 5 frontend with Threlte/Three.js 3D graph visualization and full component tree (`layers/`, `graph/`, `scenes/`, `components/`)
- 7 completed phases: foundation, perception/ingestion, observability/chronicle, consciousness (The Augmentor), action/reflection/sandbox, Artifact Vault + Library + Connectors, cinematic UI
- Phase 7 (offline mode, E2E tests, polish) recorded as complete in `docs/progress.md`
- A chat interface backed by the Augmentor (`Add chat interface with Augmentor-backed message handling`)
- Final commit message: `fix stuff` (2026-03-04)

## Ending state
All 7 planned phases were checked complete in `docs/progress.md`. The last substantive commit (Phase 7 sign-off) was followed by `fix stuff`, suggesting a post-completion bug fix pass rather than abandonment mid-feature. The system had a running desktop app with 3D graph UI, agentic execution, and local LLM integration. No signed release or distributable build is present.

## Lesson signal
The project reached v2.0 feature-complete status per its own HLAD/roadmap. The absence of further commits after `fix stuff` suggests the project either reached a satisfactory stopping point or the full integration scope (Tauri + Rust backend + Svelte + 3D graph + LLM) made continued iteration high-cost per feature.

## Lineage hints
- `aria-v2` CLAUDE.md describes ARIA as a "JARVIS-class system" — conceptually descended from this repo
- `neura-core-v2` ARCHITECTURE-v3.md references "JARVIS" as the named prior system its v3 architecture is designed to improve upon
- No file-level imports from other repos
