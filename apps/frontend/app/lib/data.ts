const API_URL = process.env.API_URL ?? 'http://localhost:3001';

export async function getTasks() {
  const res = await fetch(`${API_URL}/task`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
}
