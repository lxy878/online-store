import React from 'react'
import { Redirect } from 'react-router-dom'
import UserForm from '../../components/user/form'
import { connect } from 'react-redux'
import {createUser} from '../../actions/userActions'

function Register(props){
    const {login, createUser} = props

    const user = {
        email: '',
        name: '',
        password: ''
    }
    
    const redirect = () => {
        if (login){
            return <Redirect to={'/products'}/>
        }
    }

    const submitMethod = (payload) => createUser(payload)

    return(<>
        <UserForm 
            user={user} 
            submitMethod={submitMethod}
            formText={{
                header: 'Register a New User', 
                submit: 'Register'
            }}
        />
        {redirect()}
    </>)
    
}

const mapDispatchToProps = dispatch => {
    return {createUser: payload => dispatch(createUser(payload))}
}

const mapStateToProps = state =>{
    return {login: state.userReducer.login}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)