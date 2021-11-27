import React from 'react'
import Button from '../../UI/Button'

function ListProduct(
    {
        img,
        img_head,
        name = "fruit juice",
        price = "$200",
        quantity = 3,
        total = "$600",
        head=false
    }
) {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center product">
            <div className="product--img">
               {img && <img src={img} alt="product image" width= "200px" />}
               {img_head && <h2  style={{width:"200px",marginLeft:"5rem"}}>{img_head}</h2>}
               {
                   !head &&
               <div className="product-remove">
                   <Button cls="btn btn-secondary product-remove--btn">Remove product</Button>
               </div>
               }
            </div>
            <div className="product--name">
                <h2>{name}</h2>
            </div>
            <div className="product--price">
                <h2>{price}</h2>
            </div>
            <div className="d-flex align-items-center product--quantity">
               {
                <>
                {!head && <span className='btn btn-success'>-</span>}
                <h2>{quantity}</h2> 
                {!head && <span className='btn btn-success'>+</span>}
                </>
               }
                
            </div>
            <div className="product--total">
                <h2>{total}</h2>
            </div>
        </div>
    )
}

export default ListProduct
