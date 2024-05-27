import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <img
        style={{
          width: "100%",
          height: 600,
          paddingLeft: 30,
          paddingRight: 30,
        }}
        src="https://images.services.kitchenstories.io/luvQHcYDy1E-0D3zi5Zo-3TtTlA=/1200x630/images.kitchenstories.io/wagtailOriginalImages/R2358-photo-final-1-16x9.jpg"
      />
      <h4 style={{ textAlign: "center", marginTop: 25 }}>
        WELCOME TO BUDD&COPP
      </h4>

      <div className="d-flex justify-content-around" style={{ marginBottom: 30 }}>
        <Link to="/menu">
        <div
          style={{
            width: 230,
            borderWidth: 1,
            borderColor: "#C58940",
            borderStyle: "solid",
            textAlign: "center",
            borderRadius: 40,
          }}
        >
          <img
            style={{ width: "190", height: 70, marginTop: 25 }}
            src="https://cdn-icons-png.flaticon.com/128/2965/2965655.png"
          />
          <p style={{ textAlign: "center", marginTop: 20 }}>Pastries</p>
        </div>
        </Link>
        <Link to="/menu">
        <div
          style={{
            width: 230,
            borderWidth: 1,
            borderColor: "#C58940",
            borderStyle: "solid",
            textAlign: "center",
            borderRadius: 40,
          }}
        >
          <img
            style={{ width: "190", height: 70, marginTop: 25 }}
            src="https://cdn-icons-png.flaticon.com/128/685/685352.png"
          />
          <p style={{ textAlign: "center", marginTop: 20 }}>Foods</p>
        </div>
        </Link>
        <Link to="/menu">
        <div
          style={{
            width: 230,
            borderWidth: 1,
            borderColor: "#C58940",
            borderStyle: "solid",
            textAlign: "center",
            borderRadius: 40,
          }}
        >
          <img
            style={{ width: "190", height: 70, marginTop: 25 }}
            src="https://cdn-icons-png.flaticon.com/128/1268/1268879.png"
          />
          <p style={{ textAlign: "center", marginTop: 20 }}>Coffee</p>
        </div>
        </Link>
      </div>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <h4 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
          Review
        </h4>
        <img
          alt=""
          style={{ width: 100, height: 100 }}
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
        />
        <p>Good</p>
        <img
          style={{ width: 80, height: 80 }}
          src="https://cdn-icons-png.flaticon.com/512/992/992000.png"
        />
        <h5>Honey Sweet</h5>
        <p>Infuencer</p>
      </div>
      <Footer />
    </>
  );
}
