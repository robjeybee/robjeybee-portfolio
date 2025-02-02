import React from "react";
import "../styles/footer.css";
import "../styles/index.css";
import {
  faLinkedin,
  faSquareGithub,
  faSpotify,
  faHashnode,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="mobile-container desktop-container">
        <div className="mobile-content-container desktop-content-container text-align-center">
          <div className="footer-content">
            <div className="footer-text">
              <h3>Rob Barber</h3>
            <p>junior fullstack developer</p>
            <p>
              This website was built from scratch using React and vanilla CSS by
              robjeybee{" "}
            </p>
            </div>
            <div className="footer-icons">
              <a href="https://www.linkedin.com/in/robjeybee/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                          </a>
              <a href="https://github.com/robjeybee" target="_blank">
                            <FontAwesomeIcon icon={faSquareGithub} />
                          </a>
              <a
                            href="https://open.spotify.com/show/1wX67b5fhcWK4TSB6ZGFO9"
                            target="_blank"
                          >
                            <FontAwesomeIcon icon={faSpotify} />
              </a>
              <a href="https://mybootcampdiary.hashnode.dev/" target="_blank">
                            <FontAwesomeIcon icon={faHashnode} />
                          </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
