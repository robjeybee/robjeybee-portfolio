import React from "react";
import "../styles/projects.css";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="projects">
          <div className="project-intro" id="projects">
            <h2>my projects</h2>
            <p>
              Dive into my collection of creations, each project is a stepping
              stone in my journey as a junior developer. From crafting seamless
              user experiences to tackling real-world challenges, these works
              reflect my curiosity and dedication to learning.
            </p>
          </div>

          <div className="project-cards">
            <div className="primary-project project-card">
              <img
                src="https://www.mystershirt.com/cdn/shop/files/RetroFootballShirtMysteryBox_S1_6e521234-ab55-4331-b5ff-8a3d199f4c5d.jpg?v=1735312214&width=2000"
                alt=""
              />
              <h3 className="project-name">KitStack</h3>
              <p className="project-description">
                Collaborated on a one-stop football shirt collectors app, using
                online tools Google Meet, GitHub and Trello to delegate tasks.
                Our app was built in React and stylised with Tailwind.
              </p>
              <div>
                <p className="stack">Stack:</p>
                <ul className="stack-list">
                  <li>HTML</li>
                  <li>Tailwind CSS</li>
                  <li>React</li>
                  <li>Firebase</li>
                </ul>
              </div>

              <p>
                <a href="#">
                  Live demo
                  <FontAwesomeIcon
                    icon={faArrowUpLong}
                    className="fa-arrow-up-long"
                  />
                </a>{" "}
                |{" "}
                <a href="≈">
                  GitHub repo{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpLong}
                    className="fa-arrow-up-long"
                  />
                </a>
              </p>
            </div>
            <div className="secondary-projects">
              <div className="secondary-project-1 project-card">
                <img
                  src="https://images-assets.nasa.gov/image/iss041e012095/iss041e012095~large.jpg"
                  alt=""
                />
                <h3 className="project-name">Nasa Image Generator</h3>
                <p className="project-description">
                  Learned how to construct components in React to create a
                  single-page application that returns images using a NASA API.
                  Deployed on Vercel.
                </p>
                <div>
                  <p className="stack">Stack:</p>
                  <ul className="stack-list">
                    <li>HTML</li>
                    <li>Tailwind CSS</li>
                    <li>React</li>
                    <li>Firebase</li>
                  </ul>
                </div>
                <p>
                  <a href="#">
                    Live demo
                    <FontAwesomeIcon
                      icon={faArrowUpLong}
                      className="fa-arrow-up-long"
                    />
                  </a>{" "}
                  |{" "}
                  <a href="≈">
                    GitHub repo{" "}
                    <FontAwesomeIcon
                      icon={faArrowUpLong}
                      className="fa-arrow-up-long"
                    />
                  </a>
                </p>
              </div>
              <div className="secondary-project-2 project-card">
                <img
                  src="https://djworx.com/wp-content/uploads/2016/03/viny-record-collection-4.jpg"
                  alt=""
                />
                <h3 className="project-name">Music Library</h3>
                <p className="project-description">
                  Utilised Postman, and PostgreSQL to build a music library that
                  takes CRUD requests and implements MySQL databases and
                  Express.js.
                </p>
                <div>
                  <p className="stack">Stack:</p>
                  <ul className="stack-list">
                    <li>HTML</li>
                    <li>Tailwind CSS</li>
                    <li>React</li>
                    <li>Firebase</li>
                  </ul>
                </div>
                <p>
                  <a href="#">
                    Live demo
                    <FontAwesomeIcon
                      icon={faArrowUpLong}
                      className="fa-arrow-up-long"
                    />
                  </a>{" "}
                  |{" "}
                  <a href="≈">
                    GitHub repo{" "}
                    <FontAwesomeIcon
                      icon={faArrowUpLong}
                      className="fa-arrow-up-long"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
