import React from 'react'
import {connect} from 'react-redux'
import {Figure, Col, Row, Button} from 'react-bootstrap'

import {deleteProduct} from '../actions/productActions'
import ProductForm from './productForm'
import {addOrder} from '../actions/orderActions'
import OrderForm from './orderForm'

function Product(props){
    const {match, products} = props
    const deleteProduct = (product) => props.deleteProduct({id: product.id})

    const renderProduct = () => {
        if (products.length > 0){
            const product = products[match.params.productId]
            return product ? productInfo(product) : <></>
        }else return (<></>)

    }
    
    const productInfo = product => {
        return (
            <>
               <h3>{product.name}</h3>
               <Row>
                <Col sm={7}>
                        <Figure>
                            <Figure.Image width={500} height={530} src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'/>
                        </Figure>
                </Col>
                <Col sm={5}>
                        <p>Category: {product.category.name}</p>
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
            return (<><button onClick={()=> deleteProduct(product)}>Delete</button>
                <ProductForm product={product}/>
                <Button disabled>Ordered {totalOrders}</Button>
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
        deleteProduct: formData => dispatch(deleteProduct(formData)),
        addOrder: payload => dispatch(addOrder(payload))
    }
}

export default connect(null, mapDispatchToProps)(Product)