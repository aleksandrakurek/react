import { CarClass } from "./EnumTypes/CarTypes";

export class Car {
    public _id : number;
    private _carClass: CarClass;
    private _name: string;
    private _price: number;
    private _available: boolean;
  

    constructor(id:number, name: string, carClass: CarClass, price: number, available: boolean=true) {
        this._id = id;
        this._carClass = carClass;
        this._name = name;
        this._price = price;
        this._available = available;
    }

    public get id():number {
        return this._id;
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

    public book(): boolean {
       if(this.available) {
           this._available = false;
           return true;
       } else {
           return false;
       }
    }

   
}
