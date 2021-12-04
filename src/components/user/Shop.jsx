import React,{useEffect} from 'react'
import Footer from '../Basic_component/Footer'
import Navbar from './Navbar'
import ProductRow from './support_component/ProductRow'
import ShopSidebar from './support_component/ShopSidebar'
import DynamicTitle from '../UI/DynamicTitle'
import axios from 'axios'

function Shop() {

    useEffect(() => {
        DynamicTitle({
            title:"shop",
            metaDescription:'This is main shop page of this ecommerce'
        })

    }, [])

    return (
        <div className="shop">
            <Navbar />
            <div className="d-flex flex-md-row flex-column align-items-center align-items-md-baseline   shop__body">
                <div>
                 <ShopSidebar />
                </div>
                <div className="container">
                    <ProductRow />
                </div>
            </div>
            <Footer />
        </div>
    )
    
}

export default Shop
