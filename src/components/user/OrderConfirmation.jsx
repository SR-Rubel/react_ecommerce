import React from 'react'
import Navbar from './Navbar'
import Button from '../UI/Button'

function OrderConfirmation() {
    return (
        <div className="orderComplete">
            <Navbar />
            <div className="orderComplete__body">
                <div className="orderComplete__text">
                    <h2 className="text-center">Your order has been placed </h2>
                    <h4 className="text-center mt-5">Thanks a lot for shopping with us </h4>
                </div>
                
                <h1 className="text-center mt-5">Shoping Details</h1>

                <div className="row justify-content-center orderComplete__details">
                    <div style={{width:"80vw"}} className="d-flex flex-column flex-sm-row justify-content-around align-items-around">
                        <div className="d-flex flex-row flex-sm-column justify-content-between">
                            <h4>ORDER NUMBER</h4>
                            <hr />
                            <h4>452</h4>
                        </div>
                        <div className="d-flex flex-row flex-sm-column justify-content-between">
                            <h4>DATE</h4>
                            <hr />
                            <h4>25/2/2021</h4>
                        </div>
                        <div className="d-flex flex-row flex-sm-column justify-content-between">
                            <h4>TOTAL</h4>
                            <hr />
                            <h4>$600</h4>
                        </div>
                        <div className="d-flex flex-row flex-sm-column justify-content-between">
                            <h4>PAYMENT METHOD</h4>
                            <hr />
                            <h4>Cash On Delivery</h4>
                        </div>
                    </div>
                </div>
                <Button>CONTINUE SHOPPING</Button>
            </div>
        </div>
    )
}

export default OrderConfirmation
