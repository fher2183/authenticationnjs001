import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Email } from '../email/email.entity';
import { Phone } from '../phone/phone.entity';
import { Address } from '../address/address.entity';


@Entity()
export class Person {
  @PrimaryGeneratedColumn({ name: 'idperson' })
  idperson: number;

  @Column()
  firstname: string;

  @Column({ nullable: true })
  middlename: string;

  @Column()
  lastname: string;

  @Column()
  documentid: string;


  @OneToMany(() => Email, email => email.person)
  emails: Email[];

  @OneToMany(() => Phone, phone => phone.person)
  phones: Phone[];

  @OneToMany(() => Address, address => address.person)
  addresses: Address[];

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  createddate: Date;
}
