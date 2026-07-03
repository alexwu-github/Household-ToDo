import { Suspense } from 'react';
import TaskList from './components/TaskList';
import CreateTaskForm from './components/CreateTaskForm';
import Loading from './loading';

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Household To-Do
      </h1>

      <section className="mb-8">
        <h2 className="mb-3 text-sm font-medium text-zinc-500 uppercase tracking-wide">
          New Task
        </h2>
        <CreateTaskForm />
      </section>

      <section>
        <h2 className="mb-3 text-sm font-medium text-zinc-500 uppercase tracking-wide">
          Tasks
        </h2>
        <Suspense fallback={<Loading />}>
          <TaskList />
        </Suspense>
      </section>
    </main>
  );
}
