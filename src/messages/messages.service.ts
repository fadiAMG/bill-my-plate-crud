import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { Message } from './schemas/message.schema';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly messageRepository: MessagesRepository) {}

  async getMessages(): Promise<Message[]> {
    return this.messageRepository.find({});
  }

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    const { type, merchantId, name, umti, timestamp } = createMessageDto;

    return this.messageRepository.create({
      type,
      merchantId,
      name,
      umti,
      timestamp,
    });
  }
}
