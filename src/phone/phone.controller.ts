import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PhoneService } from './phone.service';
import { CreatePhoneDto } from './dto/create-phone.dto';

@ApiTags('phone')
@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post()
  @ApiBody({ type: CreatePhoneDto })
  create(@Body() body: CreatePhoneDto) {
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
