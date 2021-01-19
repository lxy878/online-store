import React from 'react'
import {connect} from 'react-redux'
import { Route} from 'react-router-dom'
import {Col, Row} from 'react-bootstrap'

import ProductList from '../components/productList'
import Product from '../components/product'

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
                <Row>
                    <Col sm={3}>
                        <ul><ProductList baseUrl={this.props.url} products={this.props.products}/></ul>
                    </Col>
                    <Col sm={9}>
                        <Route path={`${this.props.url}/:productId`} render={routerProps=> <Product {...routerProps} products={this.props.products}/>}/>
                    </Col>
                </Row>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {products: state.productReducer.products}
} 

export default connect(mapStateToProps)(ProductsContainer)