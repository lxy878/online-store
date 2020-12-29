import React from 'react'
import {Button} from 'react-bootstrap'

export default class userInfo extends React.Component {
    state ={
        user: {
            name: 'Nobody',
            email: 'noemail@nowhere.com',
            nOrders: 0,
            nProducts: 0
        }
    }
    
    componentDidMount(){
        this.fetchUserInfo()
    }

    fetchUserInfo(){
        const token = localStorage.getItem('uid')
        fetch(`http://localhost:3000/current_user`, {
            headers: {
                'Authorization': token
            }
        })
        .then(resp=> resp.json())
        // .then(json=> console.log(json))
        .then(json=> this.getUser(json))
    }
    
    getUser = ({user}) => {
        this.setState({...this.state.user, user})
    }

    render(){
        return(
            <div>
                <p>User Name: {this.state.user.name}</p>
                <p>Email: {this.state.user.email}</p>
                <p>Number of Orders: {this.state.user.nOrders}</p>
                <p>Number of Products: {this.state.user.nProducts}</p>
                <Button variant='dark' href='/user/edit'>Edit User Information</Button>{' '}
                <Button variant='dark'>View Products</Button>{' '}
                <Button variant='dark'>View Orders</Button>
            </div>
        )
    }
}