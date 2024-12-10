import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  userName: string;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  age?: number;
  role?: string;
}
