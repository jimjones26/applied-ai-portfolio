# cognishift

**path**: /Users/jjones/Documents/dev/projects/cognishift
**last commit**: 2025-11-17 (161 days ago)
**commits**: 40
**stack**: SvelteKit 5 + TypeScript + TailwindCSS 4 + Chart.js + PWA (localStorage, no backend)
**status**: abandoned

## Goal (1 sentence)
Mobile-first Progressive Web App to help users break through feeling stuck using Emily McDonald's neuroscience frameworks (identity shifting, fear work, dopamine regulation, manifestation), structured as 30-90 day "Transformation Seasons."

## What exists
- Full SvelteKit 5 app with routes: `/`, `/transformation`, `/transformation/setup`, `/daily`, `/archive/[seasonId]`, `/progress`
- Component library organized by framework: `transformation/`, `identity/`, `fear/`, `dopamine/`, `manifestation/`, `daily/`, `archive/`, `progress/`, `shared/`
- Svelte stores with localStorage persistence (transformationStore, seasonStore, dailyStore)
- PWA setup: service worker + manifest, `mobile-web-app-capable` meta tag
- Refactor across 7 sessions to a "transformation-only" single-focus architecture

## Ending state
Last commit (2025-11-17) was a post-refactor cleanup pass — validation, unused code removal, documentation update — following a 7-session refactor that replaced a coexistence design with a single transformation architecture. Commit message "Session 12: Complete PWA setup — CogniShift is now 100% complete!" appears 5 commits before the final refactor began, suggesting the refactor invalidated that claim. No backend, no auth, no deployment.

## Lesson signal
The refactor (Sessions 1–7) replaced the original multi-framework coexistence design with a single transformation wrapper pattern. The original architecture tried to run all 4 frameworks independently alongside each other, which created conflicting UI state — the single transformation focus was the fix. The app was feature-complete at the localStorage/PWA level but has no user data layer that would support real usage.

## Lineage hints
- Paired with `cogni-shift` (the planning/discovery artifact that defined the personas and framework decisions this app implements)
- No imports or references to other repos by name
