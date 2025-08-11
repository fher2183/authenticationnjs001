import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  firstname: string;

  @IsOptional()
  @IsString()
  middlename?: string;

  @IsString()
  lastname: string;

  @IsString()
  documentid: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
