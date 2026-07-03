import { getTasks } from '../lib/api'
import TaskItem from './TaskItem'
import type { Task } from '../lib/types'

export default async function TaskList() {
  const tasks: Task[] = await getTasks()

  if (tasks.length === 0) {
    return <p className="text-sm text-zinc-400">No tasks yet.</p>
  }

  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}
