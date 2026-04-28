# claude-agent-sdk

**path**: /Users/jjones/Documents/dev/projects/claude-agent-sdk
**last commit**: 2025-10-13 (196 days ago)
**commits**: 16
**stack**: TypeScript + Claude Agent SDK + Jest
**status**: abandoned

## Goal (1 sentence)
A sandbox repo for validating Claude Agent SDK patterns before using them in production, with a concrete implementation target: a multi-phase software development orchestration system with quality gates and specialized subagents.

## What exists
- `claude-dev-system/` — a partial TypeScript implementation of a 6-phase development orchestrator (design, test, implementation, QA, integration, deploy) reaching "Iteration 02, Session 1 Complete": multi-phase type system, two design agents (requirements-analyst, architect), read-only phase enforcement, and a test suite
- `ai-docs/claude-agent-sdk/` — local copy of official Claude Agent SDK documentation (TypeScript API, permissions, sessions, MCP servers, custom tools, subagents, hooks) used as the source of truth for implementation
- `ai-docs/plans/` — 8 iteration implementation guides from minimal MVP through production-ready, designed to be executed in separate chat sessions

## Ending state
The repo stopped after Iteration 02, Session 1: the design phase foundation was built and tested, but Iteration 02's full scope (test-first flow with enforcement) was never completed. The last commit on 2025-10-13 added a design phase with artifact persistence. The 8-iteration plan (20-27 hours total) was approximately 10% executed.

## Lesson signal
The CLAUDE.md contains a prominent warning: "SDK Documentation Reference — When the user asks SDK-related questions or wants to implement SDK features, consult the relevant documentation files first." This pattern — bundling docs locally because web searches return stale results — suggests the SDK was changing fast enough that training data was unreliable, slowing implementation. The lead-guardian repo (built ~5 months later) carries the same warning verbatim, suggesting the SDK instability was the persistent blocker, not lack of interest.

## Lineage hints
- `lead-guardian/CLAUDE.md` explicitly references this repo's pattern: "Claude Agent SDK (`claude-agent-sdk`)" and carries identical SDK documentation warnings, indicating lead-guardian is the production successor to this exploration
- The orchestration architecture here (multi-phase, quality gates, specialized subagents) is a conceptual predecessor to aria's multi-service agent architecture
