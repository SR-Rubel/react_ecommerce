import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
        
        <Link to='/' className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">Ecommerce admin</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <a href="#" className="d-block">Rubel Hossain</a>
            </div>
            </div>
            {/* SidebarSearch Form */}
            <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                </button>
                </div>
            </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
                <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                    Dashboard
                    </p>
                </Link>
                
                </li>
                <li className="nav-item">
                <Link to="/categories" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                    Categories
                    </p>
                </Link>
                <Link to="/sub-categories" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                    Sub Categories
                    </p>
                </Link>
                <Link to="/products" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                    Products
                    </p>
                </Link>
                <Link to="/brand" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                    Brand
                    </p>
                </Link>
                </li>
                
            </ul>
            </nav>
            {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
        </aside>

    )
}

export default Sidebar
