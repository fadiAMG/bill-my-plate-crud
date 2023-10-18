import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { EntityRepository } from '../database/entity.repository';

@Injectable()
export class MessagesRepository extends EntityRepository<MessageDocument> {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
  ) {
    super(messageModel);
  }
}

// async find(messageFiltersDto: GetMessagesFiltersDto): Promise<Message[]> {
//   // TODO: projections to be implemented later
//   const { filters, projections, options } = filtersUtility(messageFiltersDto);
//   return this.messageModel.find(filters, projections, options);
// }

// async delete(deleteFiltersDto: DeleteMessageFilterDto): Promise<number> {
//   return (await this.messageModel.deleteMany(deleteFiltersDto)).deletedCount;
// }

// async create(message: Message): Promise<Message> {
//   return this.messageModel.create(message);
// }
