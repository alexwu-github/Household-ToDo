import { createTask } from '../lib/actions';
import SubmitButton from './SubmitButton';
import getUser from '../lib/getUser';
import { User } from '../lib/types';

export default async function CreateTaskForm() {
  const users: User[] = await getUser();
  return (
    <form action={createTask} className="flex flex-col gap-3">
      <input
        name="description"
        placeholder="Describe the task..."
        required
        className="field"
      />
      <div className="flex gap-2">
        <select name="authorId" required className="field">
          <option value="">Author</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <select name="task_status" required className="field">
          <option value="">Status</option>
          <option value="1">To Do</option>
          <option value="2">In Progress</option>
          <option value="3">Done</option>
        </select>
      </div>
      <SubmitButton />
    </form>
  );
}
