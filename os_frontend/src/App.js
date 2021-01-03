import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'

import UserContainer from './containers/userContainer.js'
import GuestContainer from './containers/guestContainer.js'

class App extends React.Component {
  state = {logged: false}

  reload = (accountStatus) =>{
        this.setState({logged: accountStatus})
    }

    isLogged = () => localStorage.getItem('uid') ? <UserContainer reload={this.reload}/> : <GuestContainer reload={this.reload}/>

    render(){  
        return(<Router>{this.isLogged()}</Router>);
    }
}

export default App;
