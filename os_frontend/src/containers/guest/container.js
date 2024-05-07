import React from 'react'
import Navbar from '../../components/nav/navbar'
import GuestRoutes from '../../routes/guestRoutes.js'

import Container from 'react-bootstrap/Container'
import { Route, Switch } from 'react-router'

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