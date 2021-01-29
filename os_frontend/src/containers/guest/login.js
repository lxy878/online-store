import React from 'react'
import { Redirect } from 'react-router-dom'

import {connect} from 'react-redux'
import UserForm from '../../components/user/form'
import {userLogin} from '../../actions/userActions'

function Login(props){
    const {login, userLogin} = props
    const user = {
        email: '',
        password: ''
    }
    
    const redirect = () => {
        if (login){
            return <Redirect to={'/products'}/>
        }
    }

    const submitMethod = (payload) => userLogin(payload)
    
    return(<>
        <UserForm 
            user={user} 
            submitMethod={submitMethod}
            path={props.match.path}
            formText={{
                header: 'Log In Your account', 
                submit: 'Log In'
            }}
        />
        {redirect()}
    </>)
    
}

const mapDispatchToProps = dispatch => {
    return {userLogin: payload => dispatch(userLogin(payload))}
}

const mapStateToProps = state =>{
    return {login: state.userReducer.login}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)