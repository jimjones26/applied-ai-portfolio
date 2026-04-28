# mcp-agentic-behaviors

**path**: /Users/jjones/Documents/dev/projects/mcp-agentic-behaviors
**last commit**: 2025-03-27 (30 days ago)
**commits**: 21
**stack**: TypeScript, Node.js, MCP SDK (low-level Server API), Anthropic SDK (client-side)
**status**: paused

## Goal (1 sentence)
A learning/demo project pairing an MCP server (meeting transcript processing: summarization + action item extraction) with a CLI client that calls it through Anthropic's API, exploring how agentic MCP tool use works end-to-end.

## What exists
- `server/`: Low-level MCP Server with tools for listing, reading, summarizing, and extracting action items from `.txt` meeting transcripts; includes 5 sample transcripts
- `client/`: CLI client using the Anthropic SDK that connects to the server and drives tool use in a conversation loop
- Both packages have their own package.json/tsconfig; the server was refactored from high-level McpServer to low-level Server to practice explicit request handler wiring
- README is empty

## Ending state
Both server and client appear functionally complete for the stated demo scope. The refactor commit history shows deliberate exploration of the MCP SDK's two API levels (McpServer vs. Server). This is the only repo in the cluster with an MCP client implementation, making it the closest to a true end-to-end agentic demo.

## Lesson signal
The explicit refactor from high-level to low-level MCP Server API suggests investigation of SDK internals, likely triggered by limitations or curiosity about handler control. The empty README suggests this was personal learning rather than a deliverable.

## Lineage hints
Stands apart from the docs-server cluster; the problem domain (meeting transcripts) is unrelated to doc RAG. The client-side Anthropic integration pattern here is the same pattern that would be needed to drive mcp-docs-server from a client, suggesting this was a stepping stone toward a fuller agentic system.
