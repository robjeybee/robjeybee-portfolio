import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div>
       <h1 className="about-header-title">About me.</h1>
      <div className="about">
       
        <div className="about-content-container">
          <div className="about-content-copy">
            <p>
              I'm press officer by day who's career switching into tech by
              trading in headlines for lines of code at night.
            </p>

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
          </div>
          <div>
            <div className="about-me-img" >
            <img src="/about-me.png" alt="" />
            </div>
          
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default About;
