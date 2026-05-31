import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksRepository {
  getData(): string {
    return 'Hello World!';
  }
}
