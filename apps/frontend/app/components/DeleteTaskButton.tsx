'use client';

import { Task } from '../lib/types';

export default function DeleteTaskButton({ task }: { task: Task }) {
  const handleDelete = () => alert('test');

  return (
    <div>
      <button type="button" onClick={handleDelete}>
        ❌
      </button>
    </div>
  );
}
