# first-principles

**path**: /Users/jjones/Documents/dev/projects/first-principles
**last commit**: 2026-04-27 (0 days ago)
**commits**: 1
**stack**: Python + Google Gemini API (via `google-generativeai`) + NDJSON logging
**status**: active

## Goal (1 sentence)
Build a small, inspectable Recursive Language Model (RLM) prototype comparing a RAG baseline, an open RLM loop (model writes Python into a persistent REPL), and a Lambda-RLM-style structured pipeline.

## What exists
- Seven implemented Python modules: `search.py` (lexical KB search), `llm.py` (Google/Gemini provider with MOCK_LLM mode), `baseline_rag.py`, `event_log.py` (NDJSON), `repl_host.py` (persistent in-process Python REPL), `rlm.py` (open RLM loop), `eval_runner.py`
- Eval suite: 10 questions in `eval/questions.jsonl`, structured report task, evaluation rubric
- Sample knowledge base in `kb/`
- `NEXT_CHAT_PROMPT.md` with detailed handoff state including run outputs and known limitations
- All run outputs in `runs/outputs/` (JSONL + summary JSON)

## Ending state
Committed today (2026-04-27) as an initial commit containing a working system. `NEXT_CHAT_PROMPT.md` records the most recent state: baseline RAG scores 9/10, open RLM scores 9/10 (both after alias rescoring), with `greenfield_003` as the only remaining failure due to Gemini provider read timeouts on the structured report task. A prompt fix was applied to `rlm.py` to instruct the model to use `FINAL('''...''')` for multiline answers, fixing repeated `SyntaxError: unterminated string literal` recovery loops. Lambda-RLM pipeline, recursion, embeddings, and web UI are all explicitly deferred.

## Lesson signal
The main discovered LLM behavioral constraint: Gemini (gemini-1.5-flash) frequently uses invalid single-quoted multiline strings in REPL blocks, causing `SyntaxError` on execution and requiring a recovery turn — fixed by prompt instruction rather than parsing. Structured report generation reliably hits provider read timeouts before producing a final answer, which the NEXT_CHAT_PROMPT flags as a known limitation of the open RLM approach vs. the planned Lambda-RLM pipeline.

## Lineage hints
- No references to other repos in this batch
- Standalone research prototype
