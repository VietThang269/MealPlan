import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault/LayoutDefault";
import "./App.css";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about-us" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
