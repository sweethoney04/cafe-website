import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <div className="d-flex justify-content-between bg-dark"
    style={{paddingLeft: 20, alignItems: 'center'}}
    >
      <div>
        <a className="navbar-brand" href="#">
          <p style={{color: 'white', marginBottom: 0, fontSize: 30}}>Budd&Copp</p>
        </a>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark"
        style={{height: 120}}
        >
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link active" to="/menu">
                Menu
              </Link>
              <Link className="nav-item nav-link active" to="/cart">
                Cart
              </Link>
              <Link className="nav-item nav-link active" to="/profile">
                Profile
              </Link>
              <Link className="nav-item nav-link active" to="/about-us">
                About Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>


  </>
  )
}
