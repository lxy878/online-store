export default function userReducer(state={user:{}}, action){
    switch(action.type){
        case 'something':
            return [...state]
        
        default:
            return state
    }
}