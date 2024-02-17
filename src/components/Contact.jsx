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
      .sendForm("service_8v342ta", "template_e4l1qt5", form.current, {
        publicKey: "J0fxCNHKRodAzIWtI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsFormSubmitted(true);
          setTimeout(() => {
            setIsFormSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsFormSubmitted(false);
        },
      );

    setTimeout(() => {
      form.current.reset();
    }, 300);
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
            <div className="contact-info-text">
              <p>Feeling curious or just fancy a digital coffee chat? </p>
              <p>
                Drop me a line. Let's connect, swap stories, and maybe even
                crack some code together.
              </p>
            </div>
            <div>
              <p className="email-me">Email me</p>
              <p>
                <a className="email-link" href="mailto:robjeybee@gmail.com">
                  robjeybee@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="follow-header follow">Follow</p>
              <Socials className="contact-social-icons" />
            </div>
          </div>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
            />

            <label>Subject</label>
            <input type="text" name="subject" placeholder="What's the scoop?" />

            <label>Message</label>
            <textarea
              name="user_message"
              placeholder="Let me talk to ya! Yeah!"
              required
            />

            <div className="form-submission">
              <button
                onClick={handleClick}
                className={`contact-button ${
                  isClicked ? "reverse-hover" : ""
                } ${isFormSubmitted ? "success" : ""}`}
                type="submit"
              >
                {isFormSubmitted ? "Email sent!" : "Submit"}
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
