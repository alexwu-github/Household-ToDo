import type { Task } from '../lib/types';
import DeleteTaskButton from './DeleteTaskButton';
import CompleteButton from './CompleteButton';

export default function TaskItem({ task }: { task: Task }) {
  const createdDate = new Date(task.createdAt).toLocaleDateString('sv-SE');
  const completedDate = task.completedAt
    ? new Date(task.completedAt).toLocaleDateString('sv-SE')
    : null;

  return (
    <li className="task-row">
      <CompleteButton key={String(task.completedAt)} task={task} />
      <div className="flex flex-col flex-1 min-w-0">
        <span className="task-description">{task.description}</span>
        <span className="task-author">{task.author.name}</span>
      </div>
      <div className="flex flex-col items-end shrink-0">
        <span className="task-date">Created:{createdDate}</span>
        <span className={`task-author ${completedDate ? '' : 'invisible'}`}>
          Done: {completedDate ?? ''}
        </span>
      </div>
      <DeleteTaskButton task={task} />
    </li>
  );
}
