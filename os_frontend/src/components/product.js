import React from 'react'

export default function product({match, products}){
    const renderProduct = () => {
        if (products.length > 0){
            const product = products[match.params.productId]
            return (<>
               <h3>{product.name}</h3>
               <p>Category: {product.category}</p>
               <p>Price: ${product.price}</p>
               <p>Qty: {product.qty}</p>
               <p>Description: {product.description}</p>
               <button>Order</button>
            </>)
        }else return (<></>)

    }
    return (
        <div>
           {renderProduct()}
        </div>
        )
    
}