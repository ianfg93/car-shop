import ICar from '../Interfaces/ICar';
import Vehicles from './Vehicle';

class Car extends Vehicles {
  private doorsQty: number;
  private seatsQty: number;

  constructor({ id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty }: ICar) {
    super({ id, model, color, year, status, buyValue });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
  returnDatas() {
    return {
      id: this.id,
      model: this.model,
      year: this.year,
      color: this.color,
      status: this.status,
      buyValue: this.buyValue,
      doorsQty: this.doorsQty,
      seatsQty: this.seatsQty,
    };
  }
}

export default Car;