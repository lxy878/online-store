import React from 'react'
import Navbar from '../components/navbar'
import GuestRoutes from '../routes/guestRoutes.js'
// bootstrap
import Container from 'react-bootstrap/Container'

export default class GuestContainer extends React.Component{

    state={
        dropdownItems: {
            title: 'User', 
            items: ['login', 'register']
        }
    }

    render(){
        return (
            <>
            <Navbar dropdownItems={this.state.dropdownItems}/> 
            <Container fluid>
                <GuestRoutes reload={this.props.reload}/>
            </Container>
            </>
        )
    }
}