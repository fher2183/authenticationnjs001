import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';

@ApiTags('country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @ApiBody({ type: CreateCountryDto })
  create(@Body() body: CreateCountryDto) {
    return this.countryService.create(body.name);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }
}
