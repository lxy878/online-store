import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { Col, Row, Card } from 'react-bootstrap'

import ProductList from '../components/product/productList'
import Product from '../components/product/product'
import { fetchProducts } from '../actions/productActions'

import ProductCard from './productCard'


class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts(this.props.match.url)
        if (localStorage.getItem('uid'))
            this.props.reload(true)
        else
            this.props.reload(false)
    }

    renderProductInfo = () => {
        return this.props.products < 1 ?
            <></>
            : (<Route path={`${this.props.match.url}/:productId`} render={routerProps => <Product {...routerProps} products={this.props.products} />} />)
    }

    render() {
        return (<>
            <h1>{this.props.match.url === '/user/products' ? `${localStorage.getItem('name')}'s ` : ''}products</h1>
            <Row>
                {/* <Col sm={3}>
                    <ul><ProductList baseUrl={this.props.match.url} products={this.props.products}/></ul>
                    <NavLink activeStyle={{color: '#297d47'}} to={`${baseUrl}/${productId}`} >
            {products[productId].name}
            </NavLink>
                </Col> */}
                {this.props.products.map(product => <Col key={product.id}><ProductCard baseUrl={this.props.match.url} product={product} /></Col>)}
                {/* {this.renderProductInfo()} */}
            </Row>
        </>)
    }

}

const mapStateToProps = state => ({ products: state.productReducer.products })

const mapDispatchToProps = dispatch => ({ fetchProducts: (url) => dispatch(fetchProducts(url)) })

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)