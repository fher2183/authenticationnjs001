import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @ManyToOne(() => Person, person => person.emails, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idperson' })
  person: Person;

  @Column()
  idperson: number;

  @Column({ default: false })
  isprimary: boolean;
}
