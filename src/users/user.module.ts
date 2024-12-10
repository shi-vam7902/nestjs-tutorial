import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema, { User } from 'src/models/userModel';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [UserService],
})
export class UserModule {}
