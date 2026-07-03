import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Controller('task')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(): Promise<Task[]> {
    return this.tasksService.getAll();
  }
  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTask(id);
  }
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<string> {
    return await this.tasksService
      .create(createTaskDto)
      .then((task) => `Task created with ID: ${task.id}`);
  }
}
