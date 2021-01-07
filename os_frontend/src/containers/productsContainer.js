import React from 'react'
import {connect} from 'react-redux'

import {fetchProducts} from '../actions/productActions'

import { Route} from 'react-router-dom'

import ProductList from '../components/productList.js'
import Product from '../components/product.js'

class ProductsContainer extends React.Component{

    componentDidMount(){
        if (localStorage.getItem('uid'))
            this.props.reload(true)
        else
            this.props.reload(false)

        this.props.fetchProducts(this.props.url)
    }

    render(){
        return (
            <>
                <ul><ProductList baseUrl={this.props.url} products={this.props.products}/></ul>
                <Route path={`${this.props.url}/:productId`} render={routerProps=> <Product {...routerProps} products={this.props.products}/>}/>
            </>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchProducts: (url) => dispatch(fetchProducts(url))
    }
}
const mapStateToProps = state => {
    return {products: state.products}
} 

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)