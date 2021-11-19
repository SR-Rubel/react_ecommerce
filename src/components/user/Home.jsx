import React from 'react'
import Navbar from './Navbar'
import BrandsHome from './support_component/BrandsHome'
import Header from './support_component/Header'

function Home() {
    return (
        <>
        <Navbar />
        <div className="container">
            <Header />
        </div>
        <BrandsHome />
        </>
    )
}

export default Home