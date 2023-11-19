import React, { useState } from "react";
import "../styles/header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <nav className="nav">
        <div>
          <img className="nav-logo" src="/icons/robjeybee-monochrome-square-logo.svg" alt="" />
        </div>
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} onClick={toggleMenu}></i>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
