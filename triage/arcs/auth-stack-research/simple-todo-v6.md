# simple-todo-v6

**path**: /Users/jjones/Documents/dev/projects/simple-todo-v6
**last commit**: 2025-03-12 (411 days ago)
**commits**: 6
**stack**: Vue 3, Vite, TypeScript, SCSS, vue-tsc, Vitest, Playwright
**status**: scratch

## Goal (1 sentence)
A framework-switch experiment: after five iterations on SvelteKit, try scaffolding the same "simple todo" stack validator using Vue 3 + Vite to compare the dev experience.

## What exists
- Scaffolded Vue 3 + Vite project with TypeScript and SCSS configured
- Default `App.vue` with Vue CLI welcome components (`HelloWorld`, `TheWelcome`) — no custom code beyond scaffold
- Unit test infrastructure (Vitest + @vue/test-utils) and Playwright e2e configured
- One commit adding a `Task` model unit test; one adding SCSS

## Ending state
Essentially a framework scaffold with one added test for a `Task` model; the App.vue still shows the Vue CLI welcome screen. No todo functionality, no auth, no database — abandoned after the initial TypeScript and SCSS setup.

## Lesson signal
The sharp stack switch from SvelteKit to Vue 3 after v5 suggests v5 resolved something and the goal shifted to comparing Vue 3 as an alternative. The project was dropped after a few commits, implying Vue wasn't the direction.

## Lineage hints
Breaks the SvelteKit-only pattern of v2–v5; the name "simple-todo-v6" is a misnomer since it abandoned the todo concept entirely and just tested Vue scaffolding. Direct predecessor is simple-task-v5 (better-auth + Drizzle on SvelteKit); this was likely a "what if Vue?" spike immediately after. After abandoning Vue, work moved to project-viewer (back on SvelteKit).
