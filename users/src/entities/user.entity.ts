import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'varchar', length: 60, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  password: string;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
}
