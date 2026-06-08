import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 50 })
  name!: string;

  @OneToMany(() => Task, (task) => task.author)
  tasks!: Task[];

  @OneToMany(() => Task, (task) => task.completedBy)
  completedTasks!: Task[];
}
