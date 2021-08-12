import React from 'react'
import {Card} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export default function ProductCard(props) {
    const {product, baseUrl} = props
    return (
        <Card>
            <div className='img'><Card.Img src={`http://localhost:3000/${product.image_path}`} /></div>
            <Card.Body>
                <Card.Title>${product.price}</Card.Title>
                <Card.Text><NavLink to={`${baseUrl}/${product.id}`} >{product.name}</NavLink></Card.Text>
            </Card.Body>
        </Card>
    )
}