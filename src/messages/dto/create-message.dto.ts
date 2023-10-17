export class CreateMessageDto {
  type: string;
  umti: string;
  merchantId: string;
  name: string;
  body: { rawMessage: string };
}
