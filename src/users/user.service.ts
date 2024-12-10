import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/userModel';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

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
  getAllUsers() {
    return this.userModel.find();
  }
  getUserById(id: String) {
    return this.userModel.findById(id);
  }
  updateUserDetails(id: string, updateuserdto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: id }, updateuserdto, { new: true });
  }
  deleteUserById(id: String) {
    return this.userModel.findByIdAndDelete({ _id: id });
  }
}
