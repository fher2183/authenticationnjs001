import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
  street: string;

  @ApiProperty()
  zone: number;

  @ApiProperty()
  city: string;

  @ApiProperty()
  countryId: number;

  @ApiProperty()
  idperson: number;
}
