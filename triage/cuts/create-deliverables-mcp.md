# create-deliverables-mcp

**path**: /Users/jjones/Documents/dev/projects/create-deliverables-mcp
**last commit**: 2025-03-29 (28 days ago)
**commits**: 18
**stack**: TypeScript, Node.js, MCP SDK v1.7, Zod, Handlebars-style HTML templating
**status**: paused

## Goal (1 sentence)
An MCP server that generates styled HTML deliverables (lean canvas, project brief, validation report, user stories, sitemap, user personas) from structured data via MCP tools, intended to automate agile UX document production.

## What exists
- A single large `src/index.ts` (~1150 lines) with a working McpServer, Zod-validated schemas for 6 deliverable types, 4 CSS style themes (corporate, modern, minimal, creative), and Handlebars-like template processing
- `framework/AI-Fast-Framework.md` — a 9.5 KB document defining the "AI-Fast" agile UX requirements gathering framework that the tools are supposed to serve
- `framework/notes.md` explicitly flags: "the MCP server code we have now just made up some of the tools, it doesn't reflect what the fast framework is putting out"
- README is a stub

## Ending state
The server runs and produces HTML deliverables, but the tools were built ahead of (or without reference to) the AI-Fast-Framework spec, creating a known mismatch. The framework document describes steps 2–10 as deliverables; the server's 6 tool types only partially overlap. Work stopped when this misalignment was noted.

## Lesson signal
Tool schemas were designed bottom-up from template intuition rather than top-down from the framework spec; the gap was identified in notes but not closed before the repo went quiet.

## Lineage hints
The AI-Fast-Framework defined here feeds directly into game-dev-design, which used it to produce the "Space Travel Repair Man" game design documents. The `framework/notes.md` cross-references an MCP server discrepancy — likely pointing at mcp_documentation_server or mcp-docs-server as the companion context server for this deliverables tool.
