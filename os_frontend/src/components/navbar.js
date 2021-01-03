import React from 'react'
import {Navbar, Nav, Figure} from 'react-bootstrap';

import Navdropdown from './navDropdown.js'
export default function navbar ({dropdownItems}) {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">Replace to anther image</Navbar.Brand>
            <Figure>
            {/* <Figure.Image width={171} height={180} alt="171x180" src="holder.js/171x180"/> */}
            </Figure>
            <Nav className="mr-auto">
                <Nav.Link href="/products">Products</Nav.Link>
                <Navdropdown dropdownItems={dropdownItems}/>
            </Nav>
        </Navbar>
        <br />
        </>
    )
}