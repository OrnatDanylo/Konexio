import React from "react";
import "./AboutUs.css";
import AboutUsGrid from "./AboutUsGrid.js";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-server-room-img-container">
        <div className="bg-gradient-to-t"></div>{" "}
        <img
          alt="Konexio's server room"
          src="/img/server_room.png"
          className="about-us-server-room-img"
        />
      </div>
      <div class="about-us-content-container">
        <div className="about-us-content-header">
          <h1 className="about-us-content-header-frase">
            YOUR WORLD! YOUR RULES!
          </h1>{" "}
          <div className="about-us-content-header-line"></div>{" "}
          <div className="about-us-content-header-text">
            Nitrado - About Us ➤ Top Multiplayer Gaming ✓ best technology ✓
            worldwide servers ✓ excellent customer service ✓
          </div>
        </div>
        <div className="about-us-content-konexio">
          <h2 className="about-us-content-konexio-h2">This is Konexio</h2>
        </div>
        <AboutUsGrid />
      </div>
    </div>
  );
}

export default AboutUs;
