import React from 'react'
import { connect } from 'react-redux'

import ProductForm from '../../components/product/productForm.js'
import ProductsContainer from '../productsContainer.js'
import {addProduct} from '../../actions/productActions'

function UserProductsContainer(props){
    const {match, reload, addProduct} = props
    const product = {
        name: '',
        category_attributes: {name: ''},
        qty: 0,
        price: 0.00,
        description: ''
    }
    
    return (<>
        <ProductForm product={product} submitMethod={addProduct}/>
        <ProductsContainer match={match} reload={reload}/>
    </>)
    
}

const mapDispatchToProps = dispatch => ({addProduct: payload => dispatch(addProduct(payload))})

export default connect(null, mapDispatchToProps)(UserProductsContainer)