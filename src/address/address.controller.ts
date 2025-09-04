import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @ApiBody({ type: CreateAddressDto })
  create(@Body() body: CreateAddressDto) {
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
