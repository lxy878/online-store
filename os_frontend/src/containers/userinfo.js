import React from 'react'

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
        // const data = localStorage.getItem('uid')
        
        // fetch(`http://localhost:3000/users/${data}`)
        // .then()
    }
    shouldComponentUpdate() {
        return false
    }
    render(){
        return(
            <div>
                <p>User Name: {this.state.user.name}</p>
                <p>Email: {this.state.user.email}</p>
                <p>Number of Orders: {this.state.user.nOrders}</p>
                <p>Number of Products: {this.state.user.nProducts}</p>
                {this.fetchUserInfo()}
            </div>
        )
    }
}