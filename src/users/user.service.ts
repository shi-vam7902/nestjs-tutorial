import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/userModel';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable({})
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
    console.log('UserService constructor');
  }
  createUser(createUdto: CreateUserDto) {
    const user = new this.userModel(createUdto);
    console.log('user That is Saved to DataBase:', user);
    return user.save();
  }
}
