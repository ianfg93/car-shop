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
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, {
      versionKey: false,
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async createCar(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getCar(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getCarId(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  public async updateCarId(id: string, car: Partial<ICar>) {
    return this.model.findByIdAndUpdate(id, car, { new: true });
  }
}

export default CarModel;