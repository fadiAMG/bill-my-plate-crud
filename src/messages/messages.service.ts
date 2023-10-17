import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { Message } from './schemas/message.schema';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetMessagesFiltersDto } from './dto/get-messages-filters.dto';
import { DeleteMessageFilterDto } from './dto/delete-message-filter.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly messageRepository: MessagesRepository) {}

  async getMessages(
    messageFiltersDto: GetMessagesFiltersDto,
  ): Promise<Message[]> {
    return this.messageRepository.find(messageFiltersDto);
  }

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageRepository.create(createMessageDto);
  }

  async deleteMessages(
    deleteFiltersDto: DeleteMessageFilterDto,
  ): Promise<number> {
    return this.messageRepository.delete(deleteFiltersDto);
  }
}
