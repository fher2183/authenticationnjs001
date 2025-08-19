import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './phone.entity';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import { Person } from '../person/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phone, Person])],
  providers: [PhoneService],
  controllers: [PhoneController],
  exports: [PhoneService],
})
export class PhoneModule {}
