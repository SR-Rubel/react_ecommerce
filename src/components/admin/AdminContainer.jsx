import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Content from './Content'

function AdminContainer({children}) {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <Content >
                {
                    children
                }
            </Content>
        </div>
    )
}

export default AdminContainer
