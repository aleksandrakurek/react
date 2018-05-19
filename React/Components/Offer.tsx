import * as React from "react";
import CarsRepository from "../Repositories/CarsRepository";
import { Car } from '../Models/CarModel';
import * as Dictionary from '../Services/Dictionary';

type Props = {
    car: Car;
    action: Function;
    history:any;
    
}

export default class Offer extends React.Component<Props> {
    private redirect(): void {
        this.props.history.push(`/cars/${this.props.car.id}`);
    }
    
    public render() { 
        return (
            <div>
               {this.props.car.name} &nbsp;
               klasa: {this.props.car.carClass} &nbsp;
               cena: {this.props.car.price} &nbsp;
               {Dictionary.Availability.get(this.props.car.available)}
               <button type="button"
               onClick={this.props.action.bind(this)}>
               Rezerwuj
               </button>
               <button type="button"
               onClick={this.redirect.bind(this)}>
               Szczegóły
               </button>
            </div>
        );
    }
}
