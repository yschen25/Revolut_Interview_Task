import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/home';
import CurrencyTab from "../components/currencyTab";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/currency_tab" exact component={CurrencyTab} />
  </Switch>
);

export default Routes;
