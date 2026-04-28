# framework-story-gen

**path**: /Users/jjones/Documents/dev/projects/framework-story-gen
**last commit**: 2025-06-23 (308 days ago)
**commits**: 50
**stack**: Prompt engineering / markdown (no executable code)
**status**: paused

## Goal (1 sentence)
Iteratively refine a multi-phase, AI-assisted software development planning framework by versioning prompts and system instructions across dozens of numbered directories.

## What exists
- 34+ numbered version directories (v1–v34), each containing `framework.md`, `master_prompt.md`, system instructions, notes, and outputs
- A `feedback-iteration-system/` directory with its own system instructions and feedback prompts
- A top-level `framework-review.md` with criteria for evaluating clarity, output consistency, and state management across 6 framework phases
- No executable code; everything is prompt text, structured markdown instructions, and LLM output artifacts

## Ending state
The repo represents a long iterative loop of prompt refinement: each version dir captures a snapshot of the framework at a given point, with outputs from previous LLM runs feeding the next version. By v34 the framework had grown to a `master_prompt.md` at 15 KB plus supporting instruction files. Work paused in June 2025 with no clear final version designated and an archived `_archived-do-not-use.txt` marker in the feedback system, suggesting the iteration was halted mid-cycle.

## Lesson signal
Pure prompt engineering at scale shows diminishing returns without a structured eval harness; versioning prompts as flat files makes regression testing and diff-ing impractical. The framework-review doc acknowledges this (token bloat, lack of structured state) but no tooling was built to address it.

## Lineage hints
The framework philosophy (phased AI-driven development, state management between phases) maps directly onto `ai_dev_framework`, which attempted to formalize the same ideas as an executable Python project. `content-framework-poc` applies a similar phase-based approach to content production.
