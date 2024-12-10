import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateUserDto {
  userName: string;
  firstName: string;
  email: string;
  password: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  age?: number;
  @IsOptional()
  role?: string;
}
