import React from "react";
import "./WeeklyBest.css";

import tshirt from "../assets/enhanced_border_1.png";
import shoe from "../assets/enhanced_border_2.png";
import caseImg from "../assets/enhanced_border_3.png";
import hoodie from "../assets/enhanced_border_4.png";

const WeeklyBest = () => {
  return (
    <section className="weekly-section">
      <div className="container">

        <div className="weekly-header">
          <div>
            <h2>Weekly Best Sellers</h2>
            <p>Our most loved products this week</p>
          </div>

          <div className="filter-tabs">
            <span className="active">All</span>
            <span>Clothing</span>
            <span>Accessories</span>
            <span>Gadgets</span>
          </div>
        </div>

        <div className="product-grid">

          <div className="product-card">
            <span className="badge hot">HOT</span>
            <div className="image-box">
              <img src={tshirt} alt="Tshirt" />
            </div>
            <h4>Premium Essential White Tee</h4>
            <p className="price">$49.00</p>
            <div className="colors">
              <span className="dot black"></span>
              <span className="dot blue"></span>
            </div>
          </div>

          <div className="product-card">
            <span className="badge sale">SALE</span>
            <div className="image-box sale-bg">
              <img src={shoe} alt="Shoe" />
            </div>
            <h4>Vibrant Runner Pro</h4>
            <p className="price">
              $129.00 <span className="old">$159.00</span>
            </p>
            <div className="colors">
              <span className="dot red"></span>
              <span className="dot black"></span>
            </div>
          </div>

          <div className="product-card">
            <div className="image-box beige">
              <img src={caseImg} alt="Case" />
            </div>
            <h4>Sleek Protection Case</h4>
            <p className="price">$25.00</p>
            <div className="colors">
              <span className="dot grey"></span>
              <span className="dot dark"></span>
            </div>
          </div>

          <div className="product-card">
            <span className="badge new">NEW</span>
            <div className="image-box">
              <img src={hoodie} alt="Hoodie" />
            </div>
            <h4>Cozy Knit Hoodie</h4>
            <p className="price">$75.00</p>
            <div className="colors">
              <span className="dot brown"></span>
              <span className="dot dark"></span>
            </div>
          </div>

        </div>

        <div className="load-btn">
          <button>Load More Products</button>
        </div>

      </div>
    </section>
  );
};

export default WeeklyBest;