import React from 'react'

export default class userUpdate extends React.Component{
    // Add: reload user info
    // Fix: clean up
    state = {
        user: {
            name: '',
            password: ''
        }
    }

    handleChange = e =>{
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        fetch('http://localhost:3000/users/update', {
            method: 'POST',
            headers: { 
                'Authorization': localStorage.getItem('uid'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: this.state.user})
        })
        .then(resp=> resp.json())
        .then(json => console.log(json))
    }

    render(){
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <p>User Name: <input onChange={this.handleChange} type='text' name='name' value={this.state.user.name} /></p>
                <p>Password: <input onChange={this.handleChange} type='password' name='password' value={this.state.user.password}/></p>
                <input type='submit' value='Edit'></input>
            </form>
            </>
        )
    }
}