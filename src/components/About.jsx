import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div>
      <div class="about">
        <div class="about-content">
          <h3>About me.</h3>
          <p>Some lorem ipsum stuff about me</p>
          <p>Some lorem ipsum stuff about me</p>
          <p>Some lorem ipsum stuff about me</p>
          <p>Some lorem ipsum stuff about me</p>
        </div>
        <div class="about-img">
          <img
            src="/images/project-placeholder-image.svg"
            alt="Project Placeholder Image of a yellow lightning bolt on a pink background"
          />
        </div>
      </div>
    </div>
  );
};

export default About;