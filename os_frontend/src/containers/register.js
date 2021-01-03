import React from 'react'
import { Redirect } from 'react-router-dom'

const baseUrl = 'http://localhost:3000' //fix: redux

export default class Register extends React.Component{
    
    state = {
        user: {
            email: '',
            name: '',
            password: ''
        },
        redirect: null, // redirect to products
        uid: '',     // fix: redux
        errors: ''  //fix: remove
    }
    

    handleChange = e =>{
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: this.state.user})
        })
        .then(resp=> resp.json())
        .then(json => this.renderUser(json))
    }

    renderUser = (json) =>{
        if (json.uid){
            // fix: redux
            localStorage.setItem('uid', json.uid)
            document.querySelector('p[name=status]').innerText = 'logged'
            this.setState({redirect: '/products'})
        }
        else{
            this.setState({errors: json.errors})
            // fix: show errors from server
            document.querySelector('p[name=status]').innerText = 'log failed'
        }
    }

    redirect = () => {
        if (this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
    }

    render(){
        return(
            <div>
                <h3>Register</h3>
                {/* fix: to stateless */}
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' onChange={this.handleChange} value={this.state.user.email}/>
                    <input type='text' name='name' onChange={this.handleChange} value={this.state.user.name}/>
                    <input type='password' name='password' onChange={this.handleChange} value={this.state.user.password}/>
                    <input type='submit' />
                </form>
                    {this.redirect()}
                <p name='status'>Log Out</p>
            </div>
            
        )
    }
}
