import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TaskStatus } from './taskStatus.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  description!: string;

  @ManyToOne(() => TaskStatus, (taskStatus) => taskStatus.tasks, {
    nullable: false,
  })
  @JoinColumn({ name: 'statusId', referencedColumnName: 'id' })
  status!: TaskStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  completedAt!: Date | null;

  @ManyToOne(() => User, (user) => user.tasks, {
    nullable: false,
  })
  @JoinColumn({ name: 'authorId', referencedColumnName: 'id' })
  author!: User;

  @ManyToOne(() => User, (user) => user.completedTasks, {
    nullable: true,
  })
  @JoinColumn({ name: 'completedById', referencedColumnName: 'id' })
  completedBy!: User | null;
}
