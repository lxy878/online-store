import React from 'react'
import {Redirect, Route} from "react-router-dom";
// import ProductsContainer from '../containers/productsContainer'
import ProductsContainerNew from '../containers/productsContainerNew'
import Product from '../components/product/product'

export default function routes({reload}) {
    return (<>
        
        {/* <Route path="/products" render={routerProps=> <ProductsContainer {...routerProps} reload={reload}/>}/> */}
        
        <Route exact path="/products" render={routerProps=> <ProductsContainerNew {...routerProps} reload={reload}/>}/>
        
        <Route exact path="/products/:productId" render={routerProps=> <Product {...routerProps}/>}/>

        {/* <Redirect from='/' to='/products'/> */}
    </>);
}