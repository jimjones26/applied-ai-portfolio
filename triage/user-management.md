# user-management

**path**: /Users/jjones/Documents/dev/projects/user-management
**last commit**: 2025-03-18 (40 days ago)
**commits**: 50
**stack**: Java 17 / Spring Boot (backend: JPA, Spring Security, Redis, PostgreSQL, JWT), React / Redux Toolkit / MUI (frontend), Docker Compose, Postman collection
**status**: paused

## What exists
- Spring Boot backend with full layered structure: controller, service, repository, model, dto, mapper, exception, security, config
- Features implemented: JWT auth, session persistence via Redis, MFA support (model-level), user profile, current-user endpoint, temporary tokens, custom JWT validation middleware
- React frontend with Redux Toolkit, Formik forms, MUI components, i18n, axios API service layer, Redux DevTools
- Docker Compose wiring backend + frontend; Postman collection for API testing

## Goal (1 sentence)
A full-stack user management system demonstrating JWT authentication, session management, MFA scaffolding, and a React admin UI — likely a learning exercise in Spring Security + Redux Toolkit patterns.

## Ending state
50 commits of steady progress; the last commit added debugging logs and session management improvements, suggesting it was in active use before going quiet. MFA is modeled but not fully implemented at the service layer. No tests are present. The Postman collection and Docker Compose suggest it was run and tested manually.

## Lesson signal
The commit history shows iterative debugging of Redux store configuration (three commits just fixing DevTools imports) and JWT validation edge cases — consistent with learning these stacks rather than building toward a production feature.

## Lineage hints
Stands alone from the MCP cluster; no cross-references to other repos. The `com.uxfx` group ID matches the user's email domain (uxfx.io), placing this in a personal/portfolio context rather than a client project.
