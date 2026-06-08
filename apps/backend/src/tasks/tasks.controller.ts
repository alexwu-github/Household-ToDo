import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(): Promise<Task[]> {
    return this.tasksService.getAll();
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<string> {
    return await this.tasksService
      .create(createTaskDto)
      .then((task) => `Task created with ID: ${task.id}`);
  }
}
