import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TasksModule, CatsModule, UserModule],
})
export class AppModule {}
