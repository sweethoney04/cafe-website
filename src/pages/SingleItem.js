import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SingleItem() {
const location = useLocation();

const [quantity, setQuantity] = useState(1);


const itemData = location?.state?.data;

const onAddQuantity = () => {
  setQuantity(quantity + 1);
};

const onMinusQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

const onAddToCart = async () => {

  let productData = {
    productName : itemData?.name,
    productImg : itemData?.img,
    productPrice : itemData?.price,
    quantity : quantity,
    total: itemData?.price * quantity
  };

  const products = JSON.parse(localStorage.getItem('products'));

if (products === null) {
  let allProducts = [];
  allProducts.push(productData);

  localStorage.setItem('products', JSON.stringify(allProducts));
} else {
  products.push(productData);
  localStorage.setItem('products', JSON.stringify(products));
}
window.onload();
};
const onClearData = () => {
  localStorage.clear();
}

  return (
    <div>
      <Header />
      <div className="container" style={{ marginBottom: 50 }}>
        <div className="row">
          <div className="text-right">
            <img
              alt=""
              style={{ width: 200 }}
              src={itemData?.img}
            />
          </div>
          <div className="col-6">
            <h2>{itemData?.name}</h2>
            <p style={{ color: "#FFC93C", fontSize: 24 }}>{itemData?.price}</p>
            <div className="d-flex justify-content-start">
              <a onClick={onAddQuantity}>
                <img alt="" src={require("../assets/img/add.png")} width={40} />
              </a>
              <p
                style={{
                  fontSize: 30,
                  marginLeft: 30,
                  marginRight: 30,
                  marginBottom: 20,
                }}
              >
                {quantity}
              </p>
              <a onClick={onMinusQuantity}>
                <img
                  alt=""
                  src={require("../assets/img/minus.png")}
                  width={40}
                />
              </a>
            </div>
            <button onClick={onAddToCart}
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid",
                padding: "10px 20px",
                borderRadius: 30,
                marginTop: 50,
                color: "#0081C9",
              }}
            >
              add to cart
            </button>
            <button onClick={onClearData}
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid",
                padding: "10px 20px",
                borderRadius: 30,
                marginTop: 50,
                color: "#0081C9",
              }}
            >
              on clear data
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
