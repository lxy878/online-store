import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";

import Userinfo from '../containers/userinfo.js'
import ProductRoutes from './productRoutes.js'

import Logout from '../containers/logout.js'
import UserUpdate from '../containers/userUpdate.js'

export default function userRoutes({reload}) {
    return (
        <Router>
            <ProductRoutes reload={reload}/>
            <Route path='/userinfo'><Userinfo/></Route>
            <Route path='/logout'><Logout/></Route>
            <Route path='/user/edit'><UserUpdate/></Route>
        </Router>
    );
}