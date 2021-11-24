import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/user/Home'
import Shop from '../components/user/Shop'
import SingleProduct from '../components/user/SingleProduct'
import UserProfile from '../components/user/UserProfile'
import Test from '../components/Test'
import Cart from '../components/user/Cart'

function User() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/single-product' component={SingleProduct} />
            <Route exact path='/user/profile' component={UserProfile} />
            <Route exact path='/user/cart' component={Cart} />

            {/* -------------test path---------- */}
            <Route exact path='/test' component={Test} />
        </Switch>
    )
}

export default User
