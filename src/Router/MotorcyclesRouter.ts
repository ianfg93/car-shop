import { Router, Request, Response, NextFunction } from 'express';
import MotorcyclesController from '../Controllers/motorcyclesControlle';

const router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) =>
  new MotorcyclesController(req, res, next).create());

router.get('/', (req: Request, res: Response, next: NextFunction) =>
  new MotorcyclesController(req, res, next).getAll());  

router.get('/:id', (req: Request, res: Response, next: NextFunction) =>
  new MotorcyclesController(req, res, next).getId());

router.put('/:id', (req: Request, res: Response, next: NextFunction) =>
  new MotorcyclesController(req, res, next).updateId()); 

export default router;