import React, { useState } from "react";
import "../styles/navbar.css";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareGithub,
  faSpotify,
  faHashnode,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="header-container">
           <div className="header">
        <nav className="nav">
          <h1 className="nav-logo">robjeybee</h1>
        </nav>
        <div className="desktop-nav">
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-hamburger-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isMenuOpen ? faX : faBars}
            className="fa-bars fa-x"
          />
        </div>
      </div>
      </div>
      <div
        className={`mobile-nav-menu ${
          isMenuOpen ? "menu-open" : "menu-closed"
        }`}
      >
        <ul className="mobile-nav-menu-list">
          <li className="mobile-nav-menu-list-item">
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li className="mobile-nav-menu-list-item">
            <a href="#blogs" onClick={closeMenu}>Blogs</a>
          </li>
          <li className="mobile-nav-menu-list-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="mobile-social-icons">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHashnode} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
