# neura-core-v3

**path**: /Users/jjones/Documents/dev/projects/neura-core-v3
**last commit**: 2026-04-18 (9 days ago)
**commits**: 404
**stack**: Rust (Cargo workspace, Tokio, Ollama embeddings, tracing)
**status**: active

## Goal (1 sentence)
A persistent, proactive AI assistant built as a multi-crate Rust workspace — JARVIS — where memory accumulates in a typed knowledge graph across sessions rather than being discarded per-session.

## What exists
- 15 production crates covering memory (substrate, chronicle, recall, dreaming, bookshelf), agency (cortex, executive loop, commitments), and infrastructure (LLM client, embeddings, telemetry)
- A working REPL binary (`neura-jarvis`) demonstrating cross-session memory, input classification, proactive surfacing, and durable extraction
- Track 1 (Substrate Lifecycle) fully complete: 12 slices, 59 tasks, covering tiered retention, consolidation, pruning, archive, user lifecycle commands, and dream yielding
- Vertical prototype validation (P1–P4) confirmed memory, learning, delegation, and proactive behavior work end-to-end before Track 1 began

## Ending state
Track 1 (Substrate Lifecycle) was marked complete on 2026-04-18 with S11-W (AtomicYieldSignal wired into REPL with integration tests). `V3-NEXT-PHASE.md` scopes remaining tracks (Storage Hardening, Multi-Model Routing, Observability/Tuning, Scaling) but none are in active plan files yet. The system runs but is not calibrated for real sustained use.

## Lesson signal
Architecture is structurally sound per prototype validation but every threshold (activation, cosine recall, decay coefficients) is an uncalibrated guess; `V3-NEXT-PHASE.md` explicitly calls out that tuning without real-usage telemetry will fail. Track 2+ work is blocked on choosing to either start real use now or instrument first.

## Lineage hints
- Directly succeeds nuera-core (v1, folder typo) and an implicit v2 (neura-core); v3 replaced the single-binary monolith with a proper Cargo workspace
- `pi-exploration/docs/architecture/neura-core-v4-hlad-v0.6.md` is a language-agnostic architecture blueprint for the next major version
- `STOIC.md` at repo root documents the LLM-systems philosophy (referenced as design governance)
