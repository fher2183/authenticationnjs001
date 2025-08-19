import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { Person } from '../person/person.entity';
import { Country } from '../country/country.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  async create(data: { street: string; zone: number; city: string; countryId: number; idperson: number }): Promise<Address> {
    const person = await this.personRepository.findOneBy({ idperson: data.idperson });
    if (!person) throw new NotFoundException('Person not found');
    const country = await this.countryRepository.findOneBy({ id: data.countryId });
    if (!country) throw new NotFoundException('Country not found');
    const address = this.addressRepository.create({ ...data, person, country });
    return this.addressRepository.save(address);
  }

  findAll(): Promise<Address[]> {
    return this.addressRepository.find({ relations: ['person', 'country'] });
  }

  findByPerson(idperson: number): Promise<Address[]> {
    return this.addressRepository.find({ where: { idperson }, relations: ['person', 'country'] });
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.addressRepository.delete(id);
    return result.affected !== 0;
  }
}
