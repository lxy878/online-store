import React from 'react'
import {Navbar, Nav, Figure} from 'react-bootstrap';

import logo from '../../logo.png'

import Navdropdown from './navDropdown.js'
export default function navbar ({dropdownItems}) {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#"><img src={logo} width="35" height="35" alt='35x35'/></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/products">Products</Nav.Link>
                <Navdropdown dropdownItems={dropdownItems}/>
            </Nav>
        </Navbar>
        <br />
    </>)
}