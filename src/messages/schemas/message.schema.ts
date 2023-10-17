import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;
@Schema({ timestamps: true })
export class Message {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  umti: string;

  @Prop()
  merchantId: string;

  @Prop({ type: Object })
  body: { rawMessage: string };
}

export const MessageSchema = SchemaFactory.createForClass(Message);
