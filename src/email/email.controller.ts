import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  @ApiBody({ type: CreateEmailDto })
  create(@Body() body: CreateEmailDto) {
    return this.emailService.create(body.email, body.idperson);
  }

  @Get()
  findAll() {
    return this.emailService.findAll();
  }

  @Get('person/:idperson')
  findByPerson(@Param('idperson') idperson: number) {
    return this.emailService.findByPerson(Number(idperson));
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.emailService.remove(Number(id));
  }
}
