import { Schema, Model, models, model } from 'mongoose';

class AbstractODM<T> {
  private schema: Schema<T>;
  readonly model: Model<T>;

  constructor(schema: Schema<T>, collection: string) {
    this.schema = schema;
    this.model = models[collection] || model(collection, this.schema);
  }

  public async create(car: T): Promise<T> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getId(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async updateId(id: string, car: Partial<T>) {
    return this.model.findByIdAndUpdate(id, car, { new: true });
  }
}

export default AbstractODM;
