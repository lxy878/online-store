import React from 'react'
import {Form, Col, Row, Card, Button} from 'react-bootstrap'

export default class UserForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                ...props.user,
                password: ''
            }
        }
    }

    handleChange = e =>{
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submitMethod(this.state.user)
    }

    nameInput = () => {
        return this.props.path === '/login' ? 
                <></>
                : (<Form.Group as={Row} controlId="name">
                        <Form.Label column sm={4}>User Name: </Form.Label>
                        <Col sm={8}><input value={this.state.user.name} type="text" name='name' onChange={this.handleChange}/></Col>
                    </Form.Group>)
    }

    render(){
        return(
            <>
                <Card style={{ width: '27rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.formText.header}</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            {this.nameInput()}
                            <Form.Group as={Row} controlId="email">
                                <Form.Label column sm={4}>User Email: </Form.Label>
                                <Col sm={8}><input value={this.state.user.email} type="email" name='email' onChange={this.handleChange}/></Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="password">
                                <Form.Label column sm={4}>User Password: </Form.Label>
                                <Col sm={8}><input value={this.state.user.password} type="password" name='password' onChange={this.handleChange}/></Col>
                            </Form.Group>
                            <Button variant="primary" type="submit">{this.props.formText.submit}</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        )
    }
    
}
