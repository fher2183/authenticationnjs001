import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() body: { street: string; zone: number; city: string; countryId: number; idperson: number }) {
    return this.addressService.create(body);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Get('person/:idperson')
  findByPerson(@Param('idperson') idperson: number) {
    return this.addressService.findByPerson(Number(idperson));
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.addressService.remove(Number(id));
  }
}
