import IVehicle from '../Interfaces/IVehicle';

class Vehicles {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(motorcycles: IVehicle) {
    this.id = motorcycles.id;
    this.model = motorcycles.model;
    this.year = motorcycles.year;
    this.color = motorcycles.color;
    this.status = motorcycles.status || false;
    this.buyValue = motorcycles.buyValue;
  }
  returnDatas() {
    return {
      id: this.id,
      model: this.model,
      year: this.year,
      color: this.color,
      status: this.status,
      buyValue: this.buyValue,
    };
  }
}

export default Vehicles;