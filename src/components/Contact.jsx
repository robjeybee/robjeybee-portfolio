import React from "react";
import "../styles/contact.scss";
import Socials from "./Socials";

const Contact = () => {
  return (
    <div>
      <div class="contact-container">
        <div className="contact-content">
          <div class="contact-info">
            <h3>Just say hi.</h3>
            <div>
              <div>
                    <p>Email me at</p>
              <p>robjeybee@gmail.com</p>
                </div>
              <div>
                <p>Follow</p>
                <Socials />
                </div>
            </div>
          </div>
            <form className="contact-form" action="https://formsubmit.co/your@email.com" method="POST">
              <input type="text" name="name" required placeholder="Your name*"/>
              <input type="email" name="email" required placeholder="Your email*" />
              <textarea name="message" rows="5" cols="10" required placeholder="How can I help?*"></textarea>
              <button type="submit">Get in touch</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
