import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
}
  from 'typeorm'
@Entity('product')
export class Product {

  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar', {nullable: true, default: ''})
  title: string

  @Column('int', {nullable: true, default: 0})
  price: number

  @Column('varchar', {nullable: true, default: ''})
  description: string

  @Column('int', { default: 1 })
  status: number
}