const baseUrl = 'http://localhost:3000'
export function fetchProducts(url){
    const data = (url === '/user/products') ? {headers: {'Authorization': localStorage.getItem('uid')}} : {}
    return (dispatch) => {
        dispatch({type: 'START_ADDING_PRODUCTS_REQUEST'})
        fetch(`${baseUrl}/products`, data)
        .then(resp => resp.json())
        .then(({products})=> dispatch({type:'FETCH_PRODUCTS', products}))
    }
}

export function addProduct(formData){
    return (dispatch) => {
        dispatch({type: 'START_ADDING_PRODUCT_REQUEST'})
        fetch(`${baseUrl}/products`, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('uid'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({product: formData})
        })
        .then(resp => resp.json())
        .then(json=> {
            if (json.errors){
                throw Error(json.errors.join('\n'))
            }else{
                dispatch({type:'ADD_PRODUCT', product: json.product})
            }
        })
        .catch(errors=>{
            alert(errors.message)
        })
    }   
}

export function updateProduct(formData){
    debugger
}