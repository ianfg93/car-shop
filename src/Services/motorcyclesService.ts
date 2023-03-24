import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcyclesModel from '../Models/MotorcyclesModel';

class MotorcyclesService {
  createMotorcyclesDomain(motorcycle: IMotorcycle | null): IMotorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle).returnDatas();
    }
    return null;
  }

  async create(motorcycle: IMotorcycle) {
    const motorcycles = new MotorcyclesModel();
    const newMotorcycle = await motorcycles.create(motorcycle);
    return this.createMotorcyclesDomain(newMotorcycle);
  }

  async get() {
    const motorcycles = await new MotorcyclesModel().getAll();
    return motorcycles.map((motorcycle) => this.createMotorcyclesDomain(motorcycle));
  }

  async getId(id: string) { 
    const motorcycles = await new MotorcyclesModel().getId(id);
    return this.createMotorcyclesDomain(motorcycles);
  }

  async updateId(id: string, car: Partial<IMotorcycle>) { 
    const motorcycles = await new MotorcyclesModel().updateId(id, car);
    return this.createMotorcyclesDomain(motorcycles);
  }
}

export default MotorcyclesService;