import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRoleEntity1684449714254 implements MigrationInterface {
    name = 'CreateRoleEntity1684449714254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "roleRoleId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("roleId" SERIAL NOT NULL, "roleName" character varying(20) NOT NULL, CONSTRAINT "PK_703705ba862c2bb45250962c9e1" PRIMARY KEY ("roleId"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ffe3092db843bd8f90fcfe97da7" FOREIGN KEY ("roleRoleId") REFERENCES "role"("roleId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ffe3092db843bd8f90fcfe97da7"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
