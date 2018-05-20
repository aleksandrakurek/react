import { CarClass } from "./EnumTypes/CarTypes";
import { IObserver } from './IObserver';

export class Car {
    private _carClass: CarClass;
    private _name: string;
    private _price: number;
    private _available: boolean;
    public id: number;
    protected _observerList: Array<IObserver>;

    constructor(id: number, name: string, carClass: CarClass, price: number, available: boolean = true) {
        this._carClass = carClass;
        this._name = name;
        this._price = price;
        this._available = available;
        this.id = id;
        this._observerList = new Array<IObserver>();
    }

    public get carClass(): CarClass {
        return this._carClass;
    }

    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    public get available(): boolean {
        return this._available;
    }

    public finishReservation(): boolean {
        if(!this.available) {
            this._available = true;
            this.notify();
            return true;
        } else {
            return false;
        }
    }

    public book(): boolean {
        if(this.available) {
            this._available = false;
            return true;
        } else {
            return false;
        }
    }

    public attach(observer: IObserver): void {
        if (!this._observerList.includes(observer)) {
            this._observerList.push(observer);
        }
    }

    public detach(observer: IObserver): void {
        this._observerList.forEach((item, index) => {
            if (JSON.stringify(item) == JSON.stringify(observer)) {
                this._observerList.splice(index, 1);
            }
        })
    }

    protected notify(): void {
        this._observerList.forEach((observer) => {
            observer.update(this);
        })
    }
}