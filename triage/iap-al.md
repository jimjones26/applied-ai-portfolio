# iap-al

**path**: /Users/jjones/Documents/dev/projects/iap-al
**last commit**: 2025-07-12 (289 days ago)
**commits**: 11
**stack**: docs-only
**status**: docs-only

## Goal (1 sentence)
Define and document IAP-AL (Iterative AI-Driven Prototyping with Automated Loops) — a personal AI development methodology emphasizing modular decomposition, automated validation loops, and minimal human intervention after initial planning — and apply it to design an AI-driven speculative website builder platform.

## What exists
- `prompts/` — 8 prompt templates covering the IAP-AL methodology steps: idea refinement, initial conceptualization, modular decomposition, tech stack recommendation, prototyping generation, automated validation loops, system-level integration, deployment/maintenance
- `speculative_website_test/` — one complete IAP-AL methodology run applied to the website builder platform: `00_refined_project_idea.md` (9.5K full product spec), `01_goal_artifact.md` (3.1K), `02_modular_decomposition.md` (14.9K), `03_tech_stack_artifact.md` (8.6K)
- No executable code, no `src/` directory, no manifest files

## Ending state
The methodology was documented and one full test run was completed. The test subject — an AI-driven speculative website builder — was carried to tech stack recommendation (03) but not to prototype generation (04+). The website-builder repo appears to be the implementation that followed this planning work. This repo has no further commits after the tech stack artifact on 2025-07-12; it served its purpose as a planning artifact.

## Lesson signal
Unclear from the repo itself — the docs-only nature means there's no implementation feedback. The IAP-AL methodology's central premise (that LLMs can run automated validation loops to self-correct) is more of a workflow hypothesis than a tested engineering constraint. Whether the methodology's "automated loops" actually reduced human intervention in website-builder's development would require cross-referencing with that repo's commit history.

## Lineage hints
- `speculative_website_test/00_refined_project_idea.md` describes the platform that became website-builder almost exactly: "AI-driven platform that automates the creation, analysis, and sales of speculative websites tailored to specific business verticals"
- website-builder's CLAUDE.md and the 13-step pipeline structure are consistent with following an upfront modular decomposition like the one in `02_modular_decomposition.md` (14.9K)
- The IAP-AL prompt templates in `prompts/` match the planning pattern visible in rllms-exploration's `docs/plan.md` and lead-guardian's `docs/implementation-plan.md`
