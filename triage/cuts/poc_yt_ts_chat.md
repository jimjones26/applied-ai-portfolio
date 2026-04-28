# poc_yt_ts_chat

**path**: /Users/jjones/Documents/dev/projects/poc_yt_ts_chat
**last commit**: 2024-11-01 (542 days ago)
**commits**: 50
**stack**: Python, Flask, Google API (YouTube Data API), PostgreSQL (psycopg2), Ollama (nomic-embed-text), scikit-learn, NumPy, BeautifulSoup4
**status**: abandoned

## Goal (1 sentence)
A proof-of-concept pipeline that fetches YouTube video transcripts, adds punctuation, semantically chunks them using Ollama embeddings, and persists them to PostgreSQL for downstream chat/RAG use.

## What exists
- Component-based pipeline architecture (`utils/pipeline.py` — `BaseComponent`, `Pipeline` classes with DAG-style connect/validate/run)
- Pipeline components: `YouTubeTranscriptRetriever`, `YouTubePlaylistVideosFetcher`, `YouTubeChannelUploadsFetcher`, `AddPunctuation`, `SemanticTextChunker`, `PostgresVideoPersistenceManager`, `PostgresTranscriptPersistenceManager`
- `SemanticTextChunker`: splits sentences, generates Ollama embeddings (`nomic-embed-text`), calculates cosine distances, segments on percentile breakpoints
- Flask HTTP endpoint (`/chunk_pipeline`) to trigger the chunking pipeline via POST
- Ollama Modelfile for `llama3.2:3b` with a custom system prompt (suggesting chat was intended as the final stage)
- Rate limiter and logger utilities

## Ending state
The ingestion and chunking pipeline is the most technically complete piece of work in this batch. The Ollama embeddings + cosine-distance semantic chunker is a real implementation, not a stub. However, there is no frontend, no chat interface, and no retrieval/RAG layer — the pipeline stops at chunked text persisted to Postgres.

## Lesson signal
This is the most technically substantive repo: a custom pipeline execution framework, semantic text chunking with local embeddings, and YouTube transcript ingestion. Stopped before the "chat" part of "yt_ts_chat" was built — likely hit friction setting up a retrieval layer or LLM integration on top.

## Lineage hints
The `llama32_3b_modfile.txt` in `backend/ollama/` hints at a planned Ollama-powered chat endpoint that was never built. No shared code with other repos in this batch, but the YouTube + RAG concept aligns with themes in other AI exploration projects in this portfolio.
