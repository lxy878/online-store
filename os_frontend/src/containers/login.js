import React from 'react'
import { Redirect } from 'react-router-dom'

import {connect} from 'react-redux'
import UserForm from '../components/userForm'

class Login extends React.Component{
    state = {
        user: {
            email: '',
            password: ''
        }
    }
    
    redirect = () => {
        if (this.props.login){
            return <Redirect to={'/products'}/>
        }
    }
    
    render(){
        return(
            <>
                <UserForm user={this.state.user} path={this.props.match.path} formText={ {header: 'Log In Your account', submit: 'Log In'}}/>
                {this.redirect()}
            </>
            
        )
    }
}

const mapStateToProps = state =>{
    return {login: state.userReducer.login}
}

export default connect(mapStateToProps)(Login)