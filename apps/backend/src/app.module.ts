import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { TaskStatus } from './tasks/entities/taskStatus.entity';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'household_todo',
      entities: [User, Task, TaskStatus],
      synchronize: false,
    }),
  ],
})
export class AppModule {}
