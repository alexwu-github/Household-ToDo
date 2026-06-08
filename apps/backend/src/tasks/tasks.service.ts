import { Inject, Injectable } from '@nestjs/common';
import { TASK_REPOSITORY } from '../constants';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @Inject(TASK_REPOSITORY) private taskRepository: Repository<Task>,
  ) {}
  getAll(): Promise<Task[]> {
    return this.taskRepository.query('SELECT * FROM task');
  }
  async create(dto: CreateTaskDto): Promise<Task> {
    try {
      const task = this.taskRepository.create({
        description: dto.description,
        author: { id: dto.authorId },
      });
      return await this.taskRepository.save(task);
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  }
}
