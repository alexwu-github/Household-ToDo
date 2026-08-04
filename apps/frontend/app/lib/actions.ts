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

export async function updateTask(id: string, formData: FormData) {
  const description = formData.get('description') as string;
  const authorId = Number(formData.get('authorId'));
  const task_status = Number(formData.get('task_status'));

  const res = await fetch(`${API_URL}/task/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description, authorId, task_status }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error('updateTask failed:', res.status, body);
    throw new Error('Failed to update task');
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

export async function toggleComplete(task: Task) {
  const res = await fetch(`${API_URL}/task/${task.id}/complete`, {
    method: 'PATCH',
  });

  if (!res.ok) throw new Error('Failed to toggle task');

  revalidatePath('/');
}
