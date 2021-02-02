import React, {useState} from 'react'
import {Alert, Button} from 'react-bootstrap'

export default function OrderForm(props){
    const [qty, setQty] = useState(0)
    const {addOrder, product} = props

    const handleChange = e =>{
        let n = e.target.name === 'decrease' ? qty-1 : qty+1
        if (n<=0){
            n=0
        }else if(n>product.qty){
            n=product.qty
        }
        setQty(n)
    }

    const handleSubmit = () => {
        addOrder({product_id: product.id, qty: qty, amount: qty*product.price})
        setQty(0)
    }

    return (<>
        { localStorage.getItem('uid') ?
            <><button name='decrease' onClick={handleChange}>-</button><span> {qty} </span><button name='increase' onClick={handleChange}>+</button>{' '}
            <Button onClick={handleSubmit}>Order</Button></>
            : <Alert variant={'danger'}>To Purchase this product requires <Alert.Link href='/login'>User Log In</Alert.Link></Alert>
        }
    </>)
}