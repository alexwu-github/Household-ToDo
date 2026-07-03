import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedTaskStatus1781164848122 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "task_status" ("id", "status") VALUES
        (1, 'Open'),
        (2, 'In Progress'),
        (3, 'Completed')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "task_status" WHERE "id" IN (1, 2, 3)`,
    );
  }
}
