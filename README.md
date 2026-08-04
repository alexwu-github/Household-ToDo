# Household To-Do

A full-stack household task manager built with NestJS and Next.js.

## Repository Layout

```text
.
├── apps/
│   ├── backend/   # NestJS REST API (port 3001)
│   └── frontend/  # Next.js web app (port 3000)
├── docker-compose.yaml
└── README.md
```

## Features

- Create tasks with a description, author, and status
- Toggle tasks complete/incomplete with a timestamp
- Delete tasks
- Displays author name and created/completed dates

## Tech Stack

- **Backend:** NestJS, TypeORM, PostgreSQL, TypeScript
- **Frontend:** Next.js (App Router), React, Tailwind CSS v4, TypeScript
- **Infrastructure:** Docker Compose

## Run with Docker

```bash
docker compose up --build
```

App available at `http://localhost:3000`.

## Run Locally

Requires PostgreSQL running locally and a `DATABASE_URL` env var set in `apps/backend`.

```bash
# Backend
cd apps/backend
npm install
npm run start:dev

# Frontend (separate terminal)
cd apps/frontend
npm install
npm run dev
```

See `apps/backend/README.md` and `apps/frontend/README.md` for details.
