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
  async createCar() {
    const { body } = this.req;
    const newCar = await this.carService.createCar(body);
    return this.res.status(201).json(newCar);
  }
}

export default CarController;
