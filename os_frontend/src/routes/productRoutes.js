import React from 'react'
import {Route} from "react-router-dom";
import ProductApp from '../containers/productApp.js'

export default function routes({reload}) {
    return (
        <>
            <Route path="/products" render={routerProps=> <ProductApp {...routerProps} reload={reload}/>}/>
        </>
    );
}