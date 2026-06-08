import { DataSource } from 'typeorm';

export default new DataSource({
  // basic setup
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.js,.ts}'],
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_NAME ?? 'household_todo',

  // optional
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
});
