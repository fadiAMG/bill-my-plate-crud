import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Message, MessageDocument } from './schemas/message.schema';
import { GetMessagesFiltersDto } from './dto/get-messages-filters.dto';
import { filtersUtility } from '../lib/filter.utility';
import { DeleteMessageFilterDto } from './dto/delete-message-filter.dto';

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
  ) {}

  async find(messageFiltersDto: GetMessagesFiltersDto): Promise<Message[]> {
    // TODO: projections to be implemented later
    const { filters, projections, options } = filtersUtility(messageFiltersDto);
    return this.messageModel.find(filters, projections, options);
  }

  async delete(deleteFiltersDto: DeleteMessageFilterDto): Promise<number> {
    console.log('deleteFiltersDto', deleteFiltersDto);
    return (await this.messageModel.deleteMany(deleteFiltersDto)).deletedCount;
  }

  async create(message: Message): Promise<Message> {
    return this.messageModel.create(message);
  }
}
