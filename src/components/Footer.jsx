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
          <div>
            <h3>Rob Barber</h3>
            <p>junior fullstack developer</p>
            <p>
              This website was built from scratch using React and vanilla CSS by
              robjeybee{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Footer;
