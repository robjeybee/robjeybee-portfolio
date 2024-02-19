import React from "react";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
            <div className="hero-content">
        <p>Hi my name's Rob</p>
        <h1>I'm a junior developer</h1>
          <p>I build websites like this one in React and more. I'm making a career switch into tech from public relations.</p>
          <button  className="hero-button">Let's talk →</button>
      </div>
       <div className="hero-content-img">
        <img className="hero-img" src="/images/robjeybee-blue.svg" alt="" />
      </div>
      </div>
    </div>
  );
};

export default Hero;
