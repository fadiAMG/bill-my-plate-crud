import { GetMessagesFiltersDto } from 'src/messages/dto/get-messages-filters.dto';

export const messageFiltersStub = (): GetMessagesFiltersDto => {
  return {
    _id: '1215662151651165',
    skip: 1,
    limit: 2,
    sortDirection: 'asc',
    sortField: 'name',
    name: 'name',
    type: 'type',
    umti: 'umti',
    merchantId: 'merchantId',
    endDate: '2021-01-01',
    startDate: '2021-01-01',
    sortOrder: 'fieldName',
  };
};
