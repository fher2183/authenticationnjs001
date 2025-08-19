import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { Person } from '../person/person.entity';
import { Country } from '../country/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address, Person, Country])],
  providers: [AddressService],
  controllers: [AddressController],
  exports: [AddressService],
})
export class AddressModule {}
