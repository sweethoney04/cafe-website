import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Cart() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("products"));

    if (allProducts !== null) {
      setProducts(allProducts);
    }
    console.log(allProducts);
  }, []);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const subTotal = () => {
    if (products !== null) {
      const sum = products.reduce((accumulator, object) => {
        return accumulator + object.total;
      }, 0);
      return sum;
    }
  };
  return (
    <div>
      <Header />

      <h1 style={{ textAlign: "center" }}>Cart</h1>

      {/* table Product */}
      <div style={{ marginLeft: 80, marginRight: 80, marginTop: 20 }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products !== null &&
              products?.map((item, index) => {
                return (
                  <tr key={index}>
                    <th style={{ verticalAlign: "middle" }}>{index + 1}</th>
                    <td>
                      <img
                        style={{ verticalAlign: "middle" }}
                        alt=""
                        src={item?.productImg}
                        width={140}
                      />
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      {item?.productName}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      {numberWithCommas(item?.productPrice)} kip
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <div className="d-flex justify-content-start">
                        <a>
                          <img
                            alt=""
                            src={require("../assets/img/add.png")}
                            width={40}
                          />
                        </a>
                        <p
                          style={{
                            fontSize: 30,
                            marginLeft: 30,
                            marginRight: 30,
                            marginBottom: 20,
                          }}
                        >
                          {item?.quantity}
                        </p>
                        <a>
                          <img
                            alt=""
                            src={require("../assets/img/minus.png")}
                            width={40}
                          />
                        </a>
                      </div>
                    </td>
                    <td style={{ verticalAlign: "middle" }}>{item?.total}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* shipping address */}
        <div style={{ marginTop: 40 }}>
          <p>Shipping Address</p>
          <textarea
            className="form-control"
            aria-label="With textarea"
            style={{ height: 100 }}
          ></textarea>
        </div>
        {/*  order note and checkout */}
        <div className="d-flex flex-row mt-4">
          {/* Left */}
          <div className="w-100 p-2">
            <p>Order Note</p>
            <textarea
              className="form-control"
              aria-label="With textarea"
              style={{ height: 120 }}
            ></textarea>
          </div>
          <div className="w-100" style={{ paddingLeft: 40 }}>
            <div className="d-flex justify-content-between">
              <p style={{ fontWeight: "bold " }}>SUBTOTAL</p>
              <p>{subTotal()} kip</p>
            </div>
            <p>Shipping, taxes, and discount codes calculated at checkout.</p>
            <button type="button" className="btn btn-dark btn-lg w-100 mt-4">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
