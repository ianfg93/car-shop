import { Request, Response, NextFunction } from 'express';
import MotorcyclesService from '../Services/motorcyclesService';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motorcyclesService: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcyclesService = new MotorcyclesService();
  }
  async create() {
    const { body } = this.req;
    const newMotorcycles = await this.motorcyclesService.create(body);
    return this.res.status(201).json(newMotorcycles);
  }

  async getAll() {
    const findMotorcycles = await this.motorcyclesService.get();
    return this.res.status(200).json(findMotorcycles);    
  }

  async getId() {
    try {
      const { id } = this.req.params;
      const findMotorcycles = await this.motorcyclesService.getId(id);

      if (!findMotorcycles) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }

      return this.res.status(200).json(findMotorcycles);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  async updateId() {
    try {
      const { id } = this.req.params;
      const findMotorcycles = await this.motorcyclesService.updateId(id, this.req.body);

      if (!findMotorcycles) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }

      return this.res.status(200).json(findMotorcycles);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcyclesController;