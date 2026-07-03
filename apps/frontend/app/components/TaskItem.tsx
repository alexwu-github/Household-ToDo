import type { Task } from '../lib/types';

export default function TaskItem({ task }: { task: Task }) {
  const date = new Date(task.createdAt).toLocaleDateString('sv-SE');

  return (
    <li className="task-row">
      <span className="text-sm text-chalk">{task.description}</span>
      <span className="task-date">{date}</span>
    </li>
  );
}
