# p4p-design-system

**path**: /Users/jjones/Documents/dev/projects/p4p-design-system
**last commit**: unknown (no git history — git exited 128)
**commits**: 0 (not a git repo, or git unavailable)
**stack**: Node.js, Style Dictionary v4, Vite, W3C design token JSON
**status**: docs-only

## Goal (1 sentence)
A single-source-of-truth design token system that auto-generates artifacts for web (CSS, SCSS, JS, TypeScript, Tailwind), .NET MAUI (C# + XAML), and LLM consumption from W3C-spec JSON token files.

## What exists
- 200+ base design tokens (colors 70+, typography, spacing 35+, elevation, borders, transitions, breakpoints) plus iOS HIG and Material Design 3 platform-native token sets
- 8 output formats auto-generated via Style Dictionary: CSS custom properties, SCSS, ES6, TypeScript declarations, Tailwind config, C# static classes, XAML ResourceDictionary, and LLM-optimized JSON
- Build system with watch mode, Vite-based interactive documentation site, and custom transformers for platform-specific code generation (C# conditional compilation, XAML OnPlatform)
- `output/` directory with pre-built artifacts committed alongside source

## Ending state
The repo is a completed design system artifact with no git history visible. There is no application code — only token definitions and the build pipeline. The folder contains a 154MB meeting recording MP4 and several research PDFs (Digital Identity Wallets, eID Gen2 Onboarding, SIMA), suggesting this was built in support of a specific client or identity-focused product (P4P). No implementation consuming these tokens exists in this directory.

## Lesson signal
Unclear why there is no git history; either the repo was never initialized or history was stripped. The presence of `.xlsx` monetization scenarios and identity/eID research docs alongside the design system suggests this was a consulting or proposal context, not a standalone product. No implementation has begun within this repo.

## Lineage hints
- `docs/` folder contains UX process files (mermaid diagrams, identity wallet research, eID onboarding flows) suggesting a "P4P" product in the identity/government services space
- No cross-repo imports found; the LLM-optimized token output (`output/llm/tokens.json`) is described as intended for AI-assisted prototyping in other tools
