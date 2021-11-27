import React from 'react'
import Recomended from '../Basic_component/Recomended'
import SingleproductSlider from './support_component/SingleproductSlider'
import Button from '../UI/Button'
import Navbar from './Navbar'
import Footer from '../Basic_component/Footer'

function SingleProduct(
    {
        productTitle = "Product Title",
        brand = "brand name",
        category = "category name",
        subCategory= "sub category name",
        price="$200",
        details= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel earum quas reiciendis voluptatem, vero, beatae magni illo nihil expedita ipsum similique sunt deleniti! Corporis voluptates quis quia explicabo ipsum!"
    }
) {
    return (
        <>
        
        <div className="sproduct">
            <Navbar />
            <div className="row product-body">
                <div className="col-md-7 sproduct__left">
                    <SingleproductSlider />
                </div>
                <div className="col-md-5 pt-5 pl-5 sproduct__right">
                    <div className="sproduct__right--specification">
                        <h1>{productTitle}</h1> <br/>
                        <h2>Brand: </h2> <p>{brand}</p> <br/>
                        <h2>Category: </h2> <p>{category}</p> <br/>
                        <h2>Sub Category </h2> <p>{subCategory}</p> <br/>
                        <h2>price </h2> <p>{price}</p>
                    </div>

                    <div className="d-flex flex-column  mt-4 sproduct__right--btn">
                        <div className="d-flex">
                            <Button>Add to cart</Button>
                            <Button 
                            text="Add to wishlist" 
                            cls="btn-outline-success ml-5"
                            >Add to wishlist</Button>
                        </div>
                        <Button 
                            cls="btn-outline-success mt-4"
                            width="50%"
                        >Order now</Button>
                    </div>

                    <div className="sproduct__right--details">
                        <h1 className='text-center mt-5 pt-5'>Product Details</h1>
                        <p>{details}</p>
                    </div>

                </div>
            </div>

            <div className="mt-5 px-5 mx-5">
                <Recomended />
            </div>
            
        </div>

        <Footer />
        </>
    )
}

export default SingleProduct
