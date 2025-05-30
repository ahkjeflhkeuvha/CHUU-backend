import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  score: number;

  @Prop({ unique: false })
  type: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
