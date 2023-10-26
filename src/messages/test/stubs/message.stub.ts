import { Message } from 'src/messages/schemas/message.schema';

export const messageStub = (): Message[] => {
  return [
    {
      type: 'Hello world',
      umti: '123',
      merchantId: '1215551',
      body: { rawMessage: 'Hello World' },
      name: 'newMessageName',
    },
  ];
};
