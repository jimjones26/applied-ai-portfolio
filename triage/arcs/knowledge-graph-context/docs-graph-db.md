# docs-graph-db

**path**: /Users/jjones/Documents/dev/projects/docs-graph-db
**last commit**: 2025-05-27 (365 days ago)
**commits**: 31
**stack**: Python, Neo4j, Google Gemini (Vertex AI + google-genai), neo4j-graphrag, OpenAI (dependency present), Docker
**status**: abandoned

## Goal (1 sentence)
Build a custom knowledge graph of Svelte technical documentation in Neo4j, then layer a natural language querying interface (Text2Cypher via neo4j-graphrag) on top of it.

## What exists
- `upload_to_neo4j.py` (15 KB): a working script that uploads pre-structured LLM-generated JSON nodes/relationships for Svelte ADK documentation into Neo4j
- Integration tests: `test_integration.py` (Neo4j GraphRAG + Vertex AI), `test_environment.py`, `test_neo4j_conn.py`
- `graph-schema-plan.md` (14 KB) and `graph-schema-report.md` (19 KB): detailed LLM-assisted schema design documents
- `nlq-plan.md` (11 KB): structured natural language querying development plan using Text2CypherRetriever
- `docker-compose.yml` for local Neo4j with APOC enabled
- `chat-artifacts/` and `full-documentation/` directories with reference material

## Ending state
This is the most technically complete of the three Neo4j/knowledge-graph repos. Working upload scripts exist, integration tests for both Vertex AI and Text2Cypher were written, and the graph schema is well-documented. However, development stopped a year ago with the NLQ feature still at the planning/baseline-test stage — `nlq-plan.md` describes the full roadmap but the implementation in `backend/` only covers data upload and environment tests. No production-ready query API exists.

## Lesson signal
The schema design was thorough (LLM-assisted discovery, 19 KB report), but the jump from schema + uploader to a queryable NLQ system was where momentum stalled — the Text2Cypher retriever approach requires significant prompt-engineering iteration that the plan acknowledges but did not progress past Phase 0.

## Lineage hints
The application destination for skills learned in `llm-knowledge-graph-construction` and `llm-vectors-unstructured`. The Svelte documentation corpus here connects to the `todo-app` (a SvelteKit learning exercise) and possibly to the broader intent behind `ai-context-system` (providing structured context to AI from documentation graphs). `content-framework-poc` specifies the same Neo4j + knowledge-graph architecture for its platform.
