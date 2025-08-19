import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  create(name: string): Promise<Country> {
    const country = this.countryRepository.create({ name });
    return this.countryRepository.save(country);
  }

  findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }
}
