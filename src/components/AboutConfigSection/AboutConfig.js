import React from "react";
import "./AboutConfig.css";
import RigAnimated from "./RigAnimated";

function AboutConfig() {
  return (
    <section className="about-config-section">
      <div className="about-config-container">
        <div className="about-config-text-container">
          <h2 class="about-config-text-header">
            Change configs easily and at any time.
          </h2>
          <p class="about-config-text-about">
            With the Konexio server configurator you can change the configs on
            your server whenever you want. Easy as pie. So you don't have to
            commit to one server.
          </p>
          <p class="about-config-text-links">
            Konexio is the{" "}
            <a href="/company/about-us" class="text-yellow">
              world's leading server hoster
            </a>{" "}
            and offers{" "}
            <a href="/company/datacenters" class="text-yellow">
              high-quality servers
            </a>{" "}
            at a{" "}
            <a
              href="https://server.nitrado.net/usa/servicetypes/prices"
              class="text-yellow"
            >
              low price
            </a>{" "}
            that are available immediately.
          </p>
        </div>
        <div className="about-config-animation-container">
          <RigAnimated />
        </div>
      </div>
    </section>
  );
}

export default AboutConfig;
