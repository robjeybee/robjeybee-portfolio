import React from "react";
import "../styles/footer.css";
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
      <div className="footer-container">
        <div className="footer">
          <div className="footer content">
            <div className="footer-text">
              <h3>Rob Barber</h3>
              <p>junior fullstack developer</p>
              <p>
                This website was built from scratch using React and vanilla CSS
                by robjeybee{" "}
              </p>
            </div>

            <ul className="footer-icons-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/robjeybee/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/robjeybee" target="_blank">
                  <FontAwesomeIcon icon={faSquareGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/show/1wX67b5fhcWK4TSB6ZGFO9"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
              </li>
              <li>
                <a href="https://mybootcampdiary.hashnode.dev/" target="_blank">
                  <FontAwesomeIcon icon={faHashnode} />
                </a>
              </li>
            </ul>
            <p className="footer-text">2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
