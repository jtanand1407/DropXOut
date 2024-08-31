import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ count }) => {
  return (
    <nav>
      <div className="nav-div">
        <Link className="link" to="/home">
          <span className="logo">Drop X Out</span>
        </Link>
        <div className="cart-div">
          <span className="basket">
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </span>
          <span className="count">{count}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
