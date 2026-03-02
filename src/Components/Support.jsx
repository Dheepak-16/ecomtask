import React from "react";
import "./Support.css";
import { FaTruck, FaUndo, FaShieldAlt, FaHeadset } from "react-icons/fa";

const Support = () => {
  return (
    <section className="features-section">
      <div className="container">

        <div className="features-grid">

          <div className="feature-item">
            <div className="icon-box">
              <FaTruck />
            </div>
            <div>
              <h4>Free Delivery</h4>
              <p>On all orders over $150</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="icon-box">
              <FaUndo />
            </div>
            <div>
              <h4>Easy Returns</h4>
              <p>30 days return policy</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="icon-box">
              <FaShieldAlt />
            </div>
            <div>
              <h4>Secure Payment</h4>
              <p>100% secure checkout</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="icon-box">
              <FaHeadset />
            </div>
            <div>
              <h4>24/7 Support</h4>
              <p>Dedicated help center</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Support;