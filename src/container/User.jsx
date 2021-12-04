import React from 'react'
import '../scss/main.scss'
import { Route, Switch } from 'react-router'
import Home from '../components/user/Home'
import Shop from '../components/user/Shop'
import SingleProduct from '../components/user/SingleProduct'
import UserProfile from '../components/user/UserProfile'
import Test from '../components/Test'
import Cart from '../components/user/Cart'
import Wishlist from '../components/user/Wishlist'
import Order from '../components/user/Order'
import OrderConfirmation from '../components/user/OrderConfirmation'

function User() {

    return (
        <>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/single-product/:id' component={SingleProduct} />
            <Route exact path='/user/profile' component={UserProfile} />
            <Route exact path='/user/cart' component={Cart} />
            <Route exact path='/user/wishlist' component={Wishlist} />
            <Route exact path='/user/order' component={Order} />
            <Route exact path='/user/order-confirmation' component={OrderConfirmation} />

            {/* -------------test path---------- */}
            <Route exact path='/test' component={Test} />
        </Switch>
        </>
    )
}

export default User
