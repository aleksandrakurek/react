import * as React from "react";
import CarsRepository from "../Repositories/CarsRepository"
import Offer from "./Offer"
import { Car } from '../Models/CarModel';


type Props = {
    match: any;
    history:any;
}

type State= {
    error:string;

}

export default class CarsOffers extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state= { error: undefined }
    }

    private book(car: Car):void {
        this.setState({ error: car.book()? undefined : "Juz jest zarezerwowany"})

    }
    public render() {
        return (
            <div> Oferty:
            {this.state.error && <p>{this.state.error}</p>}
            {CarsRepository.cars.map((car,index) => {
                   return <Offer 
                        key={index} 
                        car={car} 
                        history={this.props.history}
                        action={this.book.bind(this, car)}
                         />
               })  }
            </div>
        );
    }
}
