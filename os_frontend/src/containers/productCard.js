import React from 'react'
import {Card} from 'react-bootstrap'

export default function ProductCard(props) {
    const product = props.product
    return (
        <Card>
            <div class='img'><Card.Img src={product ? `http://localhost:3000/${product.image_path}` : ''} /></div>
            <Card.Body>
                <Card.Title>${product.price}</Card.Title>
                <Card.Text>{product.name}</Card.Text>
            </Card.Body>
        </Card>
    )
}