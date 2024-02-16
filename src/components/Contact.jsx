import React, { useRef, useState } from "react";
import "../styles/contact.scss";
import "../styles/socials.scss";
import Socials from "./Socials";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8v342ta", "template_95z50qp", form.current, {
        publicKey: "J0fxCNHKRodAzIWtI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsFormSubmitted(false);
        }
      );

    setTimeout(() => {
      form.current.reset();
    }, 1000);
    
  };

  const handleClick = () => {
    console.log("Hello World");
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
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
                Drop me a line. Let's connect, swap stories, and maybe even
                crack some code together.
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
  <input
    type="text"
    name="name"
    placeholder="Your name"
    required
  />

  <label>Email</label>
  <input
    type="email"
    name="email"
    placeholder="Your email"
    required
  />

  <label>Subject</label>
  <input
    type="text"
    name="subject"
    placeholder="What's the scoop?"
  />

  <label>Message</label>
  <textarea
    name="message"
    placeholder="Let me talk to ya! Yeah!"
    required
  />

  <div className="form-submission">
    <button
      onClick={handleClick}
      className={`contact-button ${isClicked ? "reverse-hover" : ""}`}
      type="submit"
    >
      {isFormSubmitted ? 'Email sent!' : 'Submit'}
    </button>
    {isFormSubmitted && (
      <p className="email-success-message">
        Thank you for your email, I'll be in touch 👋
      </p>
    )}
  </div>
</form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
