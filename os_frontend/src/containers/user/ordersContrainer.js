import React from 'react'
import {fetchOrders} from '../../actions/orderActions'
import {connect} from 'react-redux'
import Order from '../../components/order/order'

class OrdersContrainer extends React.Component{
    
    componentDidMount(){
        this.props.fetchOrders()
    }

    render(){
        return (<>
            <h3>{`${localStorage.getItem('name')}'s `}orders </h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContrainer)