import React from 'react'
import { Route, Link} from 'react-router-dom'

import {Card, Accordion, Button} from 'react-bootstrap'
// eslint-disable-next-line
import ProductList from '../components/productList'
import Product from '../components/product'

export default class ProductsContainer extends React.Component{
    state = {
        products: [],
        newProduct: {
            name: '',
            category_attributes: {name: ''},
            qty: 0,
            price: 0.00,
            description: ''
        }
    }

    componentDidMount(){
        if (localStorage.getItem('uid'))
            this.props.reload(true)
        else
            this.props.reload(false)

        this.fecthProducts()
    }

    fecthProducts = () =>{
        let data = {}
        if (this.props.match.url === '/user/products') data = {headers: {'Authorization': localStorage.getItem('uid')}}
        
        fetch('http://localhost:3000/products', data)
        .then(resp => resp.json())
        .then(json => this.setState({products: json.products}))
    }
    
    // remove
    renderProductList = () => {
        return Object.keys(this.state.products).map(productId => 
            <li key={productId}><Link to={`${this.props.match.url}/${productId}`} >{this.state.products[productId].name}</Link></li>
         )
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('uid'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({product: this.state.newProduct})
        })
        .then(resp=>resp.json())
        .then(json => console.log(json))
        // fix: category unique && debug next line
        // .then(json => this.setState({products:[...this.state.products, json.product]}))
    }

    handleChange = e => {
        const value = (e.target.name === 'category_attributes') ? {name: e.target.value} : e.target.value
        this.setState({
            newProduct:{
                ...this.state.newProduct,
                [e.target.name]: value
            }
        })
    }

    renderCreateForm = () => {
        // cause warning
        return (<>
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Create a Product
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <form onSubmit={this.handleSubmit}>
                                <p>Product Name: <input onChange={this.handleChange} type='text' name='name' value={this.state.newProduct.name}/></p>
                                <p>Product Category: <input onChange={this.handleChange} type='text' name='category_attributes' value={this.state.newProduct.category_attributes.name}/></p>
                                <p>Product Qty: <input onChange={this.handleChange} type='number' name='qty' value={this.state.newProduct.qty}/></p>
                                <p>Product Price: <input onChange={this.handleChange} type='number' name='price' value={this.state.newProduct.price}/></p>
                                <p>Product Description: <input onChange={this.handleChange} type='text' name='description' value={this.state.newProduct.description}/></p>
                                <input type='submit'/>
                            </form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>)
    }
    render(){
        return (
            <>
                <h1>Products</h1>
                {this.renderCreateForm()}
                {/* <ul>{this.renderProductList()}</ul> */}
                <ul><ProductList baseUrl={this.props.match.url} products={this.state.products}/></ul>
                <Route path={`${this.props.match.url}/:productId`} render={routerProps=> <Product {...routerProps} products={this.state.products}/>}/>
            </>
        )
    }
}