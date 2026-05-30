# Applied AI Portfolio

A static portfolio site built for the Applied AI Engineer job search, showcasing two years of AI-orchestrated software development across approximately 83 projects.

## Overview

This site is calibrated against a specific Applied AI Engineer job description and is structured to evidence six concrete claims: hands-on technical AI development, applying AI to specific use cases, integrating with internal systems and Gen AI infrastructure, integrating with external platforms, providing technical expertise, and acting as a liaison between technical and non-technical teams.

The site is published via GitHub Pages from the `docs/` directory.

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no build step)
- **Fonts:** Space Grotesk, Inter, JetBrains Mono (Google Fonts)
- **Hosting:** GitHub Pages (`docs/` directory as web root)

## Site Structure

```
docs/
  index.html           — Portfolio landing page; features six case studies plus a "View all case studies" link to the dedicated list page
  resume.html          — HTML resume
  assets/
    styles.css         — Site-wide styles
  case-studies/
    index.html                      -- Dedicated "all case studies" list page
    governed-by-construction.html
    substrate-governance.html
    build-half-worked.html
    llm-as-runtime.html
    hallucination-pipeline.html
    personal-ai-memory.html
    determinism-research.html
    methodology-at-scale.html
    agent-sdk-stability.html
    images/                         -- Case-study screenshots
```

## Case Studies

The portfolio includes nine case studies. The home page features six; all nine are listed on the dedicated case-studies page (`case-studies/index.html`), reachable via the "View all case studies" link from the home page.

| Title | Key Theme |
|-------|-----------|
| Governed by Construction | A complete multi-tenant authentication product built as a single slice on Substrate; every governance guarantee (tamper-evident audit log, tenant isolation, policy engine, verified attribution) is structural -- inherited from the substrate, not written by the team (Zig + SvelteKit + SQLite). |
| Substrate — Prelude | Partial test of Substrate's structural-governance model: an AI-native pre-need planning scenario probing whether the ungoverned path is unconstructable, run end-to-end via one customer's decades-long record (Zig + SvelteKit + SQLite + OpenRouter) |
| Build Half Worked | Speculative AI website rebuild service; 70 sites, 1 paying client |
| LLM as Runtime | Using LLMs as the primary execution layer in pipelines |
| Hallucination Pipeline | Detection and mitigation patterns for LLM hallucinations |
| Personal AI Memory | Full Neo4j + Ollama + FastMCP stack; sovereign personal AI (ARIA/JARVIS) |
| Determinism Research | Empirical RAG vs. LLM comparison; Stoic Architecture workflow tooling |
| Methodology at Scale | AI development methodology; Claude Code slash commands as training artifacts |
| Agent SDK Stability | Claude Agent SDK integration; HVAC lead-response agent with Vonage SMS |

## AI/ML Highlights

The portfolio documents the full applied AI development arc:

- **LLM agent patterns:** While-loop agent architecture (canonical agent pattern), multi-agent orchestration, subagent tool use
- **Memory and RAG:** Neo4j knowledge graph memory, Ollama local embeddings, FastMCP MCP server, recall regression detection
- **Observability:** Span-based tracing, eval harness with delta tracking, SQLite trace storage
- **Infrastructure integration:** Docker Compose, macOS launchd, Coolify deployments, PostgreSQL + JSONB
- **External platform integration:** Vonage SMS, Google Calendar, Postmark email, OpenRouter
- **Methodology:** MAOD/MOAD (AI-orchestrated development), Stoic Architecture five slash commands enforcing deterministic boundary decisions

## Viewing the Site

The live site is served from GitHub Pages. To run locally:

```bash
cd docs
python3 -m http.server 8080
# Visit http://localhost:8080
```

No build step or dependencies are required.
