# Triage Index — repo → arc/case-study/category

Companion to `_SHORTLIST.md` (8 case studies + cross-portfolio frame) and `_LINEAGES.md` (13 lineage arcs + standalones + cuts). This index tells you *where every triage file now lives* after the reorg.

83 repos total. All classified.

---

## Directory layout

```
triage/
├── _SHORTLIST.md                            source of truth for what goes on the site
├── _LINEAGES.md                             full repo map: 13 arcs + standalones + cuts
├── _INDEX.md                                this file
├── 00-origin/                               cross-portfolio frame, not a case study
├── 01-build-half-worked/                    case study #1
├── 02-llm-as-runtime/                       case study #2
├── 03-hallucination-as-pipeline-stage/      case study #3
├── 04-personal-ai-memory/                   case study #4
├── 05-determinism-research/                 case study #5
├── 06-methodology-at-scale/                 case study #6
├── 07-agent-sdk-stability/                  case study #7
├── 08-adversarial-browser-automation/       case study #8
├── arcs/                                    multi-repo arcs not anchoring a case study
│   ├── auth-stack-research/                 simple-todo arc + project-viewer + performance_tracker
│   ├── mcp-docs-rag/                        MCP docs-RAG arc
│   ├── knowledge-graph-context/             KG-for-AI-context arc
│   ├── website-builder-mega/                website-builder mega-arc repos not in case studies
│   ├── caa-framework/                       Canonical Agent Architecture
│   ├── proof-vitality-rag/                  proof_vitality_chatbot v1+v2
│   ├── paic-spec-driven/                    paic-svelte01/02
│   └── cogni-shift/                         cogni-shift + cognishift
├── standalones/                             single-repo entries cited in shortlist's "Additional" table or _LINEAGES.md standalones
└── cuts/                                    cut from the site — narrow lessons, scaffolds, planning-only
```

---

## Per-repo lookup (sorted by repo name)

