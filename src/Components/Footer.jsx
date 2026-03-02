import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-col">
            <div className="logo">
              <div className="logo-box">🛍</div>
              <h3>ECommerce</h3>
            </div>

            <p className="footer-text">
              Crafting the future of retail with a focus on quality,
              sustainability, and effortless style. Join over 50k happy
              customers worldwide.
            </p>

            <div className="social-icons">
              <span><FaFacebookF /></span>
              <span><FaTwitter /></span>
              <span><FaInstagram /></span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Men's Collection</li>
              <li>Women's Collection</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li>Order Tracking</li>
              <li>Shipping Policy</li>
              <li>Returns & Exchanges</li>
              <li>Customer Service</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Install App</h4>
            <p className="small-text">
              From App Store or Google Play
            </p>

            <div className="app-buttons">
              <div className="app-btn">
                <FaApple />
                <span>Download on the App Store</span>
              </div>

              <div className="app-btn">
                <FaGooglePlay />
                <span>Get it on Google Play</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;