import { Document, FilterQuery, Model } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async find(
    entityFilterQuery: FilterQuery<T>,
    projections,
    options,
  ): Promise<T[] | any> {
    return this.entityModel.find(entityFilterQuery, projections, options);
  }

  async create(createEntityData: any[]): Promise<T[]> {
    const result = await this.entityModel.insertMany(createEntityData);
    const _IdsCreated = result.map((doc) => doc.id);
    return _IdsCreated;
  }

  async delete(entityFilterQuery: FilterQuery<T>): Promise<number> {
    return (await this.entityModel.deleteMany(entityFilterQuery)).deletedCount;
  }
}
