import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'The description of the task' })
  description!: string;

  @ApiProperty({ description: 'The ID of the author of the task' })
  authorId!: number;

  @ApiProperty({ description: 'The ID of the status of the task' })
  task_status!: number;
}
