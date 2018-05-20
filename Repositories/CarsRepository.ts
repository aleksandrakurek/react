import { Car } from '../Models/CarModel';
import { CarClass } from '../Models/EnumTypes/CarTypes';

type CarsResponse = {
    cars: Array<CarRs>;
}

type CarRs = {
    carClass: CarClass;
    name: string;
    price: number;
    available: boolean;
    id: number;
}

class CarsRepository {
    public cars: Array<Car>;

    constructor() {
        this.cars = new Array<Car>();
    }

    public async getCars(): Promise<Array<Car>> {
        this.cars = new Array<Car>();
        const response = await this.pullCars();
        response.cars.forEach((car) => {
            this.cars.push(new Car(car.id, car.name, car.carClass, car.price, car.available));
        });
        return this.cars;
    }

    private async pullCars(): Promise<CarsResponse> {
        return fetch('http://localhost:5000/response.json').then((response) => {
            return response.json()
        });
    }

    public findCarById(carId: number): Car {
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id == carId) {
                return this.cars[i];
            }
        }
        return undefined;
    }
}

export default new CarsRepository();