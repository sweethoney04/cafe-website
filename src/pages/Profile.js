import React from 'react'
import Header from'../components/Header';
import Footer from'../components/Footer';
export default function Profile() {
  return (
    <div>
      <Header/>
      <h2 style={{textAlign: 'Left', paddingLeft: 25, paddingRight: 25,}}>My Profile</h2>
      <div className="text-center">
      <img
          alt=""
          style={{ width: 150, height: 150, marginTop: 25, marginBottom: 25, }}
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
        />
        </div>
        <div class="border border-black p-2 mb-3 mt-3 border-opacity-20 w-75" style={{margin: "0 auto"}}>
        <div class="d-flex flex-column mb-3">
  <div class="p-2">Full Name: Chitlatda Phamisith</div>
  <div class="p-2">birthday: DD/MM/YYYY</div>
  <div class="p-2">Email: numxxxxxxx@gmail.com</div>
  <div class="p-2">Mobile: +856 20xxxxxxxx</div>
  <div class="p-2">Gender: xxxxx</div>
  <div class="p-2">Home address: xxxxxxxxx</div>
</div>
<div className="w-100" style={{ paddingLeft: 40 }}>
            <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-dark btn-lg w-50 mt-4">
              EDIT
            </button>
            </div>
            <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-dark btn-lg w-50 mt-4">
              CHANGE PASSWORD
            </button>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}
