import { IsOptional } from 'class-validator';

export class DeleteMessageFilterDto {
  @IsOptional()
  _id: string;
  @IsOptional()
  type: string;
  @IsOptional()
  umti: string;
  @IsOptional()
  merchantId: string;
  @IsOptional()
  endDate: string;
  @IsOptional()
  startDate: string;
}
