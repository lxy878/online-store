import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import { connect } from 'react-redux'

import {addProduct, updateProduct} from '../actions/productActions'

class ProductForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product: {
                name: '',
                category_attributes: {name: ''},
                qty: 0,
                price: 0.00,
                description: ''
            },
            show: false,
            fileInput: React.createRef()
        }
    }

    handleClose = () => this.setState({...this.state, show: false})
    handleShow = () => this.setState({...this.state, show: true})
    componentDidMount(){
        this.setState({...this.state, product: this.props.product})
    }

    buttonText = () => this.state.product.id ? 'Edit' : 'Create'

    handleChange = e => {
        const value = e.target.name === 'category_attributes' ? {name: e.target.value} : e.target.value
        this.setState({
            ...this.state,
            product:{
                ...this.state.product,
                [e.target.name] : value
            }
        })
    }
    
    handleSubmit = e => {
        const formData = new FormData()
        const imageFile = this.state.fileInput.current.files[0]
        if (imageFile) {
            formData.append('image', imageFile)
        }
        Object.keys(this.state.product).forEach(key => {
            if(key === 'category_attributes'){
                formData.append(key, JSON.stringify(this.state.product[key]))
            }else{
                formData.append(key, this.state.product[key])
            }
        })
        // fix: pass submit method from parent
        if (this.buttonText() === 'Edit'){
            this.props.updateProduct(formData)
        }else{
            this.props.addProduct(formData)
        }
        // clean inputs && remove previous inputs
        this.setState({...this.state})
        this.handleClose()
    }

    render(){
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    {this.buttonText()}
                </Button>
        
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header >
                        <Modal.Title>{this.buttonText()} a Product </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <p>Product Name: <input onChange={this.handleChange} type='text' name='name' value={this.state.product.name}/></p>
                            <p>Product Category: <input onChange={this.handleChange} type='text' name='category_attributes' value={this.state.product.category_attributes.name}/></p>
                            <p>Product Qty: <input onChange={this.handleChange} type='number' name='qty' value={this.state.product.qty}/></p>
                            <p>Product Price: <input onChange={this.handleChange} type='number' name='price' value={this.state.product.price}/></p>
                            {/* fix: add textarea */}
                            <p>Product Description: <input onChange={this.handleChange} type='text' name='description' value={this.state.product.description}/></p>
                            <p>Product Image: <input type='file' ref={this.state.fileInput} name='image' accept='image/*'/></p>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            {this.buttonText()}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: formData => dispatch(addProduct(formData)),
        updateProduct: formData => dispatch(updateProduct(formData))
    }
}

export default connect(null, mapDispatchToProps)(ProductForm)