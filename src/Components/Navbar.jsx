import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Our Products</h1>
      <Link to="/cart">
        <h3>Cart</h3>
      </Link>
    </div>
  );
};

export default Navbar;
