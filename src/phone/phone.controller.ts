import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post()
  create(@Body() body: { phone: string; idperson: number }) {
    return this.phoneService.create(body.phone, body.idperson);
  }

  @Get()
  findAll() {
    return this.phoneService.findAll();
  }

  @Get('person/:idperson')
  findByPerson(@Param('idperson') idperson: number) {
    return this.phoneService.findByPerson(Number(idperson));
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.phoneService.remove(Number(id));
  }
}
