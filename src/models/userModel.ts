import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    unique: true,
  })
  userName: string;

  @Prop({
    required: true,
  })
  firstName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  age?: number;

  @Prop({ required: false })
  role?: string;
}
const UserSchema = SchemaFactory.createForClass(User);
export default UserSchema;
