# Household To-Do — Frontend

Next.js frontend for the Household To-Do app.

## Features

- **Create tasks** — add a task with a description, author, and status
- **Task list** — displays all tasks with author name and created date
- **Toggle complete** — checkbox marks a task done/undone, stores a completion timestamp
- **Delete tasks** — remove a task with a confirmation prompt
- **Stable task order** — toggling complete does not reorder the list

## Stack

- Next.js (App Router, server components + server actions)
- Tailwind CSS v4
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

App runs on [http://localhost:3000](http://localhost:3001). Requires the backend running on port 3001.

## Environment

| Variable  | Description      | Default                 |
| --------- | ---------------- | ----------------------- |
| `API_URL` | Backend base URL | `http://localhost:3001` |

Set `API_URL=http://backend:3001` when running inside Docker Compose.
