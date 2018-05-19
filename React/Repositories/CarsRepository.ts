import { Car } from '../Models/CarModel';
import { CarClass } from '../Models/EnumTypes/CarTypes';


class CarsRepository {
    public cars: Array<Car>;

    constructor() {
        this.cars = new Array<Car>();
        this.cars.push(new Car(1, "Ford", CarClass.A, 34500));
        this.cars.push(new Car(2, "Peugeot", CarClass.Aplus, 34500));
        this.cars.push(new Car(3, "Alfa Romeo", CarClass.E, 34500));
        this.cars.push(new Car(4, "Fiat", CarClass.C, 34500));
    }

    public findCarById(carId:number):Car {
        for(let i=0; i<this.cars.length;i++) {
            if(this.cars[i].id==carId) {
                return this.cars[i];
            }
        }
        return undefined;
    
    }
}

export default new CarsRepository();