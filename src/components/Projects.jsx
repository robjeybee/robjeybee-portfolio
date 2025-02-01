import React from "react";
import "../styles/projects.css";
import "../styles/index.css";

const Projects = () => {
  return (
    <>
      <div className="mobile-container desktop-container" id="projects">
        <div className="mobile-content-container desktop-content-container">
          <div className="projects-intro text-align-center text-align-left">
            <h2 className="font-size-40">my projects</h2>
            <div className="desktop-container-70pc">
               <p className="margin-bottom font-size-20 line-height-30 line-height-26">
              I've built and collaborated on projects using React, Firebase, and PostgreSQL, aspiring to create seamless front-end user experiences and robust back-end functionality. Whether working in a team or independently, I prioritise clean, efficient code and solving real-world problems.
            </p>
            </div>
           
          </div>
          <div className="main-project margin-bottom">
            <iframe  className="mobile-main-project-img desktop-main-project-img"
    src="https://www.youtube.com/embed/LfZ7Epx0UTM?loop=1&mute=1" 
    frameborder="0" 
    allow="encrypted-media" 
    allowfullscreen>
</iframe>
            
            <div className="desktop-container-50pc">
              <h2>KitStack</h2>
            <p className="line-height-26 stack-color">Stack: HTML, Tailwind CSS, React, Firebase</p>
            <p className="font-size-20 line-height-30 line-height-26">
              Built with React, Tailwind CSS and Google Firebase to deliver a minimal viable product that allowed users to sign up and perform CRUD functionality for their football shirt collections.
            </p>
            <a className="cta-link" href="https://github.com/robjeybee/kitStack" target="_blank">GitHub Repo</a>
            </div>
            
          </div>
          <div className="secondary-projects">
            <div className="secondary-project margin-bottom">
              <img
                className="mobile-secondary-project-img desktop-secondary-project-img"
                src="/Nasa-Image-Generator-img.png"
                alt=""
              />
              <h2>NASA Image Generator</h2>
              <p className="line-height-26 stack-color">Stack: HTML, Vanilla CSS, React, Axios</p>
              <p className="font-size-20 line-height-30 line-height-26">
                Constructed components in React to create a single-page application that returns images using a NASA API. Deployed on Vercel.
              </p>
              <a className="cta-link mobile-project-cta-margin" href="https://react-technical-test-5805v5dnh-rjrobbie.vercel.app/" target="_blank">Live demo</a> <a className="cta-link" href="https://github.com/robjeybee/react-technical-test" target="_blank">GitHub Repo</a>
            </div>
            <div className="secondary-project">
              <img
                className="mobile-secondary-project-img desktop-secondary-project-img"
                src="https://images.pexels.com/photos/1181776/pexels-photo-1181776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <h2>Music Library</h2>
              <p className="line-height-26 stack-color">Stack: Postman, PostgeSQL, MySQL, Express.js</p>
              <p className="font-size-20 line-height-30 line-height-26">
                Utilised Postman, and PostgreSQL to build a music library that takes CRUD requests and implements MySQL databases and Express.js.
              </p>
              <a className="cta-link" href="https://github.com/robjeybee/music-library" target="_blank">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Projects;
