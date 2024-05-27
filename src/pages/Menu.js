import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function Menu() {
  // product data
  const productData = [
    {
      name: "Croissant hamcheese",
      price: 45000,
      img: "https://www.artis-coffee.com/wp-content/uploads/2020/03/Untitled-1-03-1-600x600.jpg",
    },
    {
      name: "tuna Sanwich",
      price: 30000,
      img: "https://www.artis-coffee.com/wp-content/uploads/2020/03/Untitled-1-07-600x600.jpg",
    },
    {
      name: "BEEF PASTRAMI WITH BABY GREENS AND PICKLES",
      price: 30000,
      img: "https://www.artis-coffee.com/wp-content/uploads/2020/03/Untitled-1-10-600x600.jpg",
    },
  ];

  const drinksData = [
    {
      img: "https://www.artis-coffee.com/wp-content/uploads/2020/10/storymenu-01-scaled-600x1067.jpg",
    },
    {
      img: "https://www.artis-coffee.com/wp-content/uploads/2020/10/storymenu-02-scaled-600x1067.jpg",
    },
    {
      img: "https://www.artis-coffee.com/wp-content/uploads/2020/10/%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-Artis-coffee-04-scaled-600x1067.jpg",
    },
  ];

  // render title compenent
  function renderTitle(name) {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="d-flex justify-content-center">
          <div style={{ marginTop: 10 }}>_________________</div>
          <h1 style={{ marginLeft: 20, marginRight: 20 }}>{name}</h1>
          <div style={{ marginTop: 10 }}>_________________</div>
        </div>
      </div>
    );
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  // Render
  return (
    <>
      <Header />

      {renderTitle("Foods")}
      <div className="container">
        <div className="row">
          {productData.map((item, index) => {
            return (
              <div key={index}
              className="col-4" style={{ marginBottom: 50 }}>
                <img src={item.img} alt="" style={{ width: 300 }} />
                <h4 style={{ marginTop: 20 }}>{item.name}</h4>
                <p style={{ color: "#FFC93C" }}>
                  {numberWithCommas(item.price)} kip
                </p>
                <div>
                  <Link
                    style={{
                      color: "#0081B4",
                      borderWidth: 1,
                      borderColor: "#0081B4",
                      borderStyle: "solid",
                      padding: 10,
                      borderRadius: 20,
                    }}
                    to="/single-item"
                    state={{ data: item }}
                  >
                    view Item
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button>test</button>

      {renderTitle("Drinks")}
      <div className="container">
        <div className="row">
          {drinksData.map((item, index) => {
            return (
              <div
              key={index}
                className="col-4"
                style={{ marginBottom: 50, marginTop: 20 }}
              >
                <img src={item.img} alt="" style={{ width: 300 }} />
              </div>
            );
          })}
        </div>
      </div>

      {renderTitle("Pastries")}
      {renderTitle("Coffee")}
      <div className="container" style={{ marginTop: 20, marginBottom: 50 }}>
        <div className="row">
          <div className="col-6">
            FROM FARM TO CUP Our Farm to Cup coffee sourcing model incorporates
            three pillars of sustainability: social, economical, and
            environmental. We maintain strong, trusting relationships with the
            producers and farms where we source our coffee. We consistently pay
            well above Fair Trade prices to our suppliers in order to provide
            financial stability for them and their workers. We also prioritize
            working with producers who reduce their environmental impact through
            water conservation, forest preservation, and shade management.
          </div>
          <div className="col-6">
            <img
              alt=""
              style={{ width: 550 }}
              src="https://cdn.shopify.com/s/files/1/0084/0826/8890/files/coffee-header-burlap_750x.png?v=1635193334"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
