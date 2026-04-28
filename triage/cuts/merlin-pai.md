# merlin-pai

**path**: /Users/jjones/Documents/dev/projects/merlin-pai
**last commit**: 2026-03-14 (44 days ago)
**commits**: 3
**stack**: docs-only
**status**: docs-only

## Goal (1 sentence)
Define the product vision and requirements for a terminal-native CLI chat interface ("Merlin") that maintains conversational continuity within a session, backed by a single LLM provider.

## What exists
- `docs/requirements/cli-chat-requirements.md` (11KB): detailed requirements doc with user journeys, success criteria, scope boundaries
- `docs/requirements/cli-chat-vision.md` (referenced in git log, not confirmed present separately from exploration)
- `docs/exploration/cli-chat-vision.md` (6.8KB): vision document
- `.claude/settings.local.json`: minimal Claude Code settings
- No source code, no `package.json`, no `Cargo.toml`, no executable artifact of any kind

## Ending state
Two planning documents (vision + requirements) were produced across 3 commits. The requirements doc specifies the MVP as an in-memory session history chat loop with a single LLM provider, explicitly deferring persistent memory, tool use, multi-provider support, and session export. No implementation has begun.

## Lesson signal
Unclear — the planning artifacts are complete and scoped reasonably. The gap between requirements completion (2026-03-14) and no code suggests either context was lost, the project was deprioritized in favor of other repos, or implementation was planned for a future session that never happened. Needs author input.

## Lineage hints
- No references to other repos in this batch
- Standalone product definition artifact
