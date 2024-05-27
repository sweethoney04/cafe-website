import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("products"));

    if (allProducts !== null) {
      setProducts(allProducts);
    }
    console.log(allProducts)
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <a className="navbar-brand" href="#">
            <img src={require("../assets/img/BuddandCopp.png")} height="80" />
          </a>
        </div>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ height: 100 }}
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
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ height: 100 }}
          >
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/cart">
                  <div style={{ position: "relative" }}>
                    <img
                      src={require("../assets/img/shopping-cart-empty-side-view.png")}
                      height="28"
                    />
                    <p
                      style={{
                        position: "absolute",
                        backgroundColor: "red",
                        fontWeight: "bold",
                        color: "#ffffff",
                        padding: "0 5px",
                        borderRadius: 20,
                        top: "16px",
                        right: "-12px",
                      }}
                    >
                      {products?.length}
                    </p>
                  </div>
                </Link>
                <Link className="nav-item nav-link active" to="/login">
                  Login
                </Link>
                <Link className="nav-item nav-link active" to="/register">
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
