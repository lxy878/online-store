import React from 'react'

import ProductForm from '../../components/product/productForm.js'
import ProductsContainer from '../productsContainer.js'

export default function UserProductsContainer(props){
    const {match, reload} = props
    const product = {
        name: '',
        category_attributes: {name: ''},
        qty: 0,
        price: 0.00,
        description: ''
    }
    
    return (<>
        <ProductForm product={product}/>
        <ProductsContainer match={match} reload={reload}/>
    </>)
    
}