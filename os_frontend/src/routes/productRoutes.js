import React from 'react'
import {Route} from "react-router-dom";
import ProductsContainer from '../containers/productsContainer.js'

export default function routes({reload}) {
    return (
        <><Route exact path="/"><ProductsContainer reload={reload}/></Route></>
    );
}