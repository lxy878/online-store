import React from 'react'
import { Redirect } from 'react-router-dom'

export default class User extends React.Component{
    // separate register and log in
    constructor(){
        super()
        this.state = {
            email: '',
            name: '',
            password: '',
            redirect: null
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit1 = e => {
        e.preventDefault()
        console.log(this.state)
    }

    handleSubmit2 = e => {
        e.preventDefault()
        console.log(this.state)
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
                        <input type='email' name='email' onChange={this.handleChange} value={this.state.email}/>
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                        <input type='submit' />
                    </form>
                </div>
                <div>
                    <h3>Register</h3>
                    <form onSubmit={this.handleSubmit2}>
                        <input type='email' name='email' onChange={this.handleChange} value={this.state.email}/>
                        <input type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                        <input type='submit' />
                    </form>
                </div>
                {this.redirect()}
            </div>
        )
    }
}