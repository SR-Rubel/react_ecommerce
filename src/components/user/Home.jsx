import React from 'react'
import Navbar from './Navbar'
import BrandsHome from './support_component/BrandsHome'
import Header from './support_component/Header'
import TopProductSlider from './TopProductSlider'

function Home() {
    return (
        <>
        <Navbar />
        <div className="container">
            <Header />
        </div>
            <TopProductSlider />
        <BrandsHome />
        </>
    )
}

export default Home