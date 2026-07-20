import { DataSource } from 'typeorm';
import { USER_REPOSITORY } from '../constants';
import { User } from './entities/user.entity';

export const userProvider = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
