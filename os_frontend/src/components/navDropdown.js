import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function navDropdown({dropdownItems}){
    return (
        <>
            <NavDropdown title={dropdownItems.title} id='basic-nav-dropdown'>
                {dropdownItems.items.map((item, i)=>
                    <NavDropdown.Item key={i} href={`/${item}`}>
                        {item.charAt(0).toUpperCase()+item.slice(1)}
                    </NavDropdown.Item>)
                }
            </NavDropdown>
        </>
    )
}