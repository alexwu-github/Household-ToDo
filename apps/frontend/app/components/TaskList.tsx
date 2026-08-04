'use client';

import { useState } from 'react';
import TaskItem from './TaskItem';
import type { Task } from '../lib/types';

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const [prevTasks, setPrevTasks] = useState(tasks);
  const [order, setOrder] = useState<string[]>(() => tasks.map((t) => t.id));

  if (tasks !== prevTasks) {
    setPrevTasks(tasks);
    const incoming = tasks.map((t) => t.id);
    const kept = order.filter((id) => incoming.includes(id));
    const added = incoming.filter((id) => !order.includes(id));
    setOrder([...kept, ...added]);
  }

  const taskMap = new Map(tasks.map((t) => [t.id, t]));
  const ordered = order.map((id) => taskMap.get(id)).filter(Boolean) as Task[];

  if (ordered.length === 0) {
    return <p className="text-sm text-chalk-muted">No tasks yet.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {ordered.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
