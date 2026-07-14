import { Suspense } from 'react';
import TaskList from './components/TaskList';
import CreateTaskForm from './components/CreateTaskForm';
import Loading from './loading';
import getUser from './lib/getUser';

export default function Home() {
  return (
    <main className="page-container">
      <h1 className="page-title">Household To-Do</h1>

      <section className="page-section">
        <h2 className="section-label">New Task</h2>
        <CreateTaskForm />
      </section>

      <section>
        <h2 className="section-label">Tasks</h2>
        <Suspense fallback={<Loading />}>
          <TaskList />
        </Suspense>
      </section>
    </main>
  );
}
