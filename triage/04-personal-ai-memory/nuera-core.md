# nuera-core

**path**: /Users/jjones/Documents/dev/projects/nuera-core
**last commit**: 2026-03-17 (41 days ago)
**commits**: 207
**stack**: Rust (Tokio, wasmtime, axum, IMAP/CalDAV, custom HNSW, Chronicle binary log)
**status**: paused

## Goal (1 sentence)
A single-binary "digital organism" built from first principles in Rust — no external agent frameworks, no third-party DBs — with an append-only Chronicle log as sole source of truth and WASM-sandboxed skills hot-swappable at runtime.

## What exists
- Full single-binary architecture: brainstem, neuron actor runtime, Chronicle append-only log with mmap projections (vector HNSW, graph, episodic, procedural)
- WASM skill pipeline: loading, routing overrides, native promotion (transpile → compile .so → hot-swap with A/B testing)
- External listeners: IMAP email and CalDAV calendar integrations
- HTTP static file server for UI build output; observability, vault, and settings views wired to real data
- EffectorNeuron with immune approval gating for email, calendar, and script actions

## Ending state
The last commit (2026-03-17) implemented an AnthropicProvider (Messages API) as part of Task 6.10 WASM-to-Rust transpiler work. Phase 4 (Corpus Vault, remote terminals, immune/effectors) appears to have been completed or nearly so. Development stopped approximately 41 days ago, coinciding roughly with when neura-core-v3's Track 1 intensive work began.

## Lesson signal
The single-binary, everything-from-scratch approach proved the architecture was buildable but generated architectural debt: the `main.rs` is 22KB, the `Cargo.toml` lists 25+ direct dependencies in a single crate, and the CLAUDE.md for v3 explicitly chose a multi-crate workspace to avoid repeating this. Unclear whether work stopped due to the complexity ceiling or because v3 became the active thread.

## Lineage hints
- Remote is `neura-core` (folder was mistyped as `nuera-core` at clone time) — this is v2 in the lineage
- Preceded by nuera-core (v1, same typo'd folder); succeeded by neura-core-v3 (Cargo workspace rewrite)
- `pi-exploration/docs/architecture/neura-core-v4-hlad-v0.6.md` is the next architecture draft
