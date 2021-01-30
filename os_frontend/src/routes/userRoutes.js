import React from 'react'
import {Route} from "react-router-dom";

import Userinfo from '../containers/user/info'
import ProductRoutes from './productRoutes'

import Logout from '../containers/user/logout.js'
import UserProductsController from '../containers/user/productsContainer'
import UserOrdersContainer from '../containers/user/ordersContrainer'

export default function userRoutes({reload}) {
    return (<>
        <ProductRoutes reload={reload}/>
        <Route path='/user/info'><Userinfo/></Route>
        <Route path='/user/logout'><Logout/></Route>
        <Route path='/user/products' render={routerProps => <UserProductsController {...routerProps} reload={reload}/>}/>
        <Route path='/user/orders' render={routerProps => <UserOrdersContainer {...routerProps}/>}/>
    </>);
}