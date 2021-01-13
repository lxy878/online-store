const baseUrl = 'http://localhost:3000'

export function addOrder(payload){
    return (dispatch) => {
        fetch(`${baseUrl}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('uid')
            },
            body: JSON.stringify({order: payload})
        })
        .then(resp => resp.json())
        .then(product=> {
            if(product.errors){
                throw Error(product.errors.join('\n'))
            }else{
                dispatch({type: 'UPDATE_PRODUCT', product})
            }
        })
        .catch(errors => alert(errors.message))
    }
}

export function fetchOrders(){
    return dispatch => {
        fetch(`${baseUrl}/orders`, {
            method: 'GET',
            headers: {'Authorization': localStorage.getItem('uid')}
        })
        .then(resp => resp.json())
        .then(orders=> {
            // add current user's orders to reduce
            // if(products.errors){
            //     throw Error(products.errors.join('\n'))
            // }else{
        dispatch({type: 'FETCH_ORDERS', orders})
            // }
        })
        .catch(errors => alert(errors.message))
    }
}

export function removeOrder(payload){
    return dispatch => {
        fetch(`${baseUrl}/orders/${payload.orderId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('uid')
            }
        })
        .then(resp=> resp.json())
        .then(order=>{
            if(order.errors){
                throw Error(order.errors.join('\n'))
            }else{
                dispatch({type: 'REMOVE_ORDER', order})
            }
            
        })
        .catch(errors => alert(errors.message))
    }
}