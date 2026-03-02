import React from "react";
import "./TrendingNow.css";

import model from "../assets/trending1.png";
import hoodie from "../assets/enhanced_soft_border_1.png";
import tee from "../assets/enhanced_soft_border_2.png";
import sneaker from "../assets/enhanced_soft_border_3.png";
import runner from "../assets/enhanced_soft_border_4.png";

const TrendingNow = () => {
  return (
    <section className="trending-section">
      <div className="container">

        <div className="section-title">
          <h2>Trending Now</h2>
          <div className="underline"></div>
        </div>

        <div className="trending-grid">

          <div
            className="feature-card"
            style={{ backgroundImage: `url(${model})` }}
          >
            <div className="feature-overlay">
              <h3>Urban Essentials</h3>
              <p>Shop the look for city explorers</p>
              <span className="shop-link">Shop Look</span>
            </div>
          </div>

          <div className="product-card">
            <img src={hoodie} alt="" />
            <h4>Midnight Streetwear Hoodie</h4>
            <p>$89.00</p>
          </div>

          <div className="product-card">
            <img src={tee} alt="" />
            <h4>Retro Oversized Tee</h4>
            <p>$35.00</p>
          </div>

          <div className="product-card">
            <img src={sneaker} alt="" />
            <h4>Clean White Sneakers</h4>
            <p>$110.00</p>
          </div>

          <div className="product-card">
            <img src={runner} alt="" />
            <h4>Lightweight Minimal Runner</h4>
            <p>$95.00</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrendingNow;