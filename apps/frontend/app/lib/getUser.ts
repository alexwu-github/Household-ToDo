const API_URL = process.env.API_URL ?? 'http://localhost:3001';

export default async function getUser() {
  try {
    const res = await fetch(`${API_URL}/user`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch user');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return [];
  }
}
