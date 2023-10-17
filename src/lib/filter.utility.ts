import { FilterQuery } from 'mongoose';
import { GetMessagesFiltersDto } from 'src/messages/dto/get-messages-filters.dto';
import { Message } from 'src/messages/schemas/message.schema';

export function filtersUtility(filters: GetMessagesFiltersDto): {
  filters: FilterQuery<Message>;
  projections: any;
  options: any;
} {
  const { skip, limit, sortDirection, sortField, ...rest } = filters;
  const filtersQuery: FilterQuery<Message> = rest;
  const projections = {};
  const options = { skip, limit, sort: {} };
  if (skip) {
    options.skip = skip;
  }
  if (limit) {
    options.limit = limit;
  }
  if (sortDirection && sortField) {
    options.sort = {
      [sortField]: sortDirection,
    };
  }
  return { filters: filtersQuery, projections, options };
}
