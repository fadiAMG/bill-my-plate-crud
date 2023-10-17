import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './schemas/message.schema';
import { GetMessagesFiltersDto } from './dto/get-messages-filters.dto';
import { DeleteMessageFilterDto } from './dto/delete-message-filter.dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post()
  async createMessage(
    @Body() createMessageDto: CreateMessageDto,
  ): Promise<Message> {
    return this.messagesService.createMessage(createMessageDto);
  }

  @Get()
  async getAllMessages(
    @Query() messageFiltersDto: GetMessagesFiltersDto,
  ): Promise<CreateMessageDto[]> {
    return this.messagesService.getMessages(messageFiltersDto);
  }

  @Delete()
  async deleteMessages(
    @Query() deleteMessageFilterDto: DeleteMessageFilterDto,
  ): Promise<number> {
    return this.messagesService.deleteMessages(deleteMessageFilterDto);
  }
}
