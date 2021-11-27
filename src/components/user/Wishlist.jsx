import React from 'react'
import ListProduct from './support_component/ListProduct'
import Navbar from './Navbar'
import Footer from '../Basic_component/Footer'
import Recomended from '../Basic_component/Recomended'
import Button from '../UI/Button'

function Wishlist() {
    return (
        <div className="wishlist">
            <Navbar />

            <div className="d-flex flex-column align-items-center wishlist__products">
                <ListProduct 
                img_head="images" 
                name="product name"
                price="price" 
                quantity="Quantity"
                total="Total" head={ true }  />
                <hr />
                
                <ListProduct img = "/img/juice2.png" />
                <hr />
                <ListProduct img = "/img/juice2.png" />
                <hr />
                <ListProduct img = "/img/juice2.png" />
                <hr />
                <ListProduct img = "/img/juice2.png" />
                <hr />
                <ListProduct img = "/img/juice2.png" />
                <hr />
                <ListProduct 
                img_head=" " 
                name=" "
                price=" " 
                quantity=" "
                total="COST: $30,000" head={ true } />
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="wishlist__productCounter">
                    <h2>Total Number of product:.......</h2>
                </div>
                <div className="wishlist__totalPrice">
                    <h2>Total Price:........... </h2>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row mt-5 justify-content-center wishlist__buttons">
                <Button cls="btn-outline-primary wishlist__buttons-left ">Order Now</Button>
                <Button cls="btn-outline-success wishlist__buttons-right">Add more product</Button>
            </div>
            <Recomended />
            <Footer />
        </div>
    )
}

export default Wishlist
