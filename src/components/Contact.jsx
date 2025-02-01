import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <div className="mobile-container desktop-container" id="contact">
        <div className="mobile-content-container desktop-content-container text-align-center">
          <div className="content-card">
            <h2>Get in touch today</h2>
            <p>
              <a className="cta-link contact-cta" href="mailto:rob@robjeybee.com" target="_blank">rob@robjeybee.com</a>
            </p>
            <div className="desktop-container-70pc">
               <p className="font-size-20 line-height-30 line-height-26">
              Feeling curious or just fancy a virtual coffee chat? Drop me a
              line. Let's connect, swap stories, and maybe even crack some code
              together.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Contact;
