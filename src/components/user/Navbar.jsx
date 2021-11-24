import React from 'react'
import Logo from '../../img/leaf1.png'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#">
            <h2>Mayaboti</h2>
            <h2><img src={Logo} alt="" className="img" />Shop</h2>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Organic</a>
              </li>
    
            </ul>
            <form className="d-flex">
              <div className="search">
                <input className="form-control me-2 search__input" type="search" placeholder="Search" aria-label="Search" />
                <button className="search__button" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