| Repo | Location | Notes |
| --- | --- | --- |
| agents-workflows | `cuts/` | mixed AI workflow experiments |
| ai-context-system | `arcs/knowledge-graph-context/` | KG arc, MCP layer |
| AI-Website-Builder | `arcs/website-builder-mega/` | concept doc, no code |
| ai_dev_framework | `cuts/` | docs-only methodology design |
| architecting-agent-memory | `standalones/` | _LINEAGES.md standalone |
| aria | `04-personal-ai-memory/` | case study #4; also in MCP Context/Aria arc |
| aria-v2 | `04-personal-ai-memory/` | case study #4 |
| automated-website-rebuilder | `02-llm-as-runtime/` | case study #2; also in website-builder mega-arc |
| caa-exploration | `arcs/caa-framework/` | CAA arc |
| caa-test | `arcs/caa-framework/` | CAA arc |
| claro-sight | `standalones/` | shortlist Additional table |
| claude-agent-sdk | `07-agent-sdk-stability/` | case study #7 |
| cogni-shift | `arcs/cogni-shift/` | planning sibling |
| cognishift | `arcs/cogni-shift/` | implementation |
| content-framework-poc | `cuts/` | docs-only concept |
| create-deliverables-mcp | `standalones/` | **uncategorized by prior session** — referenced once in cuts table as parent of game-dev-design output. 18 commits, MCP server for HTML deliverables. Review before site copy. |
| digital-identity-kg | `standalones/` | shortlist Additional + _LINEAGES.md standalone |
| docs-graph-db | `arcs/knowledge-graph-context/` | KG arc |
| docs-kb-manager-mcp | `arcs/mcp-docs-rag/` | MCP docs-RAG arc |
| first-principles | `05-determinism-research/` | case study #5 |
| framework-story-gen | `00-origin/` | cross-portfolio frame |
| game-dev-design | `cuts/` | docs-only design output |
| iap-al | `06-methodology-at-scale/` | case study #6; also in website-builder mega-arc |
| iap-al-v2 | `06-methodology-at-scale/` | case study #6 |
| jarvis-core | `04-personal-ai-memory/` | case study #4 (JARVIS = ARIA, v1) |
| lead-guardian | `07-agent-sdk-stability/` | case study #7; also productionized output of auth-stack arc |
| life-saver-biz | `01-build-half-worked/` | case study #1 |
| life-saver-biz-v2 | `01-build-half-worked/` | case study #1 |
| life-saver-biz-v3 | `01-build-half-worked/` | case study #1 |
| llm-knowledge-graph-construction | `arcs/knowledge-graph-context/` | Neo4j course |
| llm-vectors-unstructured | `arcs/knowledge-graph-context/` | Neo4j course |
| maod-framework | `06-methodology-at-scale/` | case study #6 |
| mcp_context_server | `arcs/mcp-docs-rag/` | MCP docs-RAG arc; also predecessor to aria |
| mcp_documentation_server | `arcs/mcp-docs-rag/` | MCP docs-RAG arc |
| mcp-agentic-behaviors | `arcs/mcp-docs-rag/` | MCP docs-RAG arc |
| mcp-docs-server | `arcs/mcp-docs-rag/` | MCP docs-RAG arc |
| merlin-pai | `cuts/` | docs-only requirements |
| metis-theia | `standalones/` | shortlist Additional table |
| microservice-oriented-ai-orchestrated-development- | `06-methodology-at-scale/` | case study #6 (MOAD) |
| natural-language-website-biz | `02-llm-as-runtime/` | case study #2; also in website-builder mega-arc |
| neura-core-v2 | `04-personal-ai-memory/` | case study #4 |
| neura-core-v3 | `04-personal-ai-memory/` | case study #4 |
| nuera-core | `04-personal-ai-memory/` | case study #4 (folder typo for neura-core) |
| p4p-design-system | `cuts/` | per author: not for portfolio scope |
| paic-svelte01 | `arcs/paic-spec-driven/` | PAIC arc |
| paic-svelte02 | `arcs/paic-spec-driven/` | PAIC arc |
| performance_tracker | `arcs/auth-stack-research/` | culmination of auth arc; also cited as standalone in shortlist Additional |
| pi-exploration | `05-determinism-research/` | case study #5 |
| pi-harness | `05-determinism-research/` | case study #5 |
| pipeline-observability | `cuts/` | 2-commit scaffold |
| poc_yt_ts_chat | `cuts/` | semantic chunking exercise |
| prd-creator | `cuts/` | 1-commit saved prompt |
| procure-forge | `08-adversarial-browser-automation/` | case study #8 |
| project-viewer | `arcs/auth-stack-research/` | auth arc |
| proof_vitality_chatbot | `arcs/proof-vitality-rag/` | RAG arc v1 |
| proof_vitality_chatbot_v2 | `arcs/proof-vitality-rag/` | RAG arc v2 |
| questionnaire-copilot | `standalones/` | **uncategorized by prior session** — not in `_LINEAGES.md` or `_SHORTLIST.md`. 56 commits, paused. Multi-tenant SaaS for security/vendor compliance questionnaires with LLM-assisted answer retrieval. Review before site copy. |
| real-transactions | `05-determinism-research/` | case study #5 (production target for the research) |
| rllms-exploration | `05-determinism-research/` | case study #5 |
| simple-task-v5 | `arcs/auth-stack-research/` | auth arc |
| simple-todo | `arcs/auth-stack-research/` | auth arc v1 |
| simple-todo-v2 | `arcs/auth-stack-research/` | auth arc |
| simple-todo-v3 | `arcs/auth-stack-research/` | auth arc |
| simple-todo-v4 | `arcs/auth-stack-research/` | auth arc |
| simple-todo-v6 | `arcs/auth-stack-research/` | auth arc Vue spike |
| SpaceTravelRepairMan | `standalones/` | shortlist Additional table |
| speculative-website-builder | `arcs/website-builder-mega/` | website-builder mega-arc |
| speculative-website-builder-v2 | `arcs/website-builder-mega/` | website-builder mega-arc |
| taskflow | `standalones/` | _LINEAGES.md standalone |
| tasky | `cuts/` | same-day scaffold reset |
| tasky-old | `cuts/` | same-day scaffold reset |
| tiny-fish-project | `08-adversarial-browser-automation/` | case study #8 (Argus pivot) |
| todo-app | `cuts/` | 4-commit scaffold |
| twcss-templates | `cuts/` | HTML transformation scaffold |
| user-management | `standalones/` | shortlist Additional table |
| voltfolio | `standalones/` | shortlist Additional table |
| web-scraping-service | `06-methodology-at-scale/` | case study #6 (one-shot output) |
| website-builder | `03-hallucination-as-pipeline-stage/` | case study #3 |
| website-builder-test | `01-build-half-worked/` | case study #1 (the production execution layer) |
| website-builder-v2 | `02-llm-as-runtime/` | case study #2; also in website-builder mega-arc |
| website-builder-v3 | `arcs/website-builder-mega/` | website-builder mega-arc |
| website-rebuilder-failed | `02-llm-as-runtime/` | case study #2 |
| youtube_summarizer | `cuts/` | dev-framework test exercise |

---

## Cross-arc memberships

A handful of repos belong to multiple arcs in `_LINEAGES.md`. The triage file lives in only one location (the strongest claim), but the cross-references matter for site copy:

- **`aria`** — case study #4 (Personal AI Memory) AND MCP Context / Aria Operational arc. Filed under #4.
- **`mcp_context_server`** — MCP Docs-RAG arc AND MCP Context / Aria Operational arc (as predecessor). Filed under MCP Docs-RAG.
- **`iap-al`** — case study #6 (MAOD/MOAD) AND website-builder mega-arc (as the methodology applied to website builder). Filed under #6.
- **`natural-language-website-biz`, `automated-website-rebuilder`, `website-builder-v2`** — case study #2 AND website-builder mega-arc. Filed under #2.
- **`lead-guardian`** — case study #7 (Agent SDK Stability) AND auth-stack arc (as productionized output). Filed under #7.
- **`performance_tracker`** — auth-stack arc AND shortlist Additional table standalone. Filed under auth-stack arc (its arc role is more central than its standalone role).

---

## Items needing post-hoc review

Two repos were not classified in `_LINEAGES.md` by the prior session:

- **`questionnaire-copilot`** (56 commits, paused) — multi-tenant SaaS, security/vendor compliance questionnaires with LLM-assisted answer retrieval. Real product ambition. Not cut, not in Additional. Currently in `standalones/`. Decision needed: cite in Additional? cut? case study material?
- **`create-deliverables-mcp`** (18 commits, paused) — MCP server generating styled HTML deliverables (lean canvas, project brief, user stories, etc.). Referenced once in lineage cuts as parent of `game-dev-design` output but never given its own classification. Currently in `standalones/`.

Both should be reviewed before site copy is finalized.
