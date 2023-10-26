import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './schemas/message.schema';
import { GetMessagesFiltersDto } from './dto/get-messages-filters.dto';
import { DeleteMessageFilterDto } from './dto/delete-message-filter.dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createMessage(
    @Body() createMessageDto: CreateMessageDto[],
  ): Promise<Message[]> {
    return this.messagesService.createMessage(createMessageDto);
  }

  @Get()
  async getAllMessages(
    @Query(ValidationPipe) messageFiltersDto: GetMessagesFiltersDto,
  ): Promise<CreateMessageDto[]> {
    try {
      const result = await this.messagesService.getMessages(messageFiltersDto);
      if (result.length === 0) {
        throw new NotFoundException('No messages found');
      }
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @Delete()
  async deleteMessages(
    @Query() deleteMessageFilterDto: DeleteMessageFilterDto,
  ): Promise<number> {
    try {
      const result = await this.messagesService.deleteMessages(
        deleteMessageFilterDto,
      );
      if (result === 0) {
        throw new NotFoundException('No messages found');
      }
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
