import React from 'react'
import { Redirect } from 'react-router-dom'
import UserForm from '../components/userForm'
import { connect } from 'react-redux'

class Register extends React.Component{
    
    state = {
        user: {
            email: '',
            name: '',
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
                <UserForm user={this.state.user} path={this.props.match.path} formText={ {header: 'Register a New User', submit: 'Register'}}/>
                {this.redirect()}
            </>
            
        )
    }
}
const mapStateToProps = state =>{
    return {login: state.userReducer.login}
}
export default connect(mapStateToProps)(Register)