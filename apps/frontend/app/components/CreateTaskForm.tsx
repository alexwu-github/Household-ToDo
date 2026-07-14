import { createTask } from '../lib/actions';
import SubmitButton from './SubmitButton';

export default function CreateTaskForm() {
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
          <option value="">Who?</option>
          <option value="1">Alex</option>
          <option value="2">Ellen</option>
        </select>
        <select name="status" required className="field">
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
