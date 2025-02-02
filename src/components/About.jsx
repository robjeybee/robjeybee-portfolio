import React from "react";
import "../styles/about.css";
import "../styles/index.css";

const About = () => {
  return (
    <>
      <div className="mobile-container desktop-container">
        <div className="mobile-content-container desktop-content-container">
          <div className="about-card">
            <div>
              <h2 className="font-size-40">Nice to meet you</h2>
              <p className="font-size-20 line-height-30 line-height-26">
                I'm press officer by day who's career switching into tech by
                trading in headlines for lines of code at night.
              </p>
              <img className="mobile-about-img" src="/Rob .png" alt="" />
              <p className="font-size-20 line-height-30 line-height-26">
                Having cut my teeth at the Command Shift bootcamp, I've not only
                embraced but strived for clean code and the latest dev tools in
                the dynamic world of software development.
              </p>
              <p className="font-size-20 line-height-30 line-height-26">
                But wait, there's more! Have you heard the Codewords podcast?
                That's me - your friendly neighbourhood host, with a backstage
                pass to the thoughts and strategies of amazing developers from
                around the globe.
              </p>
              <p className="font-size-20 line-height-30 line-height-26">
                You can follow my workflow and updates on{" "}
                <a
                  className="cta-link robsadev-cta"
                  href="https://www.linkedin.com/in/robjeybee/"
                  target="_blank"
                >
                  LinkedIn
                </a>{" "}
                using the hashtag{" "}
                <a
                  className="cta-link robsadev-cta"
                  href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAD8Y5xgBjBjvLNEsbXo-E_ty_6wyu8rTXMc&keywords=%23robsadev&origin=GLOBAL_SEARCH_HEADER&sid=o~m"
                  target="_blank"
                >
                  #robsadev
                </a>
                .
              </p>
              <a
                className="font-size-20 line-height-30 about-cta robsadev-cta"
                href="mailto:rob@robjeybee.com"
                target="_blank"
              >
                Email me
              </a>
            </div>
            <div>
              <img className="desktop-about-img" src="/Rob .png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default About;
