import dotenv from 'dotenv';

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

export const TASK_REPOSITORY = 'TASK_REPOSITORY';
export const USER_REPOSITORY = 'USER_REPOSITORY';
