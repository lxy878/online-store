import React from 'react'
import {Route} from "react-router-dom";
// import ProductsContainer from '../containers/productsContainer'
import ProductsContainerNew from '../containers/productsContainerNew'

export default function routes({reload}) {
    return (<>
        {/* <Route path="/products" render={routerProps=> <ProductsContainer {...routerProps} reload={reload}/>}/> */}
        <Route path="/products" render={routerProps=> <ProductsContainerNew {...routerProps} reload={reload}/>}/>
    </>);
}