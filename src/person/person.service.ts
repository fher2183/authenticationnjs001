// ...existing code...
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  findOne(idperson: number): Promise<Person | null> {
    return this.personRepository.findOneBy({ idperson });
  }

  create(data: Partial<Person>): Promise<Person> {
    const person = this.personRepository.create(data);
    return this.personRepository.save(person);
  }

  async update(idperson: number, data: Partial<Person>): Promise<Person | null> {
    await this.personRepository.update(idperson, data);
    return this.findOne(idperson);
  }

  async remove(idperson: number): Promise<boolean> {
    const result = await this.personRepository.delete(idperson);
    return result.affected !== 0;
  }

  async searchByName(term: string): Promise<Person[]> {
    return this.personRepository.createQueryBuilder('person')
      .where('person.firstname LIKE :term', { term: `%${term}%` })
      .orWhere('person.middlename LIKE :term', { term: `%${term}%` })
      .orWhere('person.lastname LIKE :term', { term: `%${term}%` })
      .getMany();
  }
}
