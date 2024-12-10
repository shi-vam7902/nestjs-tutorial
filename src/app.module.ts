import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@glasier.vuzpm.mongodb.net/nest-tutorial',
    ),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule constructor');
  }
}
