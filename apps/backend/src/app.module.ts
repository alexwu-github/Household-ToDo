import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CatsModule } from './cats/cats.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [TasksModule, CatsModule],
  controllers: [UserController],
})
export class AppModule {}
