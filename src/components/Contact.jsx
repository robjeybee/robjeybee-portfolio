import React, { useRef } from "react";
import "../styles/contact.scss";
import "../styles/socials.scss"
import Socials from "./Socials";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8v342ta', 'template_95z50qp', form.current, {
        publicKey: 'J0fxCNHKRodAzIWtI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
     <div className="contact">
      <div className="contact-container">
        <div className="contact-container-header">
           <h2>Just say hi.</h2>
        </div>
          
        <div className="contact-content">
          <div className="contact-info">
            <div>
              <p className="contact-info-text">
                Feeling curious or just fancy a digital coffee chat? <br />
                Drop me a line. Let's connect, swap stories, and maybe
              even crack some code together.
              </p>
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
 <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Your name"/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder="Your email"/>
      <label>Message</label>
      <textarea name="message" placeholder="Let me talk to ya! Yeah!"/>
      <input className="contact-button" type="submit" value="Send"/>
    </form>
        </div>
      </div>
    </div>


  );
};

export default Contact;



   


