import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from '../person/person.entity';
import { Country } from '../country/country.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  street: string;

  @Column('int')
  zone: number;

  @Column({ length: 150 })
  city: string;

  @ManyToOne(() => Country, { eager: true })
  @JoinColumn({ name: 'countryId' })
  country: Country;

  @Column()
  countryId: number;

  @ManyToOne(() => Person, person => person.addresses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idperson' })
  person: Person;

  @Column()
  idperson: number;
}
