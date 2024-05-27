import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Menu from './pages/Menu'
import SingleItem from './pages/SingleItem'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'; 
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
<BrowserRouter>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="single-item" element={<SingleItem />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
