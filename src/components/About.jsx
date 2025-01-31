import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2>Nice to meet you</h2>
              <p>
                I'm press officer by day who's career switching into tech by
                trading in headlines for lines of code at night.
              </p>
              <img className="about-img-mobile" src="/Rob .png" alt="" />
              <p>
                Having cut my teeth at the Command Shift bootcamp, I've not only
                embraced but strived for clean code and the latest dev tools in
                the dynamic world of software development.
              </p>
              <p>
                But wait, there's more! Have you heard the Codewords podcast?
                That's me - your friendly neighbourhood host, with a backstage
                pass to the thoughts and strategies of amazing developers from
                around the globe.
              </p>
              <p>
                You can follow my workflow and updates on{" "}
                <a href="#">LinkedIn</a> using the hashtag{" "}
                <a href="#" target="_blank">
                  #robsadev
                </a>
                .
              </p>
              <a href="#">Email me</a>
            </div>
            <div>
              <img className="about-img-desktop" src="/Rob .png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
