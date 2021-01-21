import React from 'react'
import {Button, Card} from 'react-bootstrap'
import {connect} from 'react-redux'

import {fetchUserInfo, updateUser} from '../../actions/userActions'
import UserUpdateForm from '../../components/userUpdateForm'

class UserInfo extends React.Component {
    
    componentDidMount(){
        this.props.fetchUserInfo()
    }

    render(){
        return(
            <Card style={{width: '30rem'}}>
                <Card.Body>
                    <Card.Title>User Information</Card.Title>
                    <p>Name: {this.props.user.name}</p>
                    <p>Email: {this.props.user.email}</p>
                    <p>Number of Orders: {this.props.user.order_count}</p>
                    <p>Number of Products: {this.props.user.product_count}</p>
                    <UserUpdateForm path={'/user/edit'} update={this.props.updateUser} user={this.props.user}/>{' '}
                    <Button variant='dark' href='/user/products'>View Products</Button>{' '}
                    <Button variant='dark' href='/user/orders'>View Orders</Button>
                </Card.Body>
            </Card>
            
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUserInfo: () => dispatch(fetchUserInfo()),
        updateUser: payload => dispatch(updateUser(payload))
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)