import { Schema, Model, models, model } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: String },
      buyValue: { type: String, required: true },
      doorsQty: { type: String, required: true },
      seatsQty: { type: String, required: true },
    }, {
      versionKey: false,
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async createCar(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }
}

export default CarModel;