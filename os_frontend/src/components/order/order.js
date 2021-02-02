import React from 'react'
import {Card, Accordion, Button} from 'react-bootstrap'

function Order (props){
    const {order, removeOrder} = props
    
    const handleClick = () => removeOrder({orderId: order.id})
    
    return (<>
        <Accordion>
            <Card>
                <Accordion.Toggle as={Button} variant="success" eventKey="0">
                    {order.product.name}
                </Accordion.Toggle>
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

export default Order