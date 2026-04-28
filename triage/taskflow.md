# taskflow

**path**: /Users/jjones/Documents/dev/projects/taskflow
**last commit**: 2025-03-22 (36 days ago)
**commits**: 108
**stack**: TypeScript, SvelteKit 2 / Svelte 5, Tailwind CSS 4, Vite 6, Node/Express, MCP SDK (@modelcontextprotocol/sdk), Anthropic SDK, Ollama (local), JSON file storage, Playwright (e2e)
**status**: paused

## Goal (1 sentence)
A task-management app where an LLM (Claude or Ollama) operates as an agent that reads and mutates tasks/tags through a local MCP server, demonstrating tool-use and multi-turn conversation patterns.

## What exists
- **Server** (`server/`): Express HTTP server exposing an MCP endpoint over SSE; registers task CRUD tools (`taskTools.ts`), tag tools (`tagTools.ts`), resources, and prompts; persists data in flat JSON files
- **Client** (`client/`): SvelteKit frontend with a chat UI, provider selector (Claude vs. Ollama), settings persistence via localStorage, and an `mcpClient.ts` that communicates with the server over SSE
- **LLM layer** (`client/src/lib/llm/`): multi-provider abstraction (core, adapters, providers) plus a `ConversationManager` for multi-turn tool-chaining with loop detection; `llmServiceProxy.ts` adds a direct API fallback
- **Refactor docs** (`refactors/`): five markdown design documents covering multi-turn architecture, Ollama provider integration, API key management, and future enhancements — show the project was actively being designed

## Ending state
The core task/tag CRUD via LLM tool calls works; the multi-turn conversation architecture (needed for chained tool calls like "find tag by name, then delete it") was designed and partially implemented. The last commits added direct API integration and secure API key management. No evidence of a broken build — the repo appears to have been paused mid-feature rather than abandoned.

## Lesson signal
The central technical challenge — getting the LLM to chain multiple tool calls within a single user intent — drove a substantial refactor documented in `refactors/multi-turn-architecture.md`; the Ollama provider required significant extra work to normalize tool-call response formats across model variants.

## Lineage hints
Not related to the tasky repos (separate batch). TaskFlow is an original MCP-native project focused on agent/tool-use demonstration, while the tasky repos are likely simpler CRUD task managers. No cross-references found in the codebase.
