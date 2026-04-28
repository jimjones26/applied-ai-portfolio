# metis-theia

**path**: /Users/jjones/Documents/dev/projects/metis-theia
**last commit**: 2025-02-20 (431 days ago)
**commits**: 31
**stack**: Python, FastAPI, SQLAlchemy 2.0, PostgreSQL, Docker; SvelteKit 2, Svelte 5, Tailwind, TypeScript
**status**: abandoned

## Goal (1 sentence)
A full-stack app with a FastAPI/PostgreSQL backend and a SvelteKit frontend, ostensibly for tracking or cataloguing technologies.

## What exists
- Backend: FastAPI app with a single `Technology` model (id, name), one CRUD router (`POST /api/technologies/`), SQLAlchemy 2.0 ORM, Docker Compose for the DB
- Frontend: SvelteKit scaffold — only the default `+page.svelte` and layout exist; no UI was built
- Pytest + pyproject.toml setup for backend testing; tests directory present but minimal
- Docker Compose wires together a web service and Postgres; env var handling was iterated over several commits

## Ending state
Backend CRUD endpoint for creating technologies is functional and Docker-runnable. The frontend was scaffolded but never populated — only one route exists with the default sv template content. The project stopped before any real product surface was built.

## Lesson signal
Likely a learning exercise for FastAPI + SQLAlchemy 2.0 syntax (several commits fix ORM syntax and env var handling). The SvelteKit frontend may have been intended as a UI layer that was never started.

## Lineage hints
No cross-repo references found. The "technologies" domain doesn't appear in other repos in this batch.
