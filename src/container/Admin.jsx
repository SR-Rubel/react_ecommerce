import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Navbar from '../components/admin/Navbar'
import Sidebar from '../components/admin/Sidebar'
import Content from '../components/admin/Content'
import AddProduct from '../components/admin/AddProduct'
import Brand from '../components/admin/Brand'
import Category from '../components/admin/Category'
import SubCategory from '../components/admin/SubCategory'
import Products from '../components/admin/Products'
import Dashboard from '../components/admin/Dashboard'

function admin() {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <Content >
                <Switch>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/categories' component={Category} />
                    <Route exact path='/sub-categories' component={SubCategory} />
                    <Route exact path='/add-product' component={AddProduct} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/brand' component={Brand} />
                </Switch>
                {/* <Modal details="add category" /> */}
            </Content>
        </div>
    )
}

export default admin
