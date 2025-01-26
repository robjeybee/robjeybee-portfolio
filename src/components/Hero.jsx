import React from "react";
import "../styles/hero.css";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <img src="/Rob .png" alt="" />
          <h1>Hey I’m Rob, and I am a junior fullstack developer.</h1>
          <p>
            Career switching into tech with a background in public relations and
            communications - specialising in <span>React</span> and{" "}
            <span>JavaScript</span>.
          </p>
          <p>
            Fancy a chat?{" "}
            <a href="#">
              Let's talk
              <FontAwesomeIcon
                icon={faArrowUpLong}
                className="fa-arrow-up-long"
              />
            </a>
          </p>
          <div className="hero-social-links">
            <ul>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Codewords</li>
              <li>Hashnode</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
