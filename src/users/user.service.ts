import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModule } from './user.module';
import { Model } from 'mongoose';

@Injectable({})
export class UserService {
  constructor(
    @InjectModel(UserModule.name) private userModel: Model<UserModule>,
  ) {
    console.log('UserService constructor');
  }
  createUser(createUserDto) {}
}
