import React from "react";
import "./Home.css";
import heroImage from "../assets/banner1.png";

const Home = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">

            <div className="col col-6 hero-text">
              <span className="tag">NEW ARRIVALS 2024</span>

              <h1>
                Redefine Your <br />
                Everyday <span>Style</span>
              </h1>

              <p>
                Discover our latest curated collection of premium apparel
                and accessories designed for the modern lifestyle.
              </p>

              <div className="hero-buttons">
                <button className="btn-primary">Shop Now</button>
                <button className="btn-outline">View Collections</button>
              </div>
            </div>

            <div className="col col-6"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;