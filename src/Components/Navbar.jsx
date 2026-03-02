import React from "react";
import "./Navbar.css";
import profile from '../assets/profile.jpg';
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaBars
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row navbar-row">

          <div className="col col-3 logo-col">
            <div className="logo-box">🛍️</div>
            <h2>ECommerce</h2>
          </div>

          <div className="col col-6 nav-links">
            <ul>
              <li>Home</li>
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
              <li className="sale">Sale</li>
            </ul>
          </div>

          <div className="col col-3 nav-icons">
            <FaSearch />
            <FaHeart />
            <div className="cart">
              <FaShoppingBag />
              <span>2</span>
            </div>
            <img
              src={profile}
              alt="profile"
              className="profile"
            />
            <FaBars className="menu-icon" />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;