import React from 'react'
import Navbar from '../../components/nav/navbar'
import GuestRoutes from '../../routes/guestRoutes.js'

import Container from 'react-bootstrap/Container'

export default function GuestContainer({reload}){

    const dropdownItems = {
        title: 'User', 
        root: '',
        paths: ['/login', '/register']
    }

    return (<>
        <Navbar dropdownItems={dropdownItems}/> 
        <Container fluid>
            <GuestRoutes reload={reload}/>
        </Container>    
    </>)
    
}