import React from 'react'
import {Route} from "react-router-dom";

import Userinfo from '../containers/user/userinfo'
import ProductRoutes from './productRoutes'

import Logout from '../containers/logout.js'
import ProductApp from '../containers/productApp'
import OrderApp from '../containers/orderApp'

export default function userRoutes({reload}) {
    return (
        <>
            <ProductRoutes reload={reload}/>
            <Route path='/user/info'><Userinfo/></Route>
            <Route path='/user/logout'><Logout/></Route>
            <Route path='/user/products' render={routerProps => <ProductApp {...routerProps} reload={reload}/>}/>
            <Route path='/user/orders' render={routerProps => <OrderApp {...routerProps}/>}/>
        </>
    );
}