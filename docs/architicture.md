# Architecture

Codemit follows a modular monorepo architecture with strict separation of concerns.

---

## Design Goals

- Clear boundaries between applications and packages
- Explicit dependency flow
- No shared mutable global state
- Environment isolation per application
- Strong typing across all layers

---

## High-Level Overview

apps → use → packages  
packages → must not depend on apps  

Applications orchestrate logic.  
Packages provide reusable building blocks.

---

## Layer Breakdown

### 1. Applications Layer (`apps/`)

Responsible for:
- Runtime execution
- Environment configuration
- Dependency wiring
- Transport layer (HTTP, Telegram, etc.)

Applications:
- Initialize database connections
- Load environment variables
- Compose services from packages

Applications do not contain low-level infrastructure logic.

---

### 2. Database Layer (`packages/db`)

Responsibilities:
- Database client creation
- Schema definitions
- Repository functions
- Query abstraction

Rules:
- No environment variable access
- No business logic
- Pure data access

Example:

import { createDb } from "@codemit/db";

const { db } = createDb(DATABASE_URL);

---

### 3. Shared Layer (`packages/shared`)

Contains:
- Utility functions
- Type definitions
- Pure helpers
- Reusable abstractions

Rules:
- No runtime side effects
- No application-specific logic
- No database connections

---

### 4. Configuration Layer (`packages/configs`)

Contains:
- Base tsconfig
- ESLint rules
- Shared build configuration

This ensures consistent tooling across the monorepo.

---

## Dependency Rules

Allowed:

apps → packages  
packages → packages  

Not allowed:

packages → apps  

Dependencies must always point inward toward reusable layers.

---

## Environment Strategy

Each application:
- Owns its `.env`
- Injects configuration into packages
- Controls runtime configuration

Packages remain stateless and environment-agnostic.

---

## Data Flow

Request/Event  
→ Application Layer  
→ Service Logic  
→ Repository (db package)  
→ Database  

Response flows back through the same path.

---

## Scalability Considerations

- Independent deployment per application
- Clear separation enables microservice extraction if needed
- Shared packages prevent duplication
- Turborepo enables efficient incremental builds

---

## Summary

Codemit prioritizes:

- Explicit boundaries
- Predictable dependency direction
- Clean separation of concerns
- Type safety
- Infrastructure isolation

The architecture is designed for maintainability, not complexity.