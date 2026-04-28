# simple-todo-v4

**path**: /Users/jjones/Documents/dev/projects/simple-todo-v4
**last commit**: 2025-03-08 (415 days ago)
**commits**: 184
**stack**: Backend: Python/Flask, SQLAlchemy, Flask-Login, SQLite; Frontend: Svelte 5 (Vite, no SvelteKit), Vitest, Playwright
**status**: paused

## Goal (1 sentence)
A full-stack task management app with a real Flask REST API backend and a Svelte 5 SPA frontend, supporting multi-user teams, task assignment, and deadlines.

## What exists
- Flask backend: `models.py` (~6.9 KB) with User, Team, Task models; `views.py` (~12.9 KB) with REST endpoints for users, teams, tasks, assignments, deadlines; Flask-Login session auth; SQLAlchemy migrations
- Svelte 5 frontend: `App.svelte` with routing logic; components for Login, Dashboard, UserForm, TeamForm, TaskForm, TaskAssign, TaskDeadline, TaskStatus, UserTasks, TeamTasks, TeamUsers
- `authStore.js` managing client-side auth state
- `backend/tests/` and `frontend/tests/` with component and API tests

## Ending state
This is the most feature-complete repo in the arc by a large margin (184 commits). Real CRUD for users, teams, and tasks exists end-to-end. The Svelte frontend is a plain Vite SPA (no SvelteKit routing), talking to Flask via fetch. The split was likely an exploration of decoupled frontend/backend over the integrated SvelteKit approach.

## Lesson signal
The jump to 184 commits (vs 13–24 in earlier versions) indicates this was used as an active learning vehicle for Flask + SQLAlchemy + multi-entity data modelling, not just a stack validator. The non-SvelteKit Svelte frontend suggests the auth complexity of SvelteKit's server routes was bypassed intentionally.

## Lineage hints
Successor to simple-todo-v3 (SvelteKit + Lucia + Prisma). Abandons SvelteKit and Prisma entirely; introduces Flask backend and plain Svelte SPA. This is the "real app" attempt in the arc. simple-task-v5 reverts to SvelteKit after this experiment, suggesting the decoupled approach was abandoned.
