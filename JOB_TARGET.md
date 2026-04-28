# Job Target — Applied AI Engineer (Nasdaq)

The site copy should be calibrated against this JD phrase-by-phrase. Every case study, the cross-portfolio frame, the hero copy, and the contact section should answer the question: **does this evidence one of the JD bullets below?**

## Role title

**Applied AI Engineer**

## JD (verbatim)

> Responsible for hands-on technical development of AI, applying AI technologies to specific use cases, integrating with internal systems (including Gen AI infrastructure) as well as external platforms, providing technical expertise to the team and training efforts. Acting as technical liaison between Marketing and Technology and AI teams.

## Five anchors (broken out)

The JD reduces to five distinct claims the site must support:

1. **Hands-on technical development of AI**
2. **Applying AI technologies to specific use cases**
3. **Integrating with internal systems (including Gen AI infrastructure)**
4. **Integrating with external platforms**
5. **Providing technical expertise to the team and training efforts**
6. **Acting as technical liaison between Marketing, Technology, and AI teams**

## Mapping anchors → portfolio evidence

This is the cross-reference for site copy. Each JD anchor should cite at least one concrete case study or repo, and case studies that don't map to any JD anchor are decorative — cut them or reframe.

### 1. Hands-on technical development of AI

- The cross-portfolio frame: **~83 AI-orchestrated projects, ~2 years, zero hand-written code.**
- Origin: `framework-story-gen` (1,111 commits, ~34 distinct AI-orchestration approaches).
- All 8 case studies are concrete instances.

### 2. Applying AI technologies to specific use cases

- **#1 Build Half Worked**: speculative website rebuilds → 70 sites, 1 paying client.
- **#5 Determinism research → real-transactions Phase 2**: AI transaction coordinator for real estate agents.
- **#7 Agent SDK Stability**: HVAC contractor lead-response agent (lead-guardian).
- **#8 Adversarial Browser Automation**: B2B procurement (procure-forge) and intelligence (Argus).
- Plus standalones: `digital-identity-kg`, `architecting-agent-memory`, `taskflow`, `questionnaire-copilot` (compliance questionnaires).

### 3. Integrating with internal systems (including Gen AI infrastructure)

- **#4 Personal AI Memory**: full Neo4j + Ollama + FastMCP MCP server stack on host machine; Docker Compose + macOS launchd; eval harness with delta tracking + regression detection. Direct Gen AI infrastructure work.
- **#7 Agent SDK Stability**: Claude Agent SDK integration as the load-bearing layer; bundled SDK docs locally because training data was unreliable.
- **#5 Determinism research**: pi-harness Stoic Architecture workflow tooling; first-principles RAG-vs-RLM-vs-Lambda-RLM empirical comparison.
- The MCP servers across the portfolio (mcp-docs-rag arc, ai-context-system, taskflow, create-deliverables-mcp).

### 4. Integrating with external platforms

- **#1 Build Half Worked**: Gmail thread sync, SQLite campaigns DB, email outreach pipelines.
- **#7 Agent SDK Stability**: Vonage SMS, Google Calendar, multi-tenant SaaS architecture.
- **#5 Determinism research → real-transactions**: Postmark email; pivoted away from Google OAuth/Gmail/Calendar (10-task migration documented).
- **#8 Adversarial Browser Automation**: TinyFish API, OpenRouter, multi-supplier portal automation.
- Standalone `voltfolio` (crypto APIs).

### 5. Providing technical expertise to the team and training efforts

- **#6 AI Development Methodology at Scale (MAOD/MOAD)**: explicit Claude Code commands and process constraints for AI-orchestrated development. The methodology *is* the training artifact.
- **#5 Determinism research (pi-harness)**: "Stoic Architecture" five slash commands (`/stoic-start`, `/stoic-design`, `/stoic-check`, `/stoic-status`, `/stoic-implement`) — gating discipline that forces deterministic-vs-non-deterministic boundary decisions before implementation. Reusable by any team.
- **CAA framework arc** (`caa-exploration`, `caa-test`): canonical agent architecture published as `caa-core@0.2.0` — reusable framework for the while-loop agent pattern.
- The cross-portfolio frame's articulation of "what AI orchestration means" (4 modes) is itself transferable training material.

### 6. Acting as technical liaison between Marketing, Technology, and AI teams

- **#4 Personal AI Memory — JARVIS/ARIA naming choice**: deliberate Iron Man metaphor to communicate sovereign-personal-AI architecture to non-technical reviewers. This is *explicitly* the technical-liaison skill, and the shortlist already calls it out.
- **#1 Build Half Worked**: lessons section explicitly translates AI-build-pipeline throughput into a sales/distribution constraint — i.e., it speaks the language of the go-to-market side, not just the engineering side. "AI tools amplify the bottleneck rather than relieve it" is a Marketing-team-legible framing of an engineering finding.
- The synthesis-and-curation work itself (this very site, structured to brief HR + the wider AI org + technical peers) is a liaison artifact.

## How to use this file

- Before writing any site copy, re-read the five anchors and the mapping above.
- For each section of `index.html` and each case-study deep-dive page, cite at least one JD anchor in the copy review (does this section advance one of these claims?).
- Case studies or repos that don't map to any anchor are decorative — either cut them, reframe them, or accept they're "depth evidence" only (browsable but not headlined).
- The cross-portfolio frame should explicitly hit anchors #1, #5, and #6. The case-study cards should hit #2, #3, #4. The Additional table extends #2 and #4.

## Audience

Same as `NEXT_SESSION_PROMPT.md`:

- His peers and boss (anti-nepotism — proof of real chops). They'll scrutinize anchor #1 hardest.
- HR (paper-qualified checkbox). They'll scan for keyword matches against anchors #2–#5.
- The wider AI org (this guy can prototype + translate). They'll weight anchors #5 and #6.
