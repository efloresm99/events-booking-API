import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'varchar', length: 60, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  password: string;

  @CreateDateColumn()
  createdAt: string;
}
