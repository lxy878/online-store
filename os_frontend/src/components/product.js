import React from 'react'

export default function Product({match, products}){
    const renderProduct = () => {
        if (products.length > 0){
            console.log('product render')
            const product = products[match.params.productId]
            return product ? productInfo(product) : <></>
        }else return (<></>)

    }

    const productInfo = product => {
        return (
            <>
               <h3>{product.name}</h3> 
               <p>Category: {product.category.name}</p>
               <p>Price: ${product.price}</p>
               <p>Qty: {product.qty}</p>
               <p>Description: {product.description}</p>
               <button>Order</button>
            </>
        )
    }

    return (
        <div>
           {renderProduct()}
        </div>
        )
    
}