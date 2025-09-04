import { ApiProperty } from '@nestjs/swagger';

export class CreatePhoneDto {
  @ApiProperty()
  phone: string;

  @ApiProperty()
  idperson: number;
}
