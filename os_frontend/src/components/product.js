import React from 'react'
// eslint-disable-next-line
import ProductModal from './productForm.js'

export default function Product({match, products}){
    let product

    const renderProduct = () => {
        if (products.length > 0){
            product = products[match.params.productId]
            return (<>
               <h3>{product.name}</h3>
               <p>Category: {product.category}</p>
               <p>Price: ${product.price}</p>
               <p>Qty: {product.qty}</p>
               <p>Description: {product.description}</p>
               <button>Order</button> <button>Edit</button>
            </>)
        }else return (<></>)

    }


    return (
        <div>
           {renderProduct()}
           {/* <ProductModal product={product} handles={handles}/> */}
        </div>
        )
    
}