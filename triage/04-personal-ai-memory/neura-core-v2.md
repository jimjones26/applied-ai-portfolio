# neura-core-v2

**path**: /Users/jjones/Documents/dev/projects/neura-core-v2
**last commit**: 2026-04-02 (25 days ago)
**commits**: 50
**stack**: Rust + Cargo workspace (12 crates) + Tokio + post-quantum crypto (ml-dsa, ml-kem) + wasmtime + Ollama/OpenRouter + HMAC chronicle
**status**: paused

## Goal (1 sentence)
A local-first personal AI runtime ("JARVIS") with layered Rust crates: passphrase-gated crypto hierarchy (Argon2id → KEK → DEK), append-only HMAC chronicle, projection layer, async mailbox neuron system, WASM-sandboxed tool execution, and a v3 architecture doc proposing a micro-model substrate to replace HNSW vector search with learned weights.

## What exists
- 12-crate Rust workspace: `types`, `crypto`, `chronicle`, `projection`, `neuron`, `intelligence`, `memory`, `tools`, `corpus`, `collaboration`, `verification`, `runtime`
- Working CLI REPL with passphrase boot: master key derivation → keystore unlock → chronicle replay → projection rebuild
- Post-quantum crypto: ML-DSA signing, ML-KEM key exchange, Shamir secret sharing
- HMAC-per-segment append-only binary chronicle with 12-byte entry headers
- Integration test infrastructure (`tests/src/` with named slices: foundation, slice01–slice06)
- `ARCHITECTURE-v3.md` (58KB): full redesign document proposing micro-model neural substrate, LSH routing, Hebbian learning, generative replay, ambient activation (DMN), daemon runtime
- `m2i-exploration.md` (28KB): brainstorming session leading to the v3 architecture
- Issue triage system tracked in `TRIAGE.md`; recent commits show systematic issue-by-issue bugfix work (#186–#195)

## Ending state
Last commit (2026-04-02) replaced stale `nomic-embed-text` embedding model references with `qwen3-embedding`. Prior commits show a sustained issue triage cycle: #186 (checkpoint sidecar lookup), #187 (integration test alignment), #188 (provider prefix caching), #191 (built-in tool skills in test harness), #192 (recall budget starvation fix), #193 (identity context dropped after dreaming), #194 (episodic entry count at shutdown), #195 (embedding model ref). The v2 runtime appears functionally stable; the v3 architecture doc is a full redesign that has not been implemented.

## Lesson signal
The v3 architecture document explicitly identifies a fundamental technical limitation of the v2 design: chronicle-based identity reconstruction is O(history length) at boot, making the system slower the longer it lives. The proposed v3 fix (micro-model substrate with Hebbian learning, O(1) boot from weight files) requires spiking genuinely novel ML infrastructure (graph of tiny MLPs, LSH routing, mmap-encrypted weight files) before integration — a high-uncertainty research investment that explains why v2 is being maintained while v3 stays in planning.

## Lineage hints
- `ARCHITECTURE-v3.md` explicitly names "JARVIS" as the named system identity this runtime implements, and references `jarvis-core` design concepts (cinematic graph UI, spreading activation) as predecessors
- Described as the evolution of the JARVIS system built in `jarvis-core` and conceptually parallel to `aria-v2`
- No file-level imports from other repos in this batch
