import React from 'react'

function ListProduct2(
    {
        img,
        name = "fruit juice",
        price = "$200",
        quantity = 3,
        total="$600"
    }
) {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center product">
            <div className="product--img">
               <img src={img} alt="product image" width= "200px" />
            </div>
            
            <div className="d-flex flex-column">
                <div className="product--name">
                    <h2>{name}</h2>
                </div>

                <div className="d-flex">
                    <div className="product--price" style={{marginRight:"1rem"}}>
                        <h2>{price}</h2>
                    </div>
                    <div className="d-flex align-items-center product--quantity">
                        <>
                        <span className='btn btn-success'>-</span>
                        <h2>{quantity}</h2> 
                        <span className='btn btn-success'>+</span>
                        </>
                        
                    </div>
                </div>
                <h4>{total}</h4>
            </div>

        </div>
    )
}

export default ListProduct2
