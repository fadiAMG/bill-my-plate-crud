import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;
@Schema()
export class Message {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  umti: string;

  @Prop()
  merchantId: string;

  @Prop([Date])
  timestamp: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
