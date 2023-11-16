import React from "react";
import "../styles/socials.scss";

const Socials = ({ className }) => {
  return (
    <div className={`social-icons-container ${className}`}>
      <div className="footer-social-icons contact-social-icons">
        <a href="">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-dev"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-hashnode"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-spotify"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;

