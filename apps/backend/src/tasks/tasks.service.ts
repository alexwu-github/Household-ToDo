import { Inject, Injectable } from '@nestjs/common';
import { TASK_REPOSITORY } from '../constants';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';

@Injectable()
export class TasksService {
  constructor(
    @Inject(TASK_REPOSITORY) private taskRepository: Repository<Task>,
  ) {}
  getAll(): Promise<Task[]> {
    return this.taskRepository.query('SELECT * FROM task');
  }
}
