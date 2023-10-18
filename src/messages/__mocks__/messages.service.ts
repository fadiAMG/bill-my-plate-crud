import { messageFiltersStub } from '../test/stubs/message-filters.stub';
import { messageStub } from '../test/stubs/message.stub';

export const MessagesService = jest.fn().mockReturnValue({
  createMessage: jest.fn().mockResolvedValue(messageStub()),
  getMessages: jest.fn().mockResolvedValue([messageFiltersStub()]),
  deleteMessages: jest.fn().mockResolvedValue(1),
});
