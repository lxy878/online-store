import React from 'react'
import { Link } from 'react-router-dom'
import ProductForm from './productForm'
import {deleteProduct} from '../actions/productActions'
import { connect } from 'react-redux'

function ProductList (props) {
    const {baseUrl, products} = props

    const deleteProduct = (product) => {
        props.deleteProduct({id: product.id})
        console.log('delete methom triggered')
    }

    const renderProducts = Object.keys(products).map(productId => 
       <li key={productId}>
           <Link to={`${baseUrl}/${productId}`} >{products[productId].name}</Link>
           <button onClick={()=> deleteProduct(products[productId])}>X</button>
           <ProductForm product={products[productId]}/>
        </li>
    )
    
    return (<>
        {renderProducts}
        {/* <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            Disabled
            </Nav.Link>
        </Nav.Item>
        </Nav> */}
    </>)
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: FormData => dispatch(deleteProduct(FormData))
    }
}
export default connect(null, mapDispatchToProps)(ProductList)