import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class TaskStatus {
  @PrimaryColumn({ type: 'int' })
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  status!: string;

  @OneToMany(() => Task, (task) => task.status)
  tasks!: Task[];
}
