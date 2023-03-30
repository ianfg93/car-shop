import * as chai from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/carService';

const { expect } = chai;

const carModel: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carList: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const carCreate: Car = new Car({
  id: '64205b50b7407c21ebdd28bc',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

describe('Verifica car service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Cadastrar um carro', async function () {
    const carService = new CarService();

    sinon.stub(Model, 'create').resolves(carCreate);
    const result = await carService.create(carModel);
    expect(result).to.be.deep.equal(carCreate);
  });

  it('Listar carros', async function () {
    const carService = new CarService();

    sinon.stub(Model, 'find').resolves(carList);
    const result = await carService.get();
    const carListResult: Car[] = carList.map((car) => new Car(car));
    expect(result).to.be.deep.equal(carListResult);
  });
});
