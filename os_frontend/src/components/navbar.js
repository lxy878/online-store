import React from 'react'
import {Navbar, NavDropdown, Nav, Figure} from 'react-bootstrap';

export default function navbar () {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">Replace to anther image</Navbar.Brand>
            <Figure>
            {/* <Figure.Image width={171} height={180} alt="171x180" src="holder.js/171x180"/> */}
            </Figure>
            <Nav className="mr-auto">
                <Nav.Link href="/">Products</Nav.Link>
                <NavDropdown title='User' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='/user'>Log In</NavDropdown.Item>
                    <NavDropdown.Item href='/'>Register</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
        <br />
        </>
    )
}