import { Test } from '@nestjs/testing';
import { MessagesController } from '../messages.controller';
import { MessagesService } from '../messages.service';
import { Message } from '../schemas/message.schema';
import { messageStub } from './stubs/message.stub';
// import { MongooseModule } from '@nestjs/mongoose';
import { MessagesRepository } from '../messages.repository';
import { messageFiltersStub } from './stubs/message-filters.stub';

jest.mock('../messages.service');

describe('MessageController', () => {
  let messagesController: MessagesController;
  let messagesService: MessagesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [MessagesController],
      providers: [
        MessagesService,
        MessagesRepository,
        {
          provide: MessagesRepository,
          useValue: {},
        },
      ],
    }).compile();

    messagesController = moduleRef.get<MessagesController>(MessagesController);
    messagesService = moduleRef.get<MessagesService>(MessagesService);
    jest.clearAllMocks();
  });

  describe('getMessages', () => {
    describe('when messages are available', () => {
      let message: Message[];

      beforeEach(async () => {
        message = await messagesController.getAllMessages(messageFiltersStub());
      });

      test('then it should call messageService', () => {
        expect(messagesService.getMessages).toBeCalledWith(
          messageFiltersStub(),
        );
      });

      test('then it should return a messages with optional queries', () => {
        expect(message).toEqual([messageFiltersStub()]);
      });
    });
  });

  describe('createMessage', () => {
    describe('when message is created', () => {
      let message: Message;

      beforeEach(async () => {
        message = {
          type: messageStub().type,
          umti: messageStub().umti,
          merchantId: messageStub().merchantId,
          body: messageStub().body,
          name: messageStub().name,
        };
        message = await messagesController.createMessage(message);
      });

      test('then it should be called with body parameters', () => {
        expect(messagesService.createMessage).toBeCalledWith(messageStub());
      });

      test('then it should return a message', () => {
        expect(message).toEqual(messageStub());
      });
    });
  });

  describe('deleteMessages', () => {
    describe('when messages are deleted', () => {
      let message: number;

      beforeEach(async () => {
        message = await messagesController.deleteMessages(messageFiltersStub());
      });

      test('then it should get called ', () => {
        expect(messagesService.deleteMessages).toBeCalled();
      });

      test('then it should return a number', () => {
        expect(message).toEqual(1);
      });
    });
  });
});
