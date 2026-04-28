# caa-exploration

**path**: /Users/jjones/Documents/dev/projects/caa-exploration
**last commit**: 2025-10-17 (192 days ago)
**commits**: 99
**stack**: TypeScript, Node 18+, better-sqlite3, Fastify, Vitest, Svelte 5 (trace UI client), OpenRouter
**status**: abandoned

## Goal (1 sentence)
A reusable TypeScript agent framework implementing the canonical while-loop agent pattern with built-in observability, cost controls, retry logic, and a trace visualization UI.

## What exists
- Complete core library: `WhileLoopAgent`, provider abstraction (OpenRouter tested), tool execution, safety monitor, span-based SQLite tracer
- YAML prompt templates with versioning, a CLI for managing them, and a Zod-validated evaluation framework
- A Fastify-served Svelte 5 trace UI (`trace-ui/`) with real-time dashboard, timeline visualization, and span detail views
- 16+ integration test files covering retry, nested agents, cost tracking, safety limits, tracing, and prompt comparison
- Published as `caa-core@0.2.0` (tarball present in repo); full GitHub repository metadata in package.json

## Ending state
The library reached a production-ready v0.2.0 state with build artifacts, a packaged tarball, and a `create-caa-app` scaffolding tool. Development stopped in October 2025. The repo is marked PROPRIETARY despite having GitHub public metadata, and `dist-*` directories are committed. `caa-test` consumes the tarball directly.

## Lesson signal
The dual-build architecture (main lib + trace UI as separate tsc configs) created complexity: four separate `tsconfig.*` files and multiple `build:*` npm scripts. This overhead likely slowed iteration once the core loop was proven.

## Lineage hints
`caa-test` is a direct downstream consumer (linked via `file:caa-core-0.2.0.tgz`). `procure-forge` and `tiny-fish-project/argus` both implement agent orchestration patterns that are architecturally similar but built independently without using this framework.
