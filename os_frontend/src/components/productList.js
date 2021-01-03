import React from 'react'
import { Link } from 'react-router-dom'

export default function productList ({baseUrl, products}) {
    const renderProducts = Object.keys(products).map(productId => 
       <li key={productId}><Link to={`${baseUrl}/${productId}`} >{products[productId].name}</Link></li>
    )
    return (<>
        {renderProducts}
        {/* <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            Disabled
            </Nav.Link>
        </Nav.Item>
        </Nav> */}
    </>)
}