import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/user/Home'
import UserProfile from '../components/user/UserProfile'

function User() {
    return (
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/user/profile' component={UserProfile} />
        </Switch>
    )
}

export default User
