import * as React from "react";
import CarsRepository from '../Repositories/CarsRepository';
import * as Dictionary from '../Services/Dictionary';


type Props = {
    match: any;
}

export default class Car extends React.Component<Props> {
    public render(): JSX.Element {
        const car = CarsRepository.findCarById(this.props.match.params.carId);
        return (
            <div>
                {car && <div>
                    {car.name} &nbsp;
                    klasa: {car.carClass} &nbsp;
                    cena: {car.price} &nbsp;
                    {Dictionary.Availability.get(car.available)}
                </div>}
                {!car && <p>Nie znaleziono samochodu</p>}
                Samochód o id {this.props.match.params.carId}
            </div>
        );
    }
}
