import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <div className="mobile-container desktop-container" id="contact">
        <div className="mobile-content-container desktop-content-container">
          <div className="content-card">
            <p>Get in touch today</p>
            <p>
              <a href="#">rob@robjeybee.com</a>
            </p>
            <p>
              Feeling curious or just fancy a virtual coffee chat? Drop me a
              line. Let's connect, swap stories, and maybe even crack some code
              together.
            </p>
            <ul>
              <li>Linkedin</li>
              <li>GitHub</li>
              <li>Codewords</li>
              <li>Hashnode</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Contact;
