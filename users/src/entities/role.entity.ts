import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  roleId: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  roleName: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
