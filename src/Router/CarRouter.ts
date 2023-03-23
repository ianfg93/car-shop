import { Router, Request, Response, NextFunction } from 'express';
import CarController from '../Controllers/carController';

const router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) =>
  new CarController(req, res, next).createCar());

router.get('/', (req: Request, res: Response, next: NextFunction) =>
  new CarController(req, res, next).getCar());  

router.get('/:id', (req: Request, res: Response, next: NextFunction) =>
  new CarController(req, res, next).getCarId());

export default router;