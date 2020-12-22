import React from 'react'
import { Redirect } from 'react-router-dom'

const baseUrl = 'http://localhost:3000'

export default class User extends React.Component{
    // separate register and log in
    constructor(){
        super()
        this.state = {
            user: {
                email: '',
                name: '',
                password: ''
            },
            redirect: null,
            uid: ''
        }
    }

    handleChange = e =>{
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit1 = e => {
        e.preventDefault()
        fetch(`${baseUrl}/login`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: this.state.user})
        })
        .then(resp=>resp.json())
        .then(json=>console.log(json))
        // condition: uid existed and not
        // if yes, set uid and redirect to user page
        // otherwise, errors and re-enter
    }

    handleSubmit2 = e => {
        e.preventDefault()
        fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: this.state.user})
        })
        .then(resp=> resp.json())
        .then(json => console.log(json))
        // condition: uid existed and not
        // if yes, set uid and redirect to user page
        // otherwise, show errors and re-enter
        this.setState({
            redirect: '/'
        })
    }

    redirect = () => {
        if (this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
    }

    render(){
        return(
            <div>
                <div>
                    <h3>Log In</h3>
                    <form onSubmit={this.handleSubmit1}>
                        <input type='email' name='email' onChange={this.handleChange} value={this.state.user.email}/>
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.user.password}/>
                        <input type='submit' />
                    </form>
                </div>
                <div>
                    <h3>Register</h3>
                    <form onSubmit={this.handleSubmit2}>
                        <input type='email' name='email' onChange={this.handleChange} value={this.state.user.email}/>
                        <input type='text' name='name' onChange={this.handleChange} value={this.state.user.name}/>
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.user.password}/>
                        <input type='submit' />
                    </form>
                </div>
                {/* {this.redirect()} */}
                <p name='status'>Log Out</p>
            </div>
        )
    }
}