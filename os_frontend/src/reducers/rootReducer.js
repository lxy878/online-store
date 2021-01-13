import { combineReducers } from "redux"
import productReducer from './productReducer'
import userReducer from './userReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    productReducer, userReducer, orderReducer
})
