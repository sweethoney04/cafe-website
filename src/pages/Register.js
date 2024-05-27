import React from 'react'
import Header from'../components/Header';
import Footer from'../components/Footer';
export default function Register() {
  return (
    <div>
      <Header/>
      <div style={{ textAlign: "center" }}>
        <img src={require("../assets/img/BuddandCopp.png")} height="80" />

        <h3>Register</h3>

        {/* Login form */}
        <div className="input-group mb-4 w-50" style={{ margin: "0 auto" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            aria-label="Full Name"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-4 w-50" style={{ margin: "0 auto" }}>
          <input
            type="text"
            className="form-control"
            placeholder="E-mail"
            aria-label="E-mail"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3 w-50" style={{ margin: "0 auto" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </div>
        <button type="button" className="btn btn-dark btn-lg w-50 mb-3">
              Create your account
            </button>
      </div>
      <Footer/>
    </div>
  );
}
