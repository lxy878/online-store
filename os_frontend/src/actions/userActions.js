const baseUrl = 'http://localhost:3000'

export function createUser(payload){
    return dispatch => {
        fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: payload})
        })
        .then(resp => {
            if (!resp.ok){
                throw Error(resp.statusText)
            }
            return resp.json()
        })
        .then(user => {
            if (user.errors){
                throw Error(user.errors.join('\n'))
            }else{
                dispatch({type: 'CREATE_USER', user})
            }
            
        })
        .catch(errors => alert(errors.message))
    }
}

export function userLogin(payload){
    return dispatch => {
        fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: payload})
        })
        .then(resp => {
            if (!resp.ok){
                throw Error(resp.statusText)
            }
            return resp.json()
        })
        .then(user => {
            if (user.errors){
                throw Error(user.errors.join('\n'))
            }else{
                dispatch({type: 'USER_LOGIN', user})
            }
            
        })
        .catch(errors => alert(errors.message))
    }
}

export function fetchUserInfo(){
    return dispatch => {
        fetch(`http://localhost:3000/current_user`, {
            headers: {
                'Authorization': localStorage.getItem('uid')
            }
        })
        .then(resp=> {
            if (!resp.ok){
                throw Error(resp.statusText)
            }
            return resp.json()
        })
        .then(user=>{
            if (user.errors){
                throw Error(user.errors.join('\n'))
            }else{
                dispatch({type: 'FETCH_USER', user})
            }

        })
        .catch(errors=> alert(errors.message))
    }
}

export function updateUser(payload){
    return dispatch => {
        fetch('http://localhost:3000/users/update', {
            method: 'POST',
            headers: { 
                'Authorization': localStorage.getItem('uid'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: payload})
        })
        .then(resp=> {
            if (!resp.ok){
                throw Error(resp.statusText)
            }
            return resp.json()
        })
        .then(user => {
            if (user.errors){
                throw Error(user.errors.join('\n'))
            }else{
                dispatch({type: 'UPDATE_USER', user})
            }
        })
        .catch(errors=> alert(errors.message))
    }
}