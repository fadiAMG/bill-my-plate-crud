import { Type } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';

export class GetMessagesFiltersDto {
  @IsOptional()
  @Type(() => Number)
  skip: number;
  @IsOptional()
  @Type(() => Number)
  limit: number;
  @IsOptional()
  sortOrder: string;
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
  @IsDate()
  endDate: string;
  @IsOptional()
  @IsDate()
  startDate: string;
}
