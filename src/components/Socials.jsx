import React from "react";
import "../styles/socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faInstagram, faDev, faHashnode, faSpotify } from "@fortawesome/free-brands-svg-icons";

const Socials = ({ className }) => {
  return (
    <div className={`social-icons-container ${className}`}>
      <div className="footer-social-icons contact-social-icons">
        <a href="https://www.linkedin.com/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://dev.to/">
          <FontAwesomeIcon icon={faDev} />
        </a>
        <a href="https://hashnode.com/">
          <FontAwesomeIcon icon={faHashnode} />
        </a>
        <a href="https://www.spotify.com/">
          <FontAwesomeIcon icon={faSpotify} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
