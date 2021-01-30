import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from '../../components/nav/navbar'
import UserRoutes from '../../routes/userRoutes.js'

export default function UserContainer({reload}){
    const dropdownItems = {
        title: localStorage.getItem('name'),
        root: '/user',
        paths: ['/info', '/products','/orders','/logout']
    }

    return(<>
        <Navbar dropdownItems={dropdownItems}/> 
        <Container fluid>
            <UserRoutes reload={reload}/>
        </Container>
    </>)
        
    
}