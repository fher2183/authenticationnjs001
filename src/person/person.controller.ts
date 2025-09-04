// ...existing code...
// ...existing code...
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PersonService } from './person.service';
import { AuthGuard } from '@nestjs/passport';
import { CreatePersonDto } from './dto/create-person.dto';

@ApiTags('person')
@UseGuards(AuthGuard('jwt'))
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post('search')
  @ApiBody({ schema: { properties: { term: { type: 'string' } } } })
  searchByBody(@Body('term') term: string) {
    return this.personService.searchByName(term);
  }

  @Get('search/:term')
  search(@Param('term') term: string) {
    return this.personService.searchByName(term);
  }

  @Get()
  getAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.personService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreatePersonDto })
  create(@Body() body: CreatePersonDto) {
    return this.personService.create(body);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreatePersonDto })
  update(@Param('id') id: number, @Body() body: CreatePersonDto) {
    return this.personService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personService.remove(id);
  }
}
