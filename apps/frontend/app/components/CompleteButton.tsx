'use client';

import { useState } from 'react';
import { Task } from '../lib/types';
import { toggleComplete } from '../lib/actions';

export default function CompleteButton({ task }: { task: Task }) {
  const [completed, setCompleted] = useState(!!task.completedAt);

  const handleClick = () => {
    setCompleted(!completed);
    toggleComplete(task);
  };

  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={handleClick}
      className="task-checkbox"
      aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
    />
  );
}
