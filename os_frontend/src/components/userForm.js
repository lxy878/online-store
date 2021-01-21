import React, {useState} from 'react'
import {Form, Col, Row, Card, Button} from 'react-bootstrap'

import {connect} from 'react-redux'
import { createUser,  userLogin} from '../actions/userActions'

function UserForm(props){
    const {path, formText, submitMethod} = props
    const u = {...props.user, password: ''}
    const [user, setUser] = useState(u)

    const handleChange = e =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // Fix: props methods from parents
        if (path === '/login'){
            props.userLogin(user)
        }else if(path === '/register'){
            props.createUser(user)
        }else if(path === '/user/edit'){
            submitMethod(user)
        }
    }

    const nameInput = () => {
        return path === '/login' ? 
                    <></>
                    : (<Form.Group as={Row} controlId="name">
                            <Form.Label column sm={4}>User Name: </Form.Label>
                            <Col sm={8}><input value={user.name} type="text" name='name' onChange={handleChange}/></Col>
                        </Form.Group>)
    }

    return(
        <>
            <Card style={{ width: '27rem' }}>
                <Card.Body>
                    <Card.Title>{formText.header}</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        {nameInput()}
                        <Form.Group as={Row} controlId="email">
                            <Form.Label column sm={4}>User Email: </Form.Label>
                            <Col sm={8}><input value={user.email} type="email" name='email' onChange={handleChange}/></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="password">
                            <Form.Label column sm={4}>User Password: </Form.Label>
                            <Col sm={8}><input value={user.password} type="password" name='password' onChange={handleChange}/></Col>
                        </Form.Group>
                        <Button variant="primary" type="submit">{formText.submit}</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
        
    )
    
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: payload => dispatch(createUser(payload)),
        userLogin: payload => dispatch(userLogin(payload))
    }
}

export default connect(null, mapDispatchToProps)(UserForm)
