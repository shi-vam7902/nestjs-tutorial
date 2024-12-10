import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {
    console.log('UserController constructor');
  }
  @Post('/user')
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto:', createUserDto);
    return this.userService.createUser(createUserDto);
  }
  @Get('/user')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/user/:id')
  async getUserById(@Param('id') id: string) {
    console.log('id:', id);
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Invalid Id', 400);
    }
    const userData = await this.userService.getUserById(id);
    if (!userData) {
      throw new HttpException('User With This Id Not Found', 404);
    }
    return this.userService.getUserById(id);
  }

  @Patch('/user/:id')
  @UsePipes(new ValidationPipe())
  async updateUser(
    @Param('id') id: string,
    @Body() updateuserDto: UpdateUserDto,
  ) {
    console.log('id for Updating the data:', id);
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Invalid Id', 400);
    }
    const userData = await this.userService.getUserById(id);
    if (!userData) {
      throw new HttpException('User With This Id Not Found', 404);
    }
    console.log('updateuserDto:', updateuserDto);
    return this.userService.updateUserDetails(id, updateuserDto);
  }

  @Delete('/user/:id')
  @UsePipes(new ValidationPipe())
  async deleteUser(@Param('id') id: string) {
    console.log('id for Deleting the data:', id);
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Invalid Id', 400);
    }
    const deteleUser = await this.userService.getUserById(id);
    if (!deteleUser) {
      throw new HttpException('User With This Id Not Found', 404);
    }
    console.log('id:', id);
    console.log('deleted    User:', deteleUser);
    return this.userService.deleteUserById(id);
  }
}
