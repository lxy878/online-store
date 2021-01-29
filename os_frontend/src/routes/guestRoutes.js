import React from 'react'
import {Route} from "react-router-dom";

import Login from '../containers/guest/login.js'
import Register from '../containers/guest/register.js'
import ProductRoutes from './productRoutes.js'

export default function routes({reload}) {
    return (<>
        <ProductRoutes reload={reload}/>
        <Route path="/login" render={routerProps => <Login {...routerProps} />} />
        <Route path='/register' render={routerProps => <Register {...routerProps} />} />    
    </>);
}