import React from 'react'
import {connect} from 'react-redux'
import { Route} from 'react-router-dom'

import ProductList from '../components/productList.js'
import Product from '../components/product.js'

class ProductsContainer extends React.Component{

    componentDidMount(){
        if (localStorage.getItem('uid'))
            this.props.reload(true)
        else
            this.props.reload(false)
    }

    render(){
        console.log('product container render')
        return (
            <>
                <ul><ProductList baseUrl={this.props.url} products={this.props.products}/></ul>
                <Route path={`${this.props.url}/:productId`} render={routerProps=> <Product {...routerProps} products={this.props.products}/>}/>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {products: state.productReducer.products}
} 

export default connect(mapStateToProps)(ProductsContainer)