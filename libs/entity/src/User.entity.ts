import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation
} from "typeorm";

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: false })
  name: string;

  @Column('text', { nullable: false })
  email: string;

  @Column('text', { nullable: false })
  password: string;

  @Column('text', {name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Role, role => role.users, )
  @JoinColumn({name: 'role_id'})
  role: Relation<Role>;
}

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: false })
  name: string;

  @Column('text', {name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => User, user => user.role)
  users: User[];
}