import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const headerContainer = document.querySelector(".header-container");

      if (prevScrollPos > currentScrollPos) {
        headerContainer.style.top = "0";
      } else {
        headerContainer.style.top = "-110px";
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="header-container">
      <nav className="nav">
        <div>
          <img className="nav-logo" src="/icons/robjeybee-monochrome-square-logo.svg" alt="" />
        </div>
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} onClick={toggleMenu}></i>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><link /></li>
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
