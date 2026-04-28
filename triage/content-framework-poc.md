# content-framework-poc

**path**: /Users/jjones/Documents/dev/projects/content-framework-poc
**last commit**: 2025-06-19 (312 days ago)
**commits**: 14
**stack**: Prompt engineering / markdown, HTML (no executable code)
**status**: paused

## Goal (1 sentence)
Proof-of-concept for an enterprise SaaS "AI Content Production Lifecycle" platform that guides users through five phases (Intelligence, Strategic Brief, Governance, Production, Measurement) using Neo4j as a knowledge graph and Haystack for AI orchestration.

## What exists
- Five detailed phase specification docs (40 KB each) covering the full content lifecycle
- A `FRAMEWORK-INSTRUCTIONS.md` orchestrating agent behavior across phases
- Synthetic company knowledge base: personas, brand voice guides, executive profiles, product catalog, performance benchmarks
- High-level architecture HTML documents (`index.html`, `ai-cplc-architecture.html`) and a `high_level_architecture_v1.md`
- A `prompt-for-new-chat.md` handoff prompt specifying Haystack + Neo4j + Databricks stack for continuation

## Ending state
This is entirely a documentation and design artifact — no Python, no Haystack pipelines, no Neo4j schema implementation exists. The mandated stack (Haystack, Neo4j, Databricks) is specified in the handoff prompt but was never implemented. Work stopped after architecture HTML documents were finalized in June 2025.

## Lesson signal
The project conflates framework design with product design; the five-phase framework documents are detailed enough to be LLM system prompts, but no bridge to actual code was built. The `prompt-for-new-chat.md` pattern (used here and in other repos) suggests work was always handed off to a new chat session and never closed.

## Lineage hints
Shares Neo4j knowledge graph intent with `docs-graph-db` and `llm-knowledge-graph-construction`. The five-phase content lifecycle structure mirrors the phased approach in `framework-story-gen`. The mandated Neo4j + vector DB architecture is a recurring theme across this cluster.
