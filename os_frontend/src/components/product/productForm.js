import React from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

class ProductForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product: {...props.product},
            show: false,
            fileInput: React.createRef()
        }
    }

    handleClose = () => this.setState({...this.state, show: false})
    handleShow = () => this.setState({...this.state, show: true})

    componentDidUpdate(prevProps) {
        if (prevProps.product !== this.props.product){
            this.setState({...this.state, product: this.props.product})
        }
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
        
        this.props.submitMethod(formData)
        
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
                        <Form>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control onChange={this.handleChange} type='text' name='name' value={this.state.product.name}/>
                            <Form.Label>Category:</Form.Label>
                            <Form.Control onChange={this.handleChange} type='text' name='category_attributes' value={this.state.product.category_attributes.name}/>
                            <Form.Label>Qty:</Form.Label>
                            <Form.Control onChange={this.handleChange} type='number' name='qty' value={this.state.product.qty}/>
                            <Form.Label>Price:</Form.Label>
                            <Form.Control onChange={this.handleChange} type='number' name='price' value={this.state.product.price}/>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control as="textarea" onChange={this.handleChange} name='description' value={this.state.product.description} rows={3} />
                            <Form.File ref={this.state.fileInput} name='image' accept='image/*'/>
                        </Form>
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


export default ProductForm