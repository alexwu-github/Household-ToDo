import TaskList from './components/TaskList';
import CreateTaskForm from './components/CreateTaskForm';
import { getTasks } from './lib/data';
import type { Task } from './lib/types';

export default async function Home() {
  const tasks: Task[] = await getTasks();

  return (
    <main className="page-container">
      <h1 className="page-title">Household To-Do</h1>

      <section className="page-section">
        <h2 className="section-label">New Task</h2>
        <CreateTaskForm />
      </section>

      <section>
        <h2 className="section-label">Tasks</h2>
        <TaskList tasks={tasks} />
      </section>
    </main>
  );
}
