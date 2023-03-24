import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/carService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carService: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }
  async create() {
    const { body } = this.req;
    const newCar = await this.carService.create(body);
    return this.res.status(201).json(newCar);
  }

  async getAll() {
    const findCar = await this.carService.get();
    return this.res.status(200).json(findCar);    
  }

  async getId() {
    try {
      const { id } = this.req.params;
      const findCar = await this.carService.getId(id);

      if (!findCar) {
        return this.res.status(404).json({ message: 'Car not found' });
      }

      return this.res.status(200).json(findCar);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  async updateId() {
    try {
      const { id } = this.req.params;
      const findCar = await this.carService.updateId(id, this.req.body);

      if (!findCar) {
        return this.res.status(404).json({ message: 'Car not found' });
      }

      return this.res.status(200).json(findCar);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarController;
