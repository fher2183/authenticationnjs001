import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @ManyToOne(() => Person, person => person.phones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idperson' })
  person: Person;

  @Column()
  idperson: number;

  @Column({ default: false })
  isprimary: boolean;
}
