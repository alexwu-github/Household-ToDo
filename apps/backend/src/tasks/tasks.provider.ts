import { DataSource } from 'typeorm';
import { TASK_REPOSITORY } from '../constants';
import { Task } from './entities/task.entity';

export const taskProvider = [
  {
    provide: TASK_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
    inject: ['DATA_SOURCE'],
  },
];
