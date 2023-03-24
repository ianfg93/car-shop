import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarsModel from '../Models/CarModel';

class CarService {
  createCarDomain(car: ICar | null): ICar | null {
    if (car) {
      return new Car(car).returnDatas();
    }
    return null;
  }

  async create(car: ICar) {
    const cars = new CarsModel();
    const newCar = await cars.create(car);
    return this.createCarDomain(newCar);
  }

  async get() {
    const cars = await new CarsModel().getAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  async getId(id: string) { 
    const cars = await new CarsModel().getId(id);
    return this.createCarDomain(cars);
  }

  async updateId(id: string, car: Partial<ICar>) { 
    const cars = await new CarsModel().updateId(id, car);
    return this.createCarDomain(cars);
  }
}

export default CarService;