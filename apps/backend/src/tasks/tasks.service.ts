import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TASK_REPOSITORY } from '../constants';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @Inject(TASK_REPOSITORY) private taskRepository: Repository<Task>,
  ) {}
  async getAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getTask(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    return task;
  }

  async create(dto: CreateTaskDto): Promise<Task> {
    try {
      const task = this.taskRepository.create({
        description: dto.description,
        author: { id: dto.authorId },
        status: { id: dto.task_status },
      });
      return await this.taskRepository.save(task);
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  }
}
