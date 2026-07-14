export type User = {
  id: number
  name: string
}

export type TaskStatus = {
  id: number
  name: string
}

export type Task = {
  id: string
  description: string
  createdAt: string
  completedAt: string | null
  author: User
  status: TaskStatus
}