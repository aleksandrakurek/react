import * as React from "react";
import CarsRepository from "../Repositories/CarsRepository";
import Offer from './Offer';
import { Car } from "../Models/CarModel";
import PageService from '../Services/PageService';

type Props = {
    match: any;
    history: any;
}

type State = {
    error: string;
    render: boolean;
}

export default class CarsOffers extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { error: undefined, render: false }
    }
    
    private book(car: Car): void {
        this.setState({ error: car.book() ? undefined : "Już jest zarezerwowany" });
    }

    public scroll(): void {
        PageService.scrollTo(this);
    }

    public componentDidMount(): void {
        CarsRepository.getCars().then((response) => {
            this.setState({ render: true });
        });
    }
    
    public render() {
        return (
            <div>Oferty:
                <button type="button" onClick={this.scroll.bind(this)}>W dół</button>
                {this.state.error && <p>{this.state.error}</p>}
                {this.state.render && CarsRepository.cars.map((car, index) => {
                    return <Offer
                        key={index}
                        car={car}
                        history={this.props.history}
                        action={this.book.bind(this, car)} />
                })}
            </div>
        );
    }
}
