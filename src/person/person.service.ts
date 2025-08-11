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

  findOne(id: number): Promise<Person | null> {
    return this.personRepository.findOneBy({ id });
  }

  create(data: Partial<Person>): Promise<Person> {
    const person = this.personRepository.create(data);
    return this.personRepository.save(person);
  }

  async update(id: number, data: Partial<Person>): Promise<Person | null> {
    await this.personRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.personRepository.delete(id);
    return result.affected !== 0;
  }
}
