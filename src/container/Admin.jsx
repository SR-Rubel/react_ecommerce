import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

function admin() {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <Content />
        </div>
    )
}

export default admin
