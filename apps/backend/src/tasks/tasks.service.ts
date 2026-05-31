import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAll(): string[] {
    return ['Tasks1', 'Tasks2', 'Tasks3'];
  }
}
