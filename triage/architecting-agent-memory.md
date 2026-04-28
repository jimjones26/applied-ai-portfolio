# architecting-agent-memory

**path**: /Users/jjones/Documents/dev/projects/architecting-agent-memory
**last commit**: 2025-07-08 (293 days ago)
**commits**: 34
**stack**: Python, FastAPI, Neo4j (graph DB), Redis (Celery broker), Celery, spaCy, Google Generative AI (Gemini), Docker Compose
**status**: paused

## Goal (1 sentence)
An agent memory backend that stores conversation messages in a Neo4j knowledge graph, enriches them asynchronously with NLP entity extraction via spaCy, and supports natural language queries over the graph via Gemini.

## What exists
- FastAPI service (`am-kg-service/`) with endpoints for adding messages and retrieving entities
- Neo4j graph storage with MERGE-based session/sender node management for conversation state
- Celery worker and beat scheduler for async graph enrichment tasks
- Natural language query service using Google Generative AI (Task-07, implemented)
- Forgetting mechanism (Task-08, implemented) — the last task in the implementation plan
- `IMPLEMENTATION_PLAN.md` structured as atomic AI-agent tasks with explicit verification steps

## Ending state
Task-08 (Forgetting Mechanism) is the last completed task per commit history, which aligns with the plan's final epic. The core system — store messages, enrich asynchronously, query via NL — is functionally complete. No API gateway, no authentication, and no client integration exist. README says cognitive architecture (how the agent reasons using this memory) is explicitly out of scope.

## Lesson signal
The atomic-task implementation plan with per-task context injection worked well enough to reach plan completion in 34 commits. The project stopped at the backend service boundary — no consumer was ever built to validate that the memory system actually improved agent behavior.

## Lineage hints
Standalone research project; no cross-repo references found. Thematically related to the IAP-AL/MAOD methodology work (all share concern with AI state management and context persistence), but this explores memory as a product feature rather than a development process technique. `brainstorming/` and `am-kg-service/app/original-transcript/` suggest this originated from a design conversation.
