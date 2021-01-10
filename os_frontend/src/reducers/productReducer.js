export default function productReducer(state={products:[], product: {}}, action){
    let productIndex = null

    switch(action.type){

        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.products,
                requesting: false
            }

        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.product],
                requesting: false
            }

        case 'UPDATE_PRODUCT':
            productIndex = state.products.findIndex(product=> product.id === action.product.id)
            return {
                ...state,
                products: [...state.products.slice(0, productIndex), action.product, ...state.products.slice(productIndex+1)],
                requesting: false
            }

        case 'DELETE_PRODUCT':
            productIndex = state.products.findIndex(product=> product.id === action.product.id)
            return {
                ...state,
                products: [...state.products.slice(0, productIndex), ...state.products.slice(productIndex+1)],
                requesting: false
            }

        default:
            return state
    }
}