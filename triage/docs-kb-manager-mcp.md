# docs-kb-manager-mcp

**path**: /Users/jjones/Documents/dev/projects/docs-kb-manager-mcp
**last commit**: 2025-03-30 (28 days ago)
**commits**: 8
**stack**: Python (concat_files.py utility only), Markdown planning docs
**status**: scratch

## Goal (1 sentence)
Design and planning workspace for a two-part system: a background Knowledge Base Compiler that chunks and indexes docs, paired with a stateless MCP server that serves RAG results — the conceptual blueprint that mcp_documentation_server and mcp-docs-server later implemented.

## What exists
- `planning/high_level/` with a detailed architecture proposal: compiler + stateless MCP runtime, tool list (`search_knowledge_base`, `trigger_knowledge_base_compilation`, `list_compiled_knowledge_bases`), metadata schema, chunking strategies
- A RAG chunking strategy document covering hierarchical, semantic, and content-type chunking for MCP spec docs specifically
- `compilers/concat_files.py` — a standalone utility to recursively concatenate files for feeding into LLMs
- README is a single stub line; no server code

## Ending state
Pure planning artifact. The planning docs are detailed and thoughtful (the chunking strategy proposal is the most technically thorough writing in the cluster), but zero server code was written here. The architecture described directly maps onto what mcp_documentation_server and mcp-docs-server later built.

## Lesson signal
This repo's existence as a separate planning space before coding began suggests a deliberate design-first approach; however, splitting design from implementation across repos caused context loss when implementation started in mcp_documentation_server.

## Lineage hints
Upstream blueprint for mcp_documentation_server and mcp-docs-server. The tool names proposed here (`search_knowledge_base`, `trigger_knowledge_base_compilation`) differ from the names used in the implementation repos, suggesting the plan was not referenced closely during coding.
