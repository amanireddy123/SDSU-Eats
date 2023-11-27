import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Login from './Components/Login';
import Home from './Components/index1.js';
import Orders from './Components/MyOrders';
import About from './Components/AboutUs';
import Items1 from './Components/items1.js';
import MyCart from './Components/MyCart.js';
import Payment from './Components/Payment'
import Register from './Components/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Navbar included in routes where it should be displayed */}
        <Route path="/" element={<>
          <Login />
        </>} />
        <Route path='/home' element={<>
          <Navbar />
          <Home />
        </>} />
        <Route path="/about" element={<>
          <Navbar />
          <About />
        </>} />
        <Route path="/myorders" element={<>
          <Navbar />
          <Orders />
        </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/starbucks" element={<>
          <Navbar />
          <Items1 />
        </>} />
        <Route path="/MyCart" element={<>
          <Navbar />
          <MyCart />
        </>} />
        <Route path="/payment" element={<>
          <Navbar />
          <Payment />
        </>} />
        <Route path="/register" element={<>
          <Register />
        </>} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
