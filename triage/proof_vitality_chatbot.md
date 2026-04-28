# proof_vitality_chatbot

**path**: /Users/jjones/Documents/dev/projects/proof_vitality_chatbot
**last commit**: 2024-01-02 (480 days ago)
**commits**: 98
**stack**: Python, Conda, LangChain, LlamaIndex, OpenAI (GPT-3.5-turbo), Milvus, spaCy, Unstructured, BeautifulSoup, Jupyter notebooks
**status**: abandoned

## Goal (1 sentence)
Build a RAG chatbot grounded in content scraped from proofvitality.com, exploring chunk-size tuning and vector store options before arriving at a working pipeline.

## What exists
- Jupyter notebooks across `src/data/` (scraping, cleaning, HTML-to-markdown conversion) and `src/features/` (chunk evaluation, LangChain+Milvus indexing, full load/transform/index pipeline)
- Raw site data: XML sitemaps and scraped HTML pages stored under `data/raw/`
- A `langchain_milvus.ipynb` notebook that sets up a LangChain `ChatOpenAI` (GPT-3.5-turbo) conversation loop and connects to a Milvus vector store
- Stub `src/models/` and `src/visualization/` directories with only `.gitkeep` files — no inference or serving layer built

## Ending state
The work stopped at the experimental/exploration phase: data ingestion and chunking pipelines exist and were actively iterated, but there is no completed retrieval-augmented QA chain. The README is empty. The v2 repo was started shortly after to restart on a cleaner, pipeline-first architecture.

## Lesson signal
The scraping and chunking notebooks accumulated a lot of exploratory cruft (multiple scrape versions, repeated eval runs) without converging on a reusable pipeline; v2 was likely started to clean this up and swap the orchestration layer from LangChain/LlamaIndex to Haystack with a proper document store (OpenSearch).

## Lineage hints
Directly superseded by `proof_vitality_chatbot_v2` (same domain: proofvitality.com, same goal: AI customer service chatbot). The v2 repo was initialized only 2 days after the last v1 commit (2024-01-04 vs 2024-01-02).
