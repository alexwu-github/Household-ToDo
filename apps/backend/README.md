# Household To-Do — Backend

NestJS REST API for the Household To-Do app.

## Endpoints

| Method | Path                    | Description              |
|--------|-------------------------|--------------------------|
| GET    | `/task`                 | Get all tasks            |
| GET    | `/task/:id`             | Get a single task        |
| POST   | `/task`                 | Create a task            |
| PATCH  | `/task/:id`             | Update a task            |
| PATCH  | `/task/:id/complete`    | Toggle task completion   |
| DELETE | `/task/:id`             | Delete a task            |
| GET    | `/user`                 | Get all users            |

## Stack

- NestJS
- TypeORM + PostgreSQL
- TypeScript

## Getting Started

```bash
npm install
npm run start:dev
```

API runs on [http://localhost:3001](http://localhost:3001).

## Environment

| Variable       | Description              | Example                                      |
|----------------|--------------------------|----------------------------------------------|
| `DATABASE_URL` | Full PostgreSQL URL       | `postgresql://user:pass@localhost:5432/db`   |

Set `DATABASE_URL=postgresql://user:pass@postgres:5432/db` when running inside Docker Compose.
