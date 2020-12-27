import React from 'react'
import Navbar from '../components/navbar'
import UserRoutes from '../routes/userRoutes.js'

// bootstrap
import Container from 'react-bootstrap/Container'

export default class UserContainer extends React.Component{
    state={
        dropdownItems: {
            title: 'User', 
            items: ['userinfo', 'logout']
        }
    }


    render(){
        return (
            <>
            <Navbar dropdownItems={this.state.dropdownItems}/> 
            <Container fluid>
                <UserRoutes reload={this.props.reload}/>
            </Container>
            </>
        )
    }
}