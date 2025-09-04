import { ApiProperty } from '@nestjs/swagger';

export class CreateEmailDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  idperson: number;
}
