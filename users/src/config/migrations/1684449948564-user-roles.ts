import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRoles1684449948564 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO role(
            "roleId", "roleName")
            VALUES (DEFAULT, 'admin'),(DEFAULT, 'user'),(DEFAULT, 'client')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM role WHERE name IN ('admin', 'user', 'client');`,
    );
  }
}
