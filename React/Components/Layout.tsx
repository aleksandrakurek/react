import * as React from 'react';
import { NavLink } from 'react-router-dom';

type LayoutProps = {}
export default class Layout extends React.Component<LayoutProps> {
    public render(): JSX.Element {
        return <div>
            <Home />
            {this.props.children}
            </div>
    }
}

type HomeProps = {}
export class Home extends React.Component<HomeProps> {
    public render(): JSX.Element {
        return <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/cars">Wynajem</NavLink>
            </li>
            <li>
                <NavLink to="/cars/carOffers">Oferty</NavLink>
            </li>
        </ul>
    }
}