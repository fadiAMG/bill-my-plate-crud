import { Model } from 'mongoose';
import { MessagesController } from '../messages.controller';
import { MessagesRepository } from '../messages.repository';
import { MessagesService } from '../messages.service';
import { MessageDocument } from '../schemas/message.schema';
import { GetMessagesFiltersDto } from '../dto/get-messages-filters.dto';

describe('MessageController', () => {
  let messagesController: MessagesController;
  let messagesService: MessagesService;
  let messageModel: Model<MessageDocument>;
  let getMessagesFiltersDto: GetMessagesFiltersDto;

  beforeEach(() => {
    messagesService = new MessagesService(new MessagesRepository(messageModel));
    messagesController = new MessagesController(messagesService);
  });

  describe('getAllMessages', () => {
    it('should return an array of messages', async () => {
      const result = [
        {
          _id: '1',
          type: 'Hello world',
          umti: '123',
          merchantId: '1215551',
          body: { rawMessage: 'Hello World' },
          name: 'newMessageName',
        },
      ];
      jest
        .spyOn(messagesService, 'getMessages')
        .mockImplementation(async () => result);

      expect(
        await messagesController.getAllMessages(getMessagesFiltersDto),
      ).toBe(result);
    });
  });

  describe('createMessage', () => {
    it('should return a message', async () => {
      const result = {
        type: 'Hello world',
        umti: '123',
        merchantId: '1215551',
        body: { rawMessage: 'Hello World' },
        name: 'newMessageName',
      };
      jest
        .spyOn(messagesService, 'createMessage')
        .mockImplementation(async () => result);

      expect(
        await messagesController.createMessage({
          type: 'Hello world',
          umti: '123',
          merchantId: '1215551',
          body: { rawMessage: 'Hello World' },
          name: 'newMessageName',
        }),
      ).toBe(result);
    });
  });

  describe('deleteMessages', () => {
    it('should return a number', async () => {
      const result = 1;
      jest
        .spyOn(messagesService, 'deleteMessages')
        .mockImplementation(async () => result);

      expect(
        await messagesController.deleteMessages({
          _id: '1',
          type: 'Hello world',
          umti: '123',
          merchantId: '1215551',
          endDate: '2021-01-01',
          startDate: '2021-01-01',
        }),
      ).toBe(result);
    });
  });
});
