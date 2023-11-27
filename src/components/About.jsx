import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-content">
          <h3>About me.</h3>
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

            <p>
              Feeling curious or just fancy a digital coffee chat? Don't
              hesitate to drop me a line. Let's connect, swap stories, and maybe
              even crack some code together.
            </p>
          </div>
        </div>
        <div class="about-img">
          <img
            src="/images/robjeybee-pink-square.svg"
            alt="Project Placeholder Image of a yellow lightning bolt on a pink background"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
