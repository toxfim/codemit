# <img src="./docs/images/logo.jpg" style="border-radius: 3px" width=20 /> Codemit

> Codemit is a modular full-stack application built with a structured monorepo architecture.

---

<img src="./docs/images/background.jpg" style="object-fit: cover" height="100px" width="100%"/>

## Project Structure

```

├── apps/
│   ├── api/
│   └── bot/
│
├── packages/
│   ├── db/
│   ├── shared/
│   └── configs/
│
├── docs/
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

---

## Applications

- _api_ — Main HTTP backend service
- _bot_ — Telegram or event-driven service

---

## Packages

- _@codemit/db_ — Database layer (Drizzle + PostgreSQL)
- _@codemit/shared_ — Shared utilities and helpers
- _@codemit/configs_ — Base TypeScript and ESLint configurations

---

## Tech Stack

- Node.js 20+
- TypeScript
- Turborepo
- PNPM
- Drizzle ORM
- PostgreSQL

---

## Installation

pnpm install

---

## Development

Run all apps:

pnpm dev

Run specific app:

pnpm --filter api dev  
pnpm --filter bot dev

---

## Build

pnpm build

---

## Lint & Type Check

pnpm lint  
pnpm typecheck

---

## Environment Variables

Each application manages its own `.env` file.

Example (`apps/api/.env`):

DATABASE_URL=postgresql://user:password@localhost:5432/codemit

The database package does not read environment variables directly.  
Configuration must be passed from the consuming application.

---

## Documentation

Architecture details are available in:

docs/<u>architecture.md</u>
