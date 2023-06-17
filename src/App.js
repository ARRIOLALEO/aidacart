import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { MyContext, MyContextProvider } from "./context/MyContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Components/Cart";

function App() {
  return (
    <MyContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </MyContextProvider>
  );
}

export default App;
