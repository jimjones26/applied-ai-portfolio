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
    01-build-half-worked.html
    02-llm-as-runtime.html
    03-hallucination-pipeline.html
    04-personal-ai-memory.html
    05-determinism-research.html
    06-methodology-at-scale.html
    07-agent-sdk-stability.html
    08-adversarial-browser-automation.html
```

## Case Studies

| # | Title | Key Theme |
|---|-------|-----------|
| 1 | Build Half Worked | Speculative AI website rebuild service; 70 sites, 1 paying client |
| 2 | LLM as Runtime | Using LLMs as the primary execution layer in pipelines |
| 3 | Hallucination Pipeline | Detection and mitigation patterns for LLM hallucinations |
| 4 | Personal AI Memory | Full Neo4j + Ollama + FastMCP stack; sovereign personal AI (ARIA/JARVIS) |
| 5 | Determinism Research | Empirical RAG vs. LLM comparison; Stoic Architecture workflow tooling |
| 6 | Methodology at Scale | AI development methodology; Claude Code slash commands as training artifacts |
| 7 | Agent SDK Stability | Claude Agent SDK integration; HVAC lead-response agent with Vonage SMS |
| 8 | Adversarial Browser Automation | B2B procurement automation; TinyFish API; OpenRouter multi-model routing |

## AI/ML Highlights

The portfolio documents the full applied AI development arc:

- **LLM agent patterns:** While-loop agent architecture (canonical agent pattern), multi-agent orchestration, subagent tool use
- **Memory and RAG:** Neo4j knowledge graph memory, Ollama local embeddings, FastMCP MCP server, recall regression detection
- **Observability:** Span-based tracing, eval harness with delta tracking, SQLite trace storage
- **Infrastructure integration:** Docker Compose, macOS launchd, Coolify deployments, PostgreSQL + JSONB
- **External platform integration:** Vonage SMS, Google Calendar, Postmark email, OpenRouter, TinyFish API
- **Methodology:** MAOD/MOAD (AI-orchestrated development), Stoic Architecture five slash commands enforcing deterministic boundary decisions

## Viewing the Site

The live site is served from GitHub Pages. To run locally:

```bash
cd docs
python3 -m http.server 8080
# Visit http://localhost:8080
```

No build step or dependencies are required.
