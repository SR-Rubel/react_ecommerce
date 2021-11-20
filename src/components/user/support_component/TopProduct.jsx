import React from 'react'

function TopProduct({text,img}) {
    return (
        <div className="container" >
            <div className="top_product row">
              <div className="col-md-6 top_product__left">
                <p> Top rated</p>
                <p>{text}</p>
              </div>
              <div className="col-md-6 top_product__right">
                <img src={img} alt="" className="top_product__right-img mt-5" />
              </div>
            </div>
        </div>
    )
}

export default TopProduct
