import type { Task } from '../lib/types';
import React from 'react';
import DeleteTaskButton from './DeleteTaskButton';

export default function TaskItem({ task }: { task: Task }) {
  const date = new Date(task.createdAt).toLocaleDateString('sv-SE');

  return (
    <li className="task-row">
      <span className="flex-1 text-sm text-chalk">{task.description}</span>
      <span className="task-date">{date}</span>
      <DeleteTaskButton task={task} />
    </li>
  );
}
