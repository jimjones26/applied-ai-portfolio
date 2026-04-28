# proof_vitality_chatbot_v2

**path**: /Users/jjones/Documents/dev/projects/proof_vitality_chatbot_v2
**last commit**: 2024-01-04 (478 days ago)
**commits**: 44
**stack**: Python, Conda, Haystack 2.x, OpenSearch (Docker Compose), opensearch-haystack, OpenAI, BeautifulSoup, pygraphviz, Jupyter notebooks, Cookiecutter data-science scaffold
**status**: abandoned

## Goal (1 sentence)
Rebuild the Proof Vitality chatbot on a production-oriented pipeline architecture using Haystack and OpenSearch as the document store, replacing the v1 notebook-sprawl approach.

## What exists
- `notebooks/collect_sitemap_files_pipeline.ipynb`: crawls proofvitality.com sitemaps and saves raw HTML
- `notebooks/data_ingest_preprocess_pipeline.ipynb`: Haystack pipeline with document splitter, an ingestion flow diagram (`ingestion_pipeline.png`), and a `docker-compose.yml` for a local OpenSearch cluster
- `src/opensearch/` with a `docker-compose.yml` for the vector store
- Cookiecutter scaffold (Makefile, Sphinx docs, tox, setup.py) — boilerplate only, not populated
- README is the default Cookiecutter template with no project-specific content

## Ending state
The project was abandoned 4 days after the first commit — almost certainly a restart that stalled immediately. The Haystack ingest pipeline notebooks have execution output and show meaningful progress (sitemap crawling → HTML storage → document splitting → OpenSearch indexing), but no retrieval or chat interface was ever built.

## Lesson signal
The architectural pivot from LangChain/Milvus (v1) to Haystack/OpenSearch (v2) was well-motivated but the project ended before the RAG query side was implemented; the bottleneck was likely environment complexity (Docker OpenSearch) combined with the short runway between experiments.

## Lineage hints
Successor to `proof_vitality_chatbot`. Same target domain (proofvitality.com), same end goal (AI-enabled customer service chatbot). No further v3 found in the projects directory; this line of work appears to have been fully dropped.
