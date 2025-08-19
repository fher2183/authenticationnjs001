import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  create(@Body() body: { email: string; idperson: number }) {
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
