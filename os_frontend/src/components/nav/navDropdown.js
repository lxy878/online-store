import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function navDropdown({dropdownItems}){
    const {title, root, paths} = dropdownItems
    return (
        <>
            <NavDropdown title={title} id='basic-nav-dropdown'>
                {paths.map((path, i)=>
                    <NavDropdown.Item key={i} href={`${root}${path}`}>
                            {path.split('/')[1]}
                    </NavDropdown.Item>)
                }
            </NavDropdown>
        </>
    )
}