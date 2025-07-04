import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Teacher extends Document {
    @Prop({ required: true })
    teacherId: string;
    
    @Prop({ required: true })
    name: string;

    @Prop()
    personality: string;

    @Prop()
    prompt: string;

    @Prop()
    imagePath: string;

    @Prop({ type: [String] })
    specialties: string[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);