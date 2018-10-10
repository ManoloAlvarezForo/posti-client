import React from 'react';
import { Route } from 'react-router-dom'
import Main from './containers/Main/Main'

const CommonnRoute = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => (
            <Main content={<Component {...props} />}/>
        )} />
    )
}

export default CommonnRoute;