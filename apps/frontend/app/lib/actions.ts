'use server';
import type { Task } from '../lib/types';

import { revalidatePath } from 'next/cache';

const API_URL = process.env.API_URL ?? 'http://localhost:3001';

export async function createTask(formData: FormData) {
  const description = formData.get('description') as string;
  const authorId = Number(formData.get('authorId'));
  const task_status = Number(formData.get('task_status'));

  const res = await fetch(`${API_URL}/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description, authorId, task_status }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error('createTask failed:', res.status, body);
    throw new Error('Failed to create task');
  }

  revalidatePath('/');
}

export async function deleteTask(task: Task) {
  const res = await fetch(`${API_URL}/task/${task.id}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('Failed to delete task');

  revalidatePath('/');
}
