import React from "react";
import AboutConfig from "components/AboutConfigSection/AboutConfig";
import AboutUs from "components/AboutUsSection/AboutUs";
import StartNow from "components/StartNow/StartNow";
import "./Home.css";

function Home() {
  return (
    <div>
      <AboutUs />
      <AboutConfig />
      <div className="mx-auto">
        <hr id="faqSection" className="border-gray-600"></hr>
      </div>
      <StartNow />
    </div>
  );
}

export default Home;
