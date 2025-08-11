import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { PersonService } from './person.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.personService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.personService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.personService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personService.remove(id);
  }
}
