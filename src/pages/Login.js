import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}>
        <img src={require("../assets/img/BuddandCopp.png")} height="80" />

        <h3>Login</h3>

        {/* Login form */}
        <div className="input-group mb-4 w-50" style={{ margin: "0 auto" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
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
              Login
            </button>
      </div>
      <Footer />
    </div>
  );
}
