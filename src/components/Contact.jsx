import React from "react";
import "../styles/contact.css";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <div className="contact">
          <p>Get in touch today</p>
          <a href="#">
            <h3>
              rob@robjeybee.com{" "}
              <a href="#">
                <FontAwesomeIcon
                  icon={faArrowUpLong}
                  className="fa-arrow-up-long"
                />
              </a>
            </h3>
          </a>
          <p className="contact-description">
            Feeling curious or just fancy a virtual coffee chat? Drop me a line.
            Let's connect, swap stories, and maybe even crack some code
            together.
          </p>
          <ul className="contact-social-list">
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Spotify</li>
            <li>Hashnode</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
