import React from "react";
import "../styles/hero.css";
import "../styles/index.css";

const Hero = () => {
  return (
    <>
      <div className="mobile-container desktop-container" id="home">
        <div className="mobile-content-container desktop-content-container mobile-text-align-center" id="home">
          <img className="hero-img" src="/Rob .png" alt="" />
          <h1 className="desktop-h1">Hey I’m Rob, and I am a junior fullstack developer.</h1>
          <div className="desktop-container-70pc">
              <p className="font-size-20 line-height-30 line-height-26">
            Career switching into tech with a background in public relations and
              communications - specialising in React and JavaScript.
              <p className="hero-cta"><a className="cta-link" href="#">Fancy a chat? Let's talk</a></p>
            </p>
          </div>
          
           
        </div>
       
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Hero;
