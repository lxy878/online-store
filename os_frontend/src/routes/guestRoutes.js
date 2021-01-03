import React from 'react'
import {Route} from "react-router-dom";

import Login from '../containers/login.js'
import Register from '../containers/register.js'
import ProductRoutes from './productRoutes.js'

export default function routes({reload}) {
    return (
        <>
            <ProductRoutes reload={reload}/>
            <Route path="/login"><Login/></Route>
            <Route path='/register'><Register/></Route>
        </>
    );
}