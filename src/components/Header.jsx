import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="navbar">
          <div className="nav-logo">
            <img
              className="robjeybee-lightning-bolt"
              src="/robjeybee-lightning-bolt.svg"
              alt=""
            />
            <div>robjeybee.</div>
          </div>
          <div className="nav-links">
            <a href="" className="linkedin-nav-icon">
              LinkedIn
            </a>
            <a href="" className="github-nav-icon">
              GitHub
            </a>
            <a href="" className="lets-talk-nav-btn">
              Let's talk
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="faArrowRightLong"
              />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faBars} className="faBars" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
