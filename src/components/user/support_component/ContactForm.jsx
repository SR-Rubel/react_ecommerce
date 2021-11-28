import React from 'react'
import './ContactForm.scss'


function ContactForm() {
    return (
        <div className="contact">
            <form className="p-5">
            <div class="form row my-5">
                <div class="form-group col-md-6 mb-3">
                <label for="name">First Name</label>
                <input type="text" class="form-control" id="name" placeholder="first name" />
                </div>
                <div class="form-group col-md-6">
                <label for="name">Last Name</label>
                <input type="text" class="form-control" id="name" placeholder="Last name" />
                </div>
                
            </div>
            <div class="form-group my-5">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="form-group my-5">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="form row my-5">
                <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4">
                <label for="inputState">District</label>
                <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
                <div class="form-group col-md-2">
                <label for="inputZip">Post Office</label>
                <input type="text" class="form-control" id="inputZip" />
                </div>
            </div>
            <div class="form-group mt-3">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary mt-5">Order</button>
            </form>
        </div>
    )
}

export default ContactForm
