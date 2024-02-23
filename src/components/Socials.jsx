import React from "react";
import "../styles/socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faDev,
  faHashnode,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

const Socials = ({ className }) => {
  return (
    <div className={`social-icons-container ${className}`}>
      <div className="footer-social-icons contact-social-icons">
        <a href="https://www.linkedin.com/in/robjeybee/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="fa-brands" />
        </a>
        <a href="https://github.com/robjeybee" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="fa-brands" />
        </a>
        <a href="https://twitter.com/robjeybee" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="fa-brands" />
        </a>
        <a href="https://www.instagram.com/robjeybee/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="fa-brands" />
        </a>
        <a href="https://mybootcampdiary.hashnode.dev/" target="_blank">
          <FontAwesomeIcon icon={faHashnode} className="fa-brands" />
        </a>
        <a
          href="https://open.spotify.com/show/1wX67b5fhcWK4TSB6ZGFO9?si=b35807d65d9d4616"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSpotify} className="fa-brands" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
