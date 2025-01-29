import React from "react";
import "../styles/hero.css";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <div>
            <div className="hero-content">
              <div className="hero-content-intro">
                <img src="/Rob .png" alt="" />
                <h1>Hey I’m Rob, and I am a <br></br> junior fullstack developer.</h1>
                <p>
                  Career switching into tech with a background in public
                  relations and communications - specialising in{" "}
                  <span>React</span> and <span>JavaScript</span>.
                </p>

                <div className="hero-content-cta">
                  <p>
                    Fancy a chat?{" "}
                    <a href="#contact">
                      Let's talk
                      <FontAwesomeIcon
                        icon={faArrowUpLong}
                        className="fa-arrow-up-long"
                      />
                    </a>
                  </p>
                </div>
              </div>
              <div className="hero-social-links">
                <ul className="hero-social-links-list">
                  <li>
                    <a href="https://www.linkedin.com/in/robjeybee/" target="_blank">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://github.com/robjeybee" target="_blank">GitHub</a>
                  </li>
                  <li>
                    <a href="https://open.spotify.com/show/1wX67b5fhcWK4TSB6ZGFO9" target="_blank">Codewords</a>
                  </li>
                  <li>
                    <a href="https://mybootcampdiary.hashnode.dev/" target="_blank">Hashnode</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffd700" fill-opacity="1" d="M0,96L1440,256L1440,0L0,0Z"></path>
</svg>
      </div>
    </>
  );
};

export default Hero;
