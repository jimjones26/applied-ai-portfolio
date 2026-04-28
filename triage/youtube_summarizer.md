# youtube_summarizer

**path**: /Users/jjones/Documents/dev/projects/youtube_summarizer
**last commit**: 2025-03-12 (411 days ago)
**commits**: 30
**stack**: Python, youtube-transcript-api, Google Gemini API (google-generativeai), SQLite (via DBManager), pytest, pytest-mock
**status**: abandoned

## What exists
- `extractor.py`: fetches YouTube transcripts and video metadata via `youtube_transcript_api`
- `summarizer.py`: sends transcript text to Google Gemini API and returns a summary string
- `db_manager.py`: class-based SQLite manager with `create_schema()` and `store_summary()` methods
- `viewer.py`: retrieves and prints stored summaries by video ID
- `main.py`: CLI entry point with `process` and `view` subcommands — partially complete (argument parsing code has commented stubs and `# ... rest of existing code ...` placeholders)
- Full test suite (`tests/`) covering each module with mocking

## Goal (1 sentence)
A CLI tool to extract transcripts from YouTube videos, summarize them with Gemini, and persist summaries to a local SQLite database for later retrieval.

## Ending state
All individual modules work and are tested in isolation; `main.py` is incomplete — the CLI argument parsing block contains commented-out stubs and placeholder comments, meaning the tool cannot be driven end-to-end. Work stopped just before wiring the CLI together.

## Lesson signal
Appears to be an AI dev framework test ("testing the AI dev framework" — README); structured with clean module separation and high test coverage, suggesting it was scaffolded to practice iterative AI-assisted Python TDD rather than ship a product.

## Lineage hints
Standalone; no connection to the SvelteKit arc. Dates overlap with the simple-todo series (March 2025), consistent with parallel exploration across multiple stacks.
