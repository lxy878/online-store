const baseUrl = 'http://localhost:3000'

export function fetchProducts(url){
    const data = (url === '/user/products') ? {headers: {'Authorization': localStorage.getItem('uid')}} : {}
    return (dispatch) => {
        fetch(`${baseUrl}/products`, data)
        .then(resp => resp.json())
        .then((products)=> dispatch({type:'FETCH_PRODUCTS', products}))
    }
}

export function addProduct(payload){
    return (dispatch) => {
        fetch(`${baseUrl}/products`, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('uid')
                // 'Content-Type': 'application/json'
            },
            body: payload
        })
        .then(resp => resp.json())
        .then(product=> {
            // debugger
            if (product.errors){
                throw Error(product.errors.join('\n'))
            }else{
                dispatch({type:'ADD_PRODUCT', product})
            }
        })
        .catch(errors=>alert(errors.message))
    }   
}

export function updateProduct(payload){
    // debugger
    return (dispatch) => {
        fetch(`${baseUrl}/products/${payload.get('id')}`, {
            method: 'PATCH',
            headers: {
                'Authorization': localStorage.getItem('uid'),
                // 'Content-Type': 'application/json'
            },
            body: payload
        })
        .then(resp => resp.json())
        .then(product=> {
            if (product.errors){
                debugger
                throw Error(product.errors.join('\n'))
            }else{
                dispatch({type:'UPDATE_PRODUCT', product})
            }
        })
        .catch(errors=>{
            alert(errors.message)
        })
    } 
}

export function deleteProduct(formData){
    return (dispatch) =>{
        fetch(`${baseUrl}/products/${formData.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.getItem('uid'),
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(product=> {
            if (product.errors){
                throw Error(product.errors.join('\n'))
            }else{
                dispatch({type:'DELETE_PRODUCT', product})
            }
        })
        .catch(errors=>{
            alert(errors.message)
        })
    }
}