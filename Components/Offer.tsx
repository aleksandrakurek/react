import * as React from "react";
import CarsRepository from "../Repositories/CarsRepository";
import { Car } from '../Models/CarModel';
import * as Dictionary from '../Services/Dictionary';
import { IObserver } from '../Models/IObserver';

type Props = {
    car: Car;
    action: Function;
    history: any;
}

export default class Offer extends React.Component<Props> implements IObserver {
    private redirect(): void {
        this.props.history.push(`/cars/${this.props.car.id}`);
    }

    public update(car: any): void {
        alert(`Pojazd ${car.name} zmienił status na dostępny`);
    }

    private observe(): void {
        this.props.car.attach(this);
    }

    private finishReservation(): void {
        this.props.car.finishReservation();
        this.forceUpdate();
    }

    public render() {
        return (
            <div>
                {this.props.car.name}&nbsp;
                klasa: {this.props.car.carClass}&nbsp;
                cena: {this.props.car.price}&nbsp;
                {Dictionary.Availability.get(this.props.car.available)}
                <button type="button"
                    onClick={this.props.action.bind(this)}>
                    Rezerwuj</button>
                <button type="button"
                    onClick={this.redirect.bind(this)}>
                    Szczegóły</button>
                {!this.props.car.available && <button type="button"
                    onClick={this.finishReservation.bind(this)}>
                    Zakończ Rez.</button>}
                {!this.props.car.available && <button type="button"
                    onClick={this.observe.bind(this)}>
                    Obserwuj</button>}
            </div>
        );
    }
}
