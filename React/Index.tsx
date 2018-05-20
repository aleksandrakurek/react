import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router,  Route, Switch, withRouter } from 'react-router-dom';

import Home from './Components/Home';
import E404 from './Components/404';
import Cars from './Components/Cars';
import CarsOffers from './Components/CarsOffers';
import Car from './Components/Car';
import Layout from './Components/Layout';
import Zadanie5 from './Components/Zadanie5';

ReactDOM.render(
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/cars' component={Cars} />
                <Route exact path='/cars/carsOffers' component={CarsOffers} />
                <Route exact path='/cars/:carId' component={Car} />
                <Route exact path='/zadanie5' component={Zadanie5} />
                <Route component={E404} />
            </Switch>
        </Layout>
    </Router>
    , document.getElementById("ReactTSAPP")
);