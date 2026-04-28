# agents-workflows

**path**: /Users/jjones/Documents/dev/projects/agents-workflows
**last commit**: 2024-11-18 (525 days ago)
**commits**: 27
**stack**: SvelteKit 2, Svelte 5, TypeScript, Prisma (SQLite), sveltekit-superforms, Zod, bits-ui, lucide-svelte, paneforge, vaul-svelte, embla-carousel, Tailwind
**status**: abandoned

## Goal (1 sentence)
A dashboard UI for creating and managing AI agent workflows, with a sidebar navigation, theme toggle, and a modal-driven workflow creation form.

## What exists
- Dashboard layout: responsive sidebar (`Sidebar.svelte`, `MobileSidebar.svelte`), breadcrumb header, theme mode toggle
- Workflows page with `CreateWorkflowDialog` (modal form), `UserWorkflowsSkeleton` loading state, and empty-state UI
- Prisma schema with a `Workflow` model (id, name, description, definition, status, timestamps)
- Server action for workflow creation via superforms + Zod; data wired to the page via `+page.server.ts`
- Debug artifact left in production: `{JSON.stringify(data.workflows)}` rendered directly in the workflows page

## Ending state
The dashboard shell and workflow creation flow are functional at the UI layer. The Prisma schema is defined but has a typo (`updatet` instead of `updatedAt`). The raw JSON debug output in the workflows page was never cleaned up, indicating work stopped mid-development. No workflow execution, editing, or deletion was implemented.

## Lesson signal
An early-stage product prototype exploring a workflow management UI. The component richness (paneforge, vaul-svelte, embla-carousel) suggests UI exploration was the priority; backend and business logic were not reached.

## Lineage hints
No explicit cross-repo references. The "agents/workflows" framing aligns thematically with poc_yt_ts_chat's pipeline architecture, but they share no code. The dashboard component pattern (sidebar + breadcrumb) is similar to what would be needed in a more complete AI tools product.
