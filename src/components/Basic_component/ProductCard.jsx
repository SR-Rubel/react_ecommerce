import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'

function ProductCard({img,productTitle,productCat,price,btn1,btn2}) {
    return (
        <div className="card shop__product m-4">
            <div className="shop__product--img">
            <img className="card-img-top" src={process.env.PUBLIC_URL+img} alt="product image" />
            </div>
            {/* <span className="shop__wishlist-icon">
                <i class="bi bi-heart"></i>
            </span> */}
            <h4 className="text-center">{productCat}</h4>
            <h3 className="text-center">{productTitle}</h3>
            <h2 className="text-center">{price}</h2>
            {(btn1 || btn2) && 
            <div className="d-flex justify-content-around flex-column flex-lg-row m-3">
                <button className="btn btn-outline-success">{btn1}</button>
                <button className="btn btn-outline-primary mt-3 mt-lg-0">{btn2}</button>
            </div>}
            {/* <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div> */}
        </div>
    )
}

export default ProductCard
