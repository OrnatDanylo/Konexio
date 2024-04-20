import React from "react";
import "./StartNow.css";

function StartNow() {
  return (
    <div className="start-now-container">
      <div className="start-now-container-background"></div>{" "}
      <div className="start-now-content-container">
        <h2 className="start-now-content-header">
          Make your life easier immediately.
        </h2>{" "}
        <p className="start-now-content-text">
          Whether it is. We have made setting up a server extremely easy for
          you.
        </p>{" "}
        <a
          href="/en-US/products/gameserver"
          className="start-now-content-button"
        >
          Start now
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="arrow-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="start-now-content-arrow"
          >
            <path
              fill="currentColor"
              d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
              className=""
            ></path>
          </svg>{" "}
          <div className="ripples"></div>
        </a>
      </div>
    </div>
  );
}

export default StartNow;
