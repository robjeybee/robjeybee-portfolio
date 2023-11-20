import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img
            className="header-logo_img"
            src="/public/icons/robjeybee-monochrome-square-logo.svg"
            alt=""
          />
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li className="nav-links_item">Home</li>
            <li className="nav-links_item">Projects</li>
            <li className="nav-links_item">Blog</li>
            <li className="nav-links_item">About</li>
            <li className="nav-links_item">Contact</li>
          </ul>
        </nav>
        <FontAwesomeIcon className="fa-bars" icon={faBars} />
      </div>
    </div>
  );
};

export default Header;
