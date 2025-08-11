import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column({ nullable: true })
  middlename: string;

  @Column()
  lastname: string;

  @Column()
  documentid: string;

  @Column()
  phone: string;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  createddate: Date;
}
