import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function AboutUs() {
  return (
    <div>
      <Header />
      <div className="text-center">
        <img
          style={{
            width: "80%",
            height: 500,
            paddingLeft: 30,
            paddingRight: 30,
            textAlign: "center",
          }}
          src="https://readthecloud.co/wp-content/uploads/2021/12/kappra-cafe-share.jpg"
        />
        <h4 style={{ textAlign: "center", marginTop: 25, marginBottom: 25 }}>
          ABOUT US
        </h4>
      </div>
      <p
        style={{
          textAlign: "center",
          paddingLeft: 70,
          paddingRight: 70,
          matginBottom: 25,
        }}
      >
        Bud&Copp serves some of the finest coffee’s available in Laos prepared
        by our Master Baristas. We roast our coffees live and on demand so that
        we can deliver the freshest coffee available anywhere. You can find an
        extensive assortment of home brewing accessories in our shop and our web
        shop. Our staff is happy to recommend which equipment suits your taste
        and needs. Use our fresh roasted Hill tribe coffee beans for your home
        brewing
      </p>
      <h4 style={{ textAlign:'center', marginTop: 25, marginBottom: 25,}}>CONTACT</h4>
      <div className="input-group mb-4 w-50" style={{ margin: "0 auto" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3 w-50" style={{ margin: "0 auto" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="d-flex justify-content-center w-50 mb-3" style={{margin: "0 auto"}}>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Massage</textarea>
          </div>
          <div class="d-flex justify-content-center w-50 mb-3" style={{margin: "0 auto"}}>
          <button type="button" class=" btn btn-dark  w-100 mb-3" >Send Massage</button>
          </div>
          <div class="d-flex flex-column mb-3">
  <div class="p-2">Phone: +856 20xxxxxxxx</div>
  <div class="p-2">Email: numxxxxxx@gmail.com</div>
  <div class="p-2">Vatsop village, sisattanak district, Vientiane Capital</div>
</div>
      <Footer />
    </div>
  );
}
