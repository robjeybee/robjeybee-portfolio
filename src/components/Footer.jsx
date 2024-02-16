import React from "react";
import "../styles/footer.scss";
import "../styles/socials.scss";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src="/icons/robjeybee-square-logo.svg" alt="" />
            <div>
              <p>Rob Barber</p>
              <p>Junior Developer</p>
            </div>
            <Socials className="footer-social-icons" />
          </div>
          <div className="footer-content-right">
            <p>
              <i class="fa-regular fa-copyright"></i> 2023
            </p>
            <p>robjeybee.com</p>
            <p>made with curiosity and lightning bolts</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
