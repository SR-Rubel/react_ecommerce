import React from 'react'
import CartProduct from './support_component/CartProduct'

function Cart() {
    return (
        <> 
        <div className="d-flex flex-column align-items-center cart__products">
            <CartProduct 
            img_head="images" 
            name="product name"
            price="price" 
            quantity="Quantity"
            total="Total"  />
            <hr />
            
            <CartProduct img = "/img/juice2.png" />
            <hr />
            <CartProduct img = "/img/juice2.png" />
            <hr />
            <CartProduct img = "/img/juice2.png" />
            <hr />
            <CartProduct img = "/img/juice2.png" />
            <hr />
            <CartProduct img = "/img/juice2.png" />
            <hr />
            <CartProduct 
            img_head=" " 
            name=" "
            price=" " 
            quantity=" "
            total="COST: $30,000"  />


        </div></>
    )
}

export default Cart
