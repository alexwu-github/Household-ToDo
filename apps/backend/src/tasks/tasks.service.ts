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
    return this.taskRepository.find({
      relations: { author: true, status: true },
    });
  }

  async getTask(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: { author: true, status: true },
    });
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

  async update(id: string, dto: Partial<CreateTaskDto>): Promise<Task> {
    const task = await this.getTask(id);
    if (dto.description !== undefined) {
      task.description = dto.description;
    }
    return await this.taskRepository.save(task);
  }

  async toggleComplete(id: string): Promise<Task> {
    const task = await this.getTask(id);
    task.completedAt = task.completedAt ? null : new Date();
    return await this.taskRepository.save(task);
  }

  async delete(id: string): Promise<void> {
    try {
      const result = await this.taskRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  }
}
