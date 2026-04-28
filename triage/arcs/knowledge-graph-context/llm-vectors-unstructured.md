# llm-vectors-unstructured

**path**: /Users/jjones/Documents/dev/projects/llm-vectors-unstructured
**last commit**: 2025-06-01 (330 days ago)
**commits**: 19
**stack**: Python, LangChain, Neo4j, Google Gemini (via langchain-google-genai + google-genai), TextBlob, NLTK
**status**: paused

## Goal (1 sentence)
Work through the Neo4j GraphAcademy course "Introduction to Vector Indexes and Unstructured Data," implementing vector embeddings and semantic search against Neo4j using LLM-generated embeddings.

## What exists
- Course companion repo with `build_graph.py`, `create_embeddings.py`, `create_vector.py`, `extract_topics.py`, `query_neo4j.py`
- A `.devcontainer/` config for Codespaces
- 19 commits showing active development: repeated LLM provider swaps (OpenAI → Google Gemini), batch processing for Neo4j vector stores, topic extraction with TextBlob, and logging improvements
- `requirements.txt` reflects the completed OpenAI → Google Gemini migration

## Ending state
More actively developed than `llm-knowledge-graph-construction` (19 commits vs 5), with meaningful code additions beyond the course skeleton — batch Neo4j ingestion, topic extraction, and a full LLM provider migration. Paused in June 2025 with functional vector creation and querying scripts. The `_archived_` directory is absent, suggesting this was left in a working state.

## Lesson signal
The repeated provider swap (OpenAI → Gemini appearing in multiple commits) indicates the switch was iterative and somewhat painful, pointing to the lack of an abstraction layer for LLM clients. The 19-commit history suggests this was more hands-on than the graph-construction course.

## Lineage hints
Companion to `llm-knowledge-graph-construction` (same GraphAcademy series, same Neo4j + LangChain + Gemini stack). Both feed into `docs-graph-db`, which builds a custom graph DB for Svelte documentation using the same underlying techniques.
