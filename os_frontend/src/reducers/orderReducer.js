export default function orderReducer(state={orders:[]}, action){
    
    switch(action.type){
        case 'FETCH_ORDERS':
            return {...state, orders: action.orders}

        case 'REMOVE_ORDER':
            let index = state.orders.findIndex(order=> order.id === action.order.id)
            return {
                ...state, 
                orders: [...state.orders.slice(0, index), ...state.orders.slice(index+1)]
            }

        default:
            return state
    }
}