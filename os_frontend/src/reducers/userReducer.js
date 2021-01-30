export default function userReducer(state={user:{}, login: false}, action){
    switch(action.type){
        case 'USER_LOGIN':
        case 'CREATE_USER':
            localStorage.setItem('uid', action.user.uid)
            localStorage.setItem('name', action.user.name)
            return {...state, login: true}
        
        case 'UPDATE_USER':
        case 'FETCH_USER':
            return {...state, user: action.user}

        default:
            return state
    }
}