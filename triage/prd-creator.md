# prd-creator

**path**: /Users/jjones/Documents/dev/projects/prd-creator
**last commit**: 2025-03-19 (39 days ago)
**commits**: 1
**stack**: Markdown (system prompt only)
**status**: scratch

## Goal (1 sentence)
A single-file system prompt that turns a Claude project (or custom GPT) into a PRD creation assistant: it interviews a developer through structured questions and produces a developer-handoff-ready PRD.md.

## What exists
- `special_instructions.md` (8.5 KB): a complete system prompt defining role, conversation approach, 11-topic question framework, PRD section structure, tech discussion guidelines, tool usage patterns (Sequential Thinking, Brave Search, Tavily, Filesystem), and error handling
- `.gitignore` (6 bytes)
- No other files

## Ending state
One commit, one file. The prompt is well-structured and thorough, but this is a system prompt artifact, not a codebase. There is no server, no UI, and no evaluation — the "repo" is essentially a saved prompt with version control.

## Lesson signal
Unclear whether this was intended to become an MCP server (similar to create-deliverables-mcp) or was simply stored as a repo for portability. The tool references (Sequential Thinking, Brave Search) suggest it was designed for a specific Claude project configuration, not a standalone deployment.

## Lineage hints
Thematically adjacent to create-deliverables-mcp (both aim to produce structured product/design documents) and to game-dev-design (which follows a similar interview-then-document pattern). Could be the prompt that drove early game-dev-design sessions before the AI-Fast-Framework was formalized.
