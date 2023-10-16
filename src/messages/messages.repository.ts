import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
  ) {}

  async find(userFilterQuery: FilterQuery<Message>): Promise<Message[]> {
    return this.messageModel.find(userFilterQuery);
  }

  async create(message: Message): Promise<Message> {
    const newMessage = new this.messageModel(message);
    return newMessage.save();
  }
}
