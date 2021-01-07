import React from 'react'
import ProductForm from '../components/productForm.js'
import ProductsContainer from './productsContainer.js'

class ProductApp extends React.Component{
    state = {
        newProduct: {
            name: '',
            category_attributes: {name: ''},
            qty: 0,
            price: 0.00,
            description: ''
        }
    }

    render(){
        return (
            <>
            <h1>Products</h1>
            <ProductForm product={this.state.newProduct}/>
            <ProductsContainer url={this.props.match.url} reload={this.props.reload}/>
            </>
        )
    }
}


export default ProductApp