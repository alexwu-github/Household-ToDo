# Household-ToDo

Household-ToDo is a two-app TypeScript project with a NestJS backend and a Next.js frontend.

- the backend exposes a single `GET /` endpoint that returns `Hello World!`
- the frontend renders the default Next.js starter page

## Repository Layout

```text
.
├── apps/
│   ├── backend/   # NestJS API
│   └── frontend/  # Next.js web app
├── package.json   # minimal root package metadata
└── README.md
```

## Tech Stack

- Backend: NestJS 11, TypeScript, Jest, ESLint
- Frontend: Next.js 16, React 19, TypeScript, ESLint
- Runtime: Node.js

## Prerequisites

- Node.js 20+
- npm 10+

## Install Dependencies

Dependencies are managed per app. Install them inside each project directory.

```bash
cd apps/backend
npm install

cd ../frontend
npm install
```

## Run Locally

The backend default to port `3001`. Frontend uses `3000`.

### Start the backend

```bash
cd apps/backend
npm run start:dev
```

Backend endpoints:

- `GET http://localhost:3001/` -> `Hello World!`

### Start the frontend

```bash
cd apps/frontend
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

### Backend

Run these from `apps/backend`:

```bash
npm run start
npm run start:dev
npm run start:prod
npm run build
npm run lint
npm run test
npm run test:e2e
npm run test:cov
```

### Frontend

Run these from `apps/frontend`:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Current Status

This repository has the project structure in place, but the actual household to-do features have not been implemented yet. The next development steps will likely be:

- define the task data model and API routes in the backend
- replace the starter frontend page with a real task interface
- connect the frontend to the backend API

## Notes

- The root `package.json` currently does not orchestrate the two apps with shared scripts or workspaces.
- The app-specific README files in `apps/backend` and `apps/frontend` still contain framework starter documentation.
