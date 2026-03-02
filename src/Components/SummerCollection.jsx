import React from "react";
import "./SummerCollection.css";
import bannerImg from "../assets/banner2.png";

const SummerCollection = () => {
  return (
    <section className="summer-section">
      <div
        className="summer-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="dark-overlay"></div>

        <div className="banner-content">
          <span className="tag">LIMITED EDITION</span>

          <h2>
            Summer 2024 <br />
            Collection
          </h2>

          <p>
            Embrace the warmth with our new curated lightweight fabrics.
            Stylish comfort meets modern aesthetics.
          </p>

          <button className="explore-btn">
            Explore the Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default SummerCollection;