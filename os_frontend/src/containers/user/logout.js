import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Logout extends React.Component{
    state = {redirect: null}
    
    componentDidMount(){
        localStorage.clear()
        this.setState({redirect: '/products'})
    }

    userLogout = () =>{
        if (this.state.redirect) return (<Redirect to={this.state.redirect}/>)
    }
    render(){
        return (<> 
            {this.userLogout()}
        </>)
    }

}