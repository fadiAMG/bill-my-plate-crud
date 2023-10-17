import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  umti: string;
  @IsNotEmpty()
  merchantId: string;
  @IsNotEmpty()
  name: string;
  body: { rawMessage: string };
}
