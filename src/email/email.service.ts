import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Email } from './email.entity';
import { Person } from '../person/person.entity';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async create(email: string, idperson: number): Promise<Email> {
    const person = await this.personRepository.findOneBy({ idperson });
    if (!person) throw new NotFoundException('Person not found');
    const newEmail = this.emailRepository.create({ email, idperson, person });
    return this.emailRepository.save(newEmail);
  }

  findAll(): Promise<Email[]> {
    return this.emailRepository.find({ relations: ['person'] });
  }

  findByPerson(idperson: number): Promise<Email[]> {
    return this.emailRepository.find({ where: { idperson }, relations: ['person'] });
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.emailRepository.delete(id);
    return result.affected !== 0;
  }
}
