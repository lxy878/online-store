import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'

import UserContainer from './containers/user/container.js'
import GuestContainer from './containers/guest/container.js'

export default class App extends React.Component {
    state = {logged: false}

    reload = (accountStatus) => this.setState({logged: accountStatus})

    isLogged = () => localStorage.getItem('uid') ? <UserContainer reload={this.reload}/> : <GuestContainer reload={this.reload}/>

    render(){  
        return(<Router>{this.isLogged()}</Router>);
    }
}
