import { Controller, Get, Post, Body } from '@nestjs/common';
import { PersonService, Person } from './person.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getAll(): Person[] {
    return this.personService.findAll();
  }

  @Post()
  create(@Body() body: { name: string; age: number }): { ok: boolean } {
    return this.personService.create(body);
  }
}
