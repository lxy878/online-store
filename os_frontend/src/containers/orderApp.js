import React from 'react'
import {fetchOrders} from '../actions/orderActions'
import {connect} from 'react-redux'
import Order from '../components/order'

class OrdersApp extends React.Component{
    
    componentDidMount(){
        this.props.fetchOrders()
    }

    render(){
        // get orders and props to a new component that shows order info with delete button
        return (<>
            <h3>Orders </h3>
            {this.props.orders.map(order => <Order key={order.id} order={order}/>)}
        </>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
}
const mapStateToProps = state => {
    return {orders: state.orderReducer.orders}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersApp)