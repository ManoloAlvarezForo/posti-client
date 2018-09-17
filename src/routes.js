import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Containers.
import HomePage from '../src/containers/Home/HomePage';
import Error404 from '../src/containers/Error404/Error404';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={Error404} />
        </Switch>
    )
}

export default Routes;