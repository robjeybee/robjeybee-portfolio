import React from "react";
import "../styles/hero.css";
import "../styles/index.css";

const Hero = () => {
  return (
    <>
      <div className="mobile-container desktop-container">
        <div
          className="mobile-content-container desktop-content-container mobile-text-align-center"
          id="home"
        >
          <img className="hero-img" src="/Rob .png" alt="" />
          <h1 className="desktop-h1">
            Hey I’m Rob, and I am a fullstack developer.
          </h1>
          <div className="desktop-container-70pc">
            <p className="font-size-20 line-height-30 line-height-26">
              Specialising in React and JavaScript, I bring strong problem-solving and communication skills. With a background in PR, I build dynamic web applications.
              <p className="hero-cta">
                <a className="cta-link" href="#contact">
                  Fancy a chat? Let's talk
                </a>
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Hero;
