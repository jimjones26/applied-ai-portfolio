# llm-knowledge-graph-construction

**path**: /Users/jjones/Documents/dev/projects/llm-knowledge-graph-construction
**last commit**: 2025-06-05 (326 days ago)
**commits**: 5
**stack**: Python, LangChain, Neo4j, OpenAI (with late Google GenAI swap), LangChain-Experimental
**status**: paused

## Goal (1 sentence)
Work through the Neo4j GraphAcademy course "Constructing Knowledge Graphs with LLMs" — a structured curriculum on using LLMs to extract entities and build knowledge graphs in Neo4j.

## What exists
- Course companion repo cloned from `neo4j-graphacademy` with source directories for chatbot, data, snippets, and solutions
- `create_kg.py`, `query_kg.py`, `retriever.py` in the course module directory
- `requirements.txt` showing a mid-course switch from `langchain-openai` to `google-genai` / `google-genai` (two separate late commits)
- `SETUP.md` and `README.adoc` are the stock course instructions

## Ending state
This is a course-following repo with 5 commits, the last being a dependency add (`google-genai`). The late addition of `google-genai` suggests active work substituting Google's API for OpenAI partway through the exercises, but no custom implementation beyond the course scaffolding is evident. No evidence of completion or custom extension beyond course exercises.

## Lesson signal
Paused during or just after the LLM provider swap from OpenAI to Google GenAI; the course was likely used as a foundation for the more applied `docs-graph-db` project, where similar graph construction patterns appear in production-style code.

## Lineage hints
Direct conceptual precursor to `docs-graph-db` (which applies these graph-construction techniques to Svelte documentation). Shares the Neo4j + LangChain + Google GenAI stack with `llm-vectors-unstructured`. These three repos form a clear learning-to-application pipeline.
