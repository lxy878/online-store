import React, { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'
import { connect } from 'react-redux'

import {addProduct, updateProduct} from '../actions/productActions'

function ProductForm(props){
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // restore existing data to submit form
    const reformedData = Object.keys(props.product).reduce((acc, key)=> {
        return key === 'category' ?
            {...acc, [`${key}_attributes`]: props.product[key]}
            : {...acc, [key]:props.product[key]}
    }, {})
    
    const [product, setProduct] = useState(reformedData)

    const buttonText = product.id ? 'Edit' : 'Create'

    const handleChange = e => {
        const value = (e.target.name === 'category_attributes') ? {name: e.target.value} : e.target.value
        setProduct({
            ...product,
            [e.target.name] : value
        })
    }
    
    const handleSubmit = () => {
        if (buttonText === 'Edit'){
            props.updateProduct(product)
        }else{
            props.addProduct(product)

        }
        setProduct(reformedData)
        handleClose()
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {buttonText}
            </Button>
    
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>{buttonText} a Product </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <p>Product Name: <input onChange={handleChange} type='text' name='name' value={product.name}/></p>
                        <p>Product Category: <input onChange={handleChange} type='text' name='category_attributes' value={product.category_attributes.name}/></p>
                        <p>Product Qty: <input onChange={handleChange} type='number' name='qty' value={product.qty}/></p>
                        <p>Product Price: <input onChange={handleChange} type='number' name='price' value={product.price}/></p>
                        <p>Product Description: <input onChange={handleChange} type='text' name='description' value={product.description}/></p>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        {buttonText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: formData => dispatch(addProduct(formData)),
        updateProduct: formData => dispatch(updateProduct(formData))
    }
}

export default connect(null, mapDispatchToProps)(ProductForm)