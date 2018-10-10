import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes.
import CommonRoute from './CommonRoute'
// Containers.
import HomePage from './containers/Home/HomePage';
import Error404 from './containers/Error404/Error404';

const Routes = () => {
    return (
        <Switch>
            <CommonRoute exact path="/" component={HomePage}  />
            <Route component={Error404} />
        </Switch>
    )
}

export default Routes;