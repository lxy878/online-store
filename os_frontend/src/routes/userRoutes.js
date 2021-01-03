import React from 'react'
import {Route} from "react-router-dom";

import Userinfo from '../containers/userinfo.js'
import ProductRoutes from './productRoutes.js'

import Logout from '../containers/logout.js'
import UserUpdate from '../containers/userUpdate.js'
import ProductsContainer from '../containers/productsContainer.js'

export default function userRoutes({reload}) {
    return (
        <>
            <ProductRoutes reload={reload}/>
            <Route path='/userinfo'><Userinfo/></Route>
            <Route path='/logout'><Logout/></Route>
            <Route path='/user/edit'><UserUpdate/></Route>
            <Route path='/user/products' render={routerProps => <ProductsContainer {...routerProps} reload={reload}/>}/>
        </>
    );
}