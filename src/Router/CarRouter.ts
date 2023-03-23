import { Router, Request, Response, NextFunction } from 'express';
import CarController from '../Controllers/carController';

const router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) =>
  new CarController(req, res, next).createCar());

export default router;