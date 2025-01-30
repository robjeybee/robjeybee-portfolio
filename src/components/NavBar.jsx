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
            <a className="nav-logo" href="#home">
              <h1>robjeybee</h1>
            </a>
          </nav>
          <div className="desktop-nav">
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
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
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="mobile-nav-menu-list-item">
            <a href="#blogs" onClick={closeMenu}>
              Blogs
            </a>
          </li>
          <li className="mobile-nav-menu-list-item">
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <ul className="mobile-social-icons">
          <li>
            <a href="https://www.linkedin.com/in/robjeybee/" target="_blank">
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
      </div>
    </>
  );
};

export default Header;
