'use client';

import { Task } from '../lib/types';
import { deleteTask } from '../lib/actions';

export default function DeleteTaskButton({ task }: { task: Task }) {
  const handleDelete = () => {
    if (!confirm('Are you sure?')) return;
    deleteTask(task);
  };

  return (
    <button type="button" className="btn-delete" onClick={handleDelete}>
      ❌
    </button>
  );
}
