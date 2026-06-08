import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';

@Entity()
export class User {
  @PrimaryColumn({ type: 'int' })
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  name!: string;

  @OneToMany(() => Task, (task) => task.author)
  tasks!: Task[];

  @OneToMany(() => Task, (task) => task.completedBy)
  completedTasks!: Task[];
}
