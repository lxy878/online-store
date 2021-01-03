import React from 'react'
import {Route} from "react-router-dom";
import ProductsContainer from '../containers/productsContainer.js'

export default function routes({reload}) {
    return (
        <>
            <Route path="/products" render={routerProps=> <ProductsContainer {...routerProps} reload={reload}/>}/>
        </>
    );
}