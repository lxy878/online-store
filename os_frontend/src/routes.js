import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from './containers/login.js'
import Register from './containers/register.js'

export default function routes() {
    return (
        <Router>
        <div>
            <Switch>
                <Route exact path="/" render={()=><h2>Products</h2>}/>
                <Route path="/login"><Login /></Route>
                <Router path='/register'><Register /></Router>
            </Switch>
        </div>
        </Router>
    );
}