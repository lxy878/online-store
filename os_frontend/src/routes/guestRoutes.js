import React from 'react'
import {Route, Switch} from "react-router-dom";

import Login from '../containers/guest/login.js'
import Register from '../containers/guest/register.js'
import ProductRoutes from './productRoutes.js'

export default function routes({reload}) {
    return (<Switch>
        <Route exact path="/login" render={routerProps => <Login {...routerProps} />} />
        <Route exact path='/register' render={routerProps => <Register {...routerProps} />} />    
        <ProductRoutes reload={reload}/>
    </Switch>);
}