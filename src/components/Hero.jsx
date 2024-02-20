import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <div className="hero-text-p">Hey there, I'm Rob</div>
        <h1 className="hero-text-h1">I’m a junior developer, career switching into tech with a background in media and communications.</h1>
        <a href="" className="hero-cta-btn">
          Let's talk<FontAwesomeIcon icon={faArrowRightLong} className="hero-faArrowRightLong"/>
        </a>
      </div>
    </div>
  );
};

export default Hero;
