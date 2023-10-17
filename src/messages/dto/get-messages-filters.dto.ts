import { IsOptional } from 'class-validator';

export class GetMessagesFiltersDto {
  @IsOptional()
  skip: number;
  @IsOptional()
  limit: number;
  @IsOptional()
  sortDirection: string;
  @IsOptional()
  sortField: string;
  @IsOptional()
  name: string;
  @IsOptional()
  type: string;
  @IsOptional()
  umti: string;
  @IsOptional()
  merchantId: string;
  @IsOptional()
  _id: string;
  @IsOptional()
  endDate: string;
  @IsOptional()
  startDate: string;
}
