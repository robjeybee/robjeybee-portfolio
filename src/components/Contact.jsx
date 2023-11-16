import React from "react";
import "../styles/contact.scss";
import "../styles/socials.scss"
import Socials from "./Socials";

const Contact = () => {
  return (
    <div>
      <div class="contact-container">
        <div className="contact-container-header">
           <h2>Just say hi.</h2>
        </div>
          
        <div className="contact-content">
          <div class="contact-info">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, eos reprehenderit placeat deleniti aperiam asperiores cum autem deserunt optio dicta.</p>
            </div>
              <div>
                  <p>Email me</p>
              <p>robjeybee@gmail.com</p>
            </div>
              <div>
                <p className="follow-header">Follow</p>
               <Socials className="contact-social-icons" />
                </div>
          </div>
          <form className="contact-form">
              <h2>Or use the form below</h2>
              <input type="text" name="name" required placeholder="Your name*"/>
              <input type="email" name="email" required placeholder="Your email*" />
              <textarea name="message" required placeholder="How can I help?*"></textarea>
              <button className="contact-button" type="submit">Get in touch</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
