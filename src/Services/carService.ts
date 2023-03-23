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

  async createCar(car: ICar) {
    const cars = new CarsModel();
    const newCar = await cars.createCar(car);
    return this.createCarDomain(newCar);
  }

  async getCar() {
    const cars = await new CarsModel().getCar();
    return cars.map((car) => this.createCarDomain(car));
  }

  async getCarId(id: string) { 
    const cars = await new CarsModel().getCarId(id);
    return this.createCarDomain(cars);
  }
}

export default CarService;