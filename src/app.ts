import express from 'express';
import CarRouter from './Router/CarRouter';
import MotorcyclesRouter from './Router/MotorcyclesRouter';

const app = express();

app.use(express.json());

app.use('/cars', CarRouter);
app.use('/motorcycles', MotorcyclesRouter);

export default app;
