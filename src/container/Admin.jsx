import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Navbar from '../components/admin/Navbar'
import Sidebar from '../components/admin/Sidebar'
import Content from '../components/admin/Content'
import Datatable from '../components/admin/Datatable'
import Modal from '../components/admin/Modal'

function admin() {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <Content >
                <Switch>
                    <Route exact path='/dashboard' component={'dashboard'} />
                    <Route exact path='/categories' component={Datatable} />
                </Switch>
                <Modal />
            </Content>
        </div>
    )
}

export default admin
