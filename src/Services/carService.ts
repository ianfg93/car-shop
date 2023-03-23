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
    const carr = new CarsModel();
    const newCar = await carr.createCar(car);
    return this.createCarDomain(newCar);
  }
}

export default CarService;