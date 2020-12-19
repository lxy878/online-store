import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import User from './containers/user.js'

export default function routes() {
    return (
        <Router>
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/user">User</Link>
                </li>
            </ul>
            </nav>
            <Switch>
                <Route exact path="/" render={()=><h2>Home</h2>}/>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/about" render={()=> <h2>About</h2>}/>
            </Switch>
        </div>
        </Router>
    );
}