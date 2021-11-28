import React from 'react'
import Navbar from './Navbar'
import ContactForm from './support_component/ContactForm'
import ContactForm2 from './support_component/ContactForm2'
import ListProduct2 from './support_component/ListProduct2'

export default function Order() {
    return (
        <div className="order">
            <Navbar />
            <div className="row order__body">
                <div className="col-12 col-md-8 order__left">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-bangladesh-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Within Bangladesh</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-other-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">other country</a>
                    </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-bangladesh-tab">
                        <ContactForm />
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-other-tab">
                        <ContactForm2 />
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 order__right">
                    <div className="d-flex flex-column">
                        <div className="order__right-product">
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                            <ListProduct2 img={process.env.PUBLIC_URL+"/img/juice.png"} />
                        </div>

                        <div className="d-flex justify-content-around mr-3 p-5">
                            <h3>TOTAL</h3>
                            <h3>$300</h3>
                        </div>

                    </div>
                  
                </div>

                {/* ----------select default payment option---------- */}
                <div className="col-12 p-5">
                    <h2>Payment</h2>
                    <div className="col-8 d-flex justify-content-around">
                        <div className="form-check">
                            <input type="radio" name="cashOnDelivery" id="cashOnDelivery" className="form-check-input" />
                            <div for="cashOnDelivery" className="form-check-label">Cash On Delivery</div>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="paypal" id="paypal" className="form-check-input" />
                            <div for="paypal" className="form-check-label">PayPal</div>
                        </div>
                    </div>
                </div>

                <div className="col-12 p-5">
                    {/* -------------making two tabs for payment------------ */}
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-bdpayment-tab" data-toggle="pill" href="#pills-bd" role="tab" aria-controls="pills-bd" aria-selected="true">Bangladesh</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-otherpayment-tab" data-toggle="pill" href="#pills-other" role="tab" aria-controls="pills-other" aria-selected="false">other country</a>
                    </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                    {/* =====tab 1===== */}
                    <div class="tab-pane fade show active" id="pills-bd" role="tabpanel" aria-labelledby="pills-bdpayment-tab">
                        <ul className="d-flex flex-column flex-sm-row justify-content-around">
                            {/* ----------------payment method images for international----------- */}
                            <li><a href="#"> <img src={process.env.PUBLIC_URL+ "/img/juice.png"} alt="" width="200px" /> </a></li>
                            <li><a href="#"> <img src={process.env.PUBLIC_URL+ "/img/juice.png"} alt="" width="200px" /> </a></li>
                            <li><a href="#"> <img src={process.env.PUBLIC_URL+ "/img/juice.png"} alt="" width="200px" /> </a></li>
                            <li><a href="#"> <img src={process.env.PUBLIC_URL+ "/img/juice.png"} alt="" width="200px" /> </a></li>

                        </ul>
                    </div>
                    {/* ========tab 2======= */}
                    <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-otherpayment-tab">
                        <ul className="d-flex flex-column flex-sm-row justify-content-around">
                            {/* ------------------payment mehtod images for bangladesh---------------- */}
                            <li><a href="#"> <img src={process.env.PUBLIC_URL+ "/img/juice2.png"} alt="" width="200px" /> </a></li>
                            <li><a href="#"> <img src={process.env.PUBLIC_URL+ "/img/juice2.png"} alt="" width="200px" /> </a></li>
                            <li><a href="#"> <img src={process.env.PUBLIC_URL+ "/img/juice2.png"} alt="" width="200px" /> </a></li>
                            <li><a href="#"> <img src={process.env.PUBLIC_URL+ "/img/juice2.png"} alt="" width="200px" /> </a></li>

                        </ul>
                    </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
