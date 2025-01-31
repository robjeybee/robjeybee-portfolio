import React from "react";
import "../styles/hero.css";
import "../styles/index.css";

const Hero = () => {
  return (
    <>
      <div className="mobile-container desktop-container">
        <div className="mobile-content-container desktop-content-container">
          <img className="hero-img" src="/Rob .png" alt="" />
          <h1>Hey I’m Rob, and I am a junior fullstack developer.</h1>
          <p>
            Career switching into tech with a background in public relations and
            communications - specialising in React and JavaScript.
          </p>
          <a href="#">Fancy a chat? Let's talk</a>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Hero;
