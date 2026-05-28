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
  index.html           — Portfolio landing page with case-study cards
  resume.html          — HTML resume
  assets/
    styles.css         — Site-wide styles
  case-studies/
    01-substrate-governance.html
    02-build-half-worked.html
    03-llm-as-runtime.html
    04-hallucination-pipeline.html
    05-personal-ai-memory.html
    06-determinism-research.html
    07-methodology-at-scale.html
    08-agent-sdk-stability.html
    images/                — Case-study screenshots
```

## Case Studies

| # | Title | Key Theme |
|---|-------|-----------|
| 1 | Substrate — Prelude | Partial test of Substrate's structural-governance model: an AI-native pre-need planning scenario probing whether the ungoverned path is unconstructable, run end-to-end via one customer's decades-long record (Zig + SvelteKit + SQLite + OpenRouter) |
| 2 | Build Half Worked | Speculative AI website rebuild service; 70 sites, 1 paying client |
| 3 | LLM as Runtime | Using LLMs as the primary execution layer in pipelines |
| 4 | Hallucination Pipeline | Detection and mitigation patterns for LLM hallucinations |
| 5 | Personal AI Memory | Full Neo4j + Ollama + FastMCP stack; sovereign personal AI (ARIA/JARVIS) |
| 6 | Determinism Research | Empirical RAG vs. LLM comparison; Stoic Architecture workflow tooling |
| 7 | Methodology at Scale | AI development methodology; Claude Code slash commands as training artifacts |
| 8 | Agent SDK Stability | Claude Agent SDK integration; HVAC lead-response agent with Vonage SMS |

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
