import { createTask } from '../lib/actions';
import SubmitButton from './SubmitButton';

export default function CreateTaskForm() {
  return (
    <form action={createTask} className="flex flex-col gap-3">
      <input
        name="description"
        placeholder="Vad behöver göras?"
        required
        className="field"
      />
      <div className="flex gap-2">
        <input
          name="authorId"
          type="number"
          placeholder="Vem gör det?"
          required
          min={1}
          className="field"
        />
        <input
          name="task_status"
          type="number"
          placeholder="Status"
          required
          min={1}
          className="field"
        />
      </div>
      <SubmitButton />
    </form>
  );
}
