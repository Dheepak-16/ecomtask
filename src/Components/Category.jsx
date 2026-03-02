import React from "react";
import "./Category.css";

import shirt from "../assets/product_1.png";
import dress from "../assets/product_2.png";
import jacket from "../assets/product_3.png";
import bag from "../assets/product_4.png";
import shoe from "../assets/product_5.png";
import sneaker from "../assets/product_6.png";

const Category = () => {
  return (
    <section className="category-section">
      <div className="container">

        <div className="category-header">
          <div>
            <h2>Shop by Category</h2>
            <p>Explore our diverse range of categories</p>
          </div>

          <div className="view-all">
            View all Categories →
          </div>
        </div>

        <div className="category-grid">

          <div className="category-item">
            <div className="circle">
              <img src={shirt} alt="Shirts" />
            </div>
            <p>Shirts</p>
          </div>

          <div className="category-item">
            <div className="circle">
              <img src={dress} alt="Dresses" />
            </div>
            <p>Dresses</p>
          </div>

          <div className="category-item">
            <div className="circle">
              <img src={jacket} alt="Outerwear" />
            </div>
            <p>Outerwear</p>
          </div>

          <div className="category-item">
            <div className="circle">
              <img src={bag} alt="Gadgets" />
            </div>
            <p>Gadgets</p>
          </div>

          <div className="category-item">
            <div className="circle">
              <img src={shoe} alt="Shoes" />
            </div>
            <p>Shoes</p>
          </div>

          <div className="category-item">
            <div className="circle">
              <img src={sneaker} alt="Bags" />
            </div>
            <p>Bags</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Category;