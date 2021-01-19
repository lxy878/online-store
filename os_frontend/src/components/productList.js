import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductList (props) {
    const {baseUrl, products} = props

    const renderProducts = Object.keys(products).map(productId => 
        <li key={productId} ><NavLink activeStyle={{color: '#297d47'}} to={`${baseUrl}/${productId}`} >{products[productId].name}</NavLink></li>
    )

    return (<>
        {renderProducts}
    </>)
}

export default ProductList