import React, { useState } from "react";
import "../styles/navbar.css";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="header">
        <nav className="nav">
          <h1 className="nav-logo">robjeybee</h1>
        </nav>
        <div className="nav-hamburger-bars" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faX : faBars} className="fa-bars" />
        </div>
      </div>
      <div className={`mobile-nav-menu ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
        <ul className="mobile-nav-menu-list">
          <li className="mobile-nav-menu-list-item"><a href="#">Projects</a></li>
          <li className="mobile-nav-menu-list-item"><a href="#">Blogs</a></li>
          <li className="mobile-nav-menu-list-item"><a href="#">Contact</a></li>
          </ul>
      </div>
    </>
  );
};

export default Header;
