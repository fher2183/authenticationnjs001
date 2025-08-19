import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Phone } from './phone.entity';
import { Person } from '../person/person.entity';

@Injectable()
export class PhoneService {
  constructor(
    @InjectRepository(Phone)
    private readonly phoneRepository: Repository<Phone>,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async create(phone: string, idperson: number): Promise<Phone> {
    const person = await this.personRepository.findOneBy({ idperson });
    if (!person) throw new NotFoundException('Person not found');
    const newPhone = this.phoneRepository.create({ phone, idperson, person });
    return this.phoneRepository.save(newPhone);
  }

  findAll(): Promise<Phone[]> {
    return this.phoneRepository.find({ relations: ['person'] });
  }

  findByPerson(idperson: number): Promise<Phone[]> {
    return this.phoneRepository.find({ where: { idperson }, relations: ['person'] });
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.phoneRepository.delete(id);
    return result.affected !== 0;
  }
}
