import React from 'react'

export default class ProductsContainer extends React.Component{
    componentDidMount(){
        if (localStorage.getItem('uid'))
            this.props.reload(true)
        else
            this.props.reload(false)
    }
    render(){
        return (
            <>
            <h1>Products</h1>
            </>
        )
    }
}