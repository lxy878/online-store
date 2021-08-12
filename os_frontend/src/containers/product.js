import React from 'react'
import {connect} from 'react-redux'
import {Figure, Col, Row, Button} from 'react-bootstrap'

import {deleteProduct, updateProduct} from '../actions/productActions'
// import ProductForm from './productForm'
import {addOrder} from '../actions/orderActions'
// import OrderForm from '../order/orderForm'
// import defaultImage from '../../No-image-available.png'

function Product(props){
    
    const {match, products, updateProduct} = props
    const deleteProduct = (product) => props.deleteProduct({id: product.id})
    const renderProduct = () => {
        // prevent errors after current product is deleted
        const product = products[match.params.productId]
        return product ? renderInfo(product) : <></>
    }

    const renderInfo = (product) => {
        return (
            <>
               <h3>{product.name}</h3>
               <Row>
                <Col sm={7}>
                        <Figure>
                            <Figure.Image width={500} height={400} src={product.image_path ? `http://localhost:3000/${product.image_path}` : defaultImage}/>
                        </Figure>
                </Col>
                <Col sm={5}>
                        <p>Category: {product.category_attributes.name}</p>
                        <p>Price: ${product.price}</p>
                        <p>Qty: {product.qty}</p>
                        {renderButtons(product)}
                </Col>
               </Row>
               <p>Description: {product.description}</p>
            </>
        )
    }

    const renderButtons = (product)=>{
        if (match.url.includes('user')){
            const totalOrders = product.orders.reduce((sum, order) => sum+order.qty, 0)
            return (<>
                <Button onClick={()=> deleteProduct(product)}>Delete</Button>{' '}
                <ProductForm product={product} submitMethod={updateProduct}/>{' '}
                <Button disabled>Ordered ({totalOrders})</Button>
            </>)
        }else{
            return <><OrderForm addOrder={props.addOrder} product={product}/></>
        }
    }

    return (
        <div>
           {renderProduct()}
        </div>
    )
    
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: payload => dispatch(deleteProduct(payload)),
        updateProduct: payload => dispatch(updateProduct(payload)),
        addOrder: payload => dispatch(addOrder(payload))
    }
}

export default connect(null, mapDispatchToProps)(Product)