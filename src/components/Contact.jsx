import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <p>Get in touch today</p>
        <p>
          <a href="#">rob@robjeybee.com</a>
        </p>
        <p>
          Feeling curious or just fancy a virtual coffee chat? Drop me a line.
          Let's connect, swap stories, and maybe even crack some code together.
        </p>
        <ul>
          <li>Linkedin</li>
          <li>GitHub</li>
          <li>Codewords</li>
          <li>Hashnode</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
