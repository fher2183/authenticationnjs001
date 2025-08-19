import { Controller, Post, Get, Body } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() body: { name: string }) {
    return this.countryService.create(body.name);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }
}
