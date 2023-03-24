import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicles from './Vehicle';

class Motorcycles extends Vehicles {
  private category: string;
  private engineCapacity: number;

  constructor({ id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity }: IMotorcycle) {
    super({ id, model, color, year, status, buyValue });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
  returnDatas() {
    return {
      id: this.id,
      model: this.model,
      year: this.year,
      color: this.color,
      status: this.status,
      buyValue: this.buyValue,
      category: this.category,
      engineCapacity: this.engineCapacity,
    };
  }
}

export default Motorcycles;