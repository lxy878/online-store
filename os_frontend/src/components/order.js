import React from 'react'
import {connect} from 'react-redux'
import {Card, Accordion, Button} from 'react-bootstrap'

import {removeOrder} from '../actions/orderActions'

function Order (props){
    const {order} = props
    
    const handleClick = () =>{
        props.removeOrder({orderId: order.id})
    }

    return (<>
        <Accordion>
            <Card>
                {/* <Card.Header> */}
                <Accordion.Toggle as={Button} variant="success" eventKey="0">
                    {order.product.name}
                </Accordion.Toggle>
                {/* </Card.Header> */}
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <p>Amount: {order.amount}</p>
                    <p>Product Name: {order.product.name}</p>
                    <p>Qty: {order.qty}</p>
                    <p>Order Date: {order.created_at}</p>
                    <Button onClick={handleClick}>Cancel This Order</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </>)
}

const mapDispatchToProps = dispatch =>{
    return {
        removeOrder: payload => dispatch(removeOrder(payload))
    }
}
export default connect(null, mapDispatchToProps)(Order)