import React from "react";
import "../styles/projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects-header-title">Featured projects.</h1>
      <div className="projects-container">
        <div class="project-one">
          <div class="project-one-img">
            <img
              src="/KitStack.png"
              alt="Project Placeholder Image of a yellow lightning bolt on a pink background"
            />
          </div>
          <div class="project-one-content">
            <div className="project-one-content-txt">
              <ul className="project-stack-list">
                <li className="project-stack-list-li">HTML</li>
                <li className="project-stack-list-li">React</li>
                <li className="project-stack-list-li">Firebase</li>
                <li className="project-stack-list-li">Tailwind</li>
              </ul>
              <h3>KitStack App</h3>
              <p>
                Collaborated on a one-stop football shirt collectors app, using
                online tools Google Meet, GitHub and Trello to delegate tasks.
                Our app was built in React and stylised with Tailwind.
              </p>
              <div>
              </div>
              <div>
                 <a href="https://www.youtube.com/watch?v=LfZ7Epx0UTM" target="_blank">Click
                here to watch the presentation.</a>
              </div>
             
            </div>
          </div>
        </div>

        <div class="project-two">
          <div class="project-two-img">
            <img
              src="/NASA-Image-Generator.png"
              alt="Project Placeholder Image of a yellow lightning bolt on a pink background"
            />
          </div>
          <div class="project-two-content">
            <div className="project-two-content-txt">
              <ul className="project-stack-list">
                <li className="project-stack-list-li">HTML</li>
                <li className="project-stack-list-li">React</li>
                <li className="project-stack-list-li">Vanilla CSS</li>
                <li className="project-stack-list-li">NASA API</li>
                <li className="project-stack-list-li">Vercel</li>
              </ul>
              <h3>NASA Image Generator</h3>
              <p>
                Learned how to construct components in React to create a
                single-page application that returns images using a NASA API.
                Deployed on Vercel.
              </p>
              <div>
            <a href="https://react-technical-test-ddlv.vercel.app/" target="_blank">Click here to launch the site</a>
          </div>
            </div>
            
          </div>
          
        </div>

        <div class="project-three">
          <div class="project-three-img">
            <img
              src="https://images.pexels.com/photos/20079091/pexels-photo-20079091/free-photo-of-a-canal-in-venice-with-boats-and-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Project Placeholder Image of a yellow lightning bolt on a pink background"
            />
          </div>
          <div class="project-three-content">
            <div className="project-three-content-txt">
              <ul className="project-stack-list">
                <li className="project-stack-list-li">HTML</li>
                <li className="project-stack-list-li">Postman</li>
                <li className="project-stack-list-li">PostegSQL</li>
                <li className="project-stack-list-li">Express.js</li>
              </ul>
              <h3>Music Library</h3>
              <p>
                Utilised Postman, and PostgreSQL to build a music library that
                takes CRUD requests and implements MySQL databases and
                Express.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
