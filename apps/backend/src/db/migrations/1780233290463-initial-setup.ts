import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSetup1780233290463 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "task_status" ("id" integer NOT NULL, "status" varchar(50) NOT NULL, CONSTRAINT "PK_task_status_id" PRIMARY KEY ("id"))',
    );

    await queryRunner.query(
      'CREATE TABLE "user" ("id" integer NOT NULL, "name" varchar(50) NOT NULL, CONSTRAINT "PK_user_id" PRIMARY KEY ("id"))',
    );

    await queryRunner.query(
      'CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "description" varchar(255) NOT NULL, "statusId" integer NOT NULL, "authorId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "completedAt" TIMESTAMP, "completedBy" integer, CONSTRAINT "PK_task_id" PRIMARY KEY ("id"))',
    );

    // Add foreign key constraints and indexes after creating tables
    await queryRunner.query(
      'ALTER TABLE "task" ADD CONSTRAINT "FK_task_status" FOREIGN KEY ("statusId") REFERENCES "task_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
    );

    await queryRunner.query(
      'ALTER TABLE "task" ADD CONSTRAINT "FK_task_author" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
    );

    await queryRunner.query(
      'ALTER TABLE "task" ADD CONSTRAINT "FK_task_completedBy" FOREIGN KEY ("completedBy") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "task" DROP CONSTRAINT "FK_task_author"',
    );
    await queryRunner.query(
      'ALTER TABLE "task" DROP CONSTRAINT "FK_task_status"',
    );
    await queryRunner.query('DROP TABLE "task"');
    await queryRunner.query('DROP TABLE "user"');
    await queryRunner.query('DROP TABLE "task_status"');
  }
}
