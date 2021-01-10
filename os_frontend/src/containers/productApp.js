import React from 'react'
import {connect} from 'react-redux'

import ProductForm from '../components/productForm.js'
import ProductsContainer from './productsContainer.js'
import {fetchProducts} from '../actions/productActions'

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

    componentDidMount(){
        this.props.fetchProducts(this.props.match.url)   
    }

    render(){
        console.log('product app render')
        return (
            <>
            <h1>Products</h1>
            <ProductForm product={this.state.newProduct}/>
            <ProductsContainer url={this.props.match.url} reload={this.props.reload}/>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({fetchProducts: (url) => dispatch(fetchProducts(url))})

export default connect(null, mapDispatchToProps)(ProductApp)