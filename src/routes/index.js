import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../containers/home/containers';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
    </Switch>
);

export default Routes;
