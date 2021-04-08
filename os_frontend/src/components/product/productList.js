import React from 'react'
import { NavLink } from 'react-router-dom'

// import LikeButton from './likeButton'

export default function ProductList (props) {
    const {baseUrl, products} = props

    const renderProducts = Object.keys(products).map(productId => 
        <li key={productId} ><NavLink activeStyle={{color: '#297d47'}} to={`${baseUrl}/${productId}`} >
            {products[productId].name}
            </NavLink></li>
    )

    return (<>
        {renderProducts}
    </>)
}
