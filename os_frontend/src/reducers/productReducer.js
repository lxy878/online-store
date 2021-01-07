export default function productReducer(state={products:[], product: {}}, action){
    switch(action.type){
        case 'START_ADDING_PRODUCTS_REQUEST':
            return {
                ...state, 
                products: [...state.products],
                requesting: true
            }

        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.products,
                requesting: false
            }

        case 'START_ADDING_PRODUCT_REQUEST':
            return {
                ...state,
                product: {...state.product},
                requesting: true
            }

        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.product],
                requesting: false
            }

        case 'UPDATE_PRODUCT':
            debugger
            const productIndex = state.products.findIndex(product=> product.id === action.product.id)
            return {
                ...state,
                products: [...state.products.slice(productIndex-1), action.product, ...state.products.slice(productIndex+1)],
                requesting: false
            }

        default:
            return state
    }
}