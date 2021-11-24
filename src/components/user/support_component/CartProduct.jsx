import React from 'react'

function CartProduct(
    {
        img,
        img_head,
        name = "fruit juice",
        price = "$200",
        quantity = 3,
        total = "$600"
    }
) {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center cart__product">
            <div className="cart__product--img">
               {img && <img src={img} alt="product image" width= "200px" />}
               {img_head && <h2  style={{width:"200px",marginLeft:"5rem"}}>{img_head}</h2>}
            </div>
            <div className="cart__product--name">
                <h2>{name}</h2>
                
            </div>
            <div className="cart__product--price">
                <h2>{price}</h2>
            </div>
            <div className="cart__product--quantity">
                <h2>{quantity}</h2>
                
            </div>
            <div className="cart__product--total">
                <h2>{total}</h2>
            </div>
        </div>
    )
}

export default CartProduct
