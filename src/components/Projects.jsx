import React from "react";
import "../styles/projects.css";
import "../styles/index.css";

const Projects = () => {
  return (
    <>
      <div className="mobile-container desktop-container" id="projects">
        <div className="mobile-content-container desktop-content-container">
          <div className="projects-intro">
            <h2>my projects</h2>
            <p>
              Dive into my collection of creations, each project is a stepping
              stone in my journey as a junior developer. From crafting seamless
              user experiences to tackling real-world challenges, these works
              reflect my curiosity and dedication to learning.
            </p>
          </div>
          <div className="main-project">
            <img
              className="mobile-main-project-img desktop-main-project-img"
              src="https://cdn.lovellsports.com/features/WorldCupReplicaPage/club-kits.jpg"
              alt=""
            />
            <h2>KitStack</h2>
            <p>
              Collaborated on a one-stop football shirt collectors app, using
              online tools Google Meet, GitHub and Trello to delegate tasks. Our
              app was built in React and stylised with Tailwind.
            </p>
            <p>Technologies: HTML, Tailwind CSS, React, Firebase</p>
            <a href="#">Live demo</a> <a href="#">GitHub Repo</a>
          </div>
          <div className="secondary-projects">
            <div className="secondary-project">
              <img
                className="mobile-secondary-project-img desktop-secondary-project-img"
                src="https://cdn.lovellsports.com/features/WorldCupReplicaPage/club-kits.jpg"
                alt=""
              />
              <h2>KitStack</h2>
              <p>
                Collaborated on a one-stop football shirt collectors app, using
                online tools Google Meet, GitHub and Trello to delegate tasks.
                Our app was built in React and stylised with Tailwind.
              </p>
              <p>Technologies: HTML, Tailwind CSS, React, Firebase</p>
              <a href="#">Live demo</a> <a href="#">GitHub Repo</a>
            </div>
            <div className="secondary-project">
              <img
                className="mobile-secondary-project-img desktop-secondary-project-img"
                src="https://cdn.lovellsports.com/features/WorldCupReplicaPage/club-kits.jpg"
                alt=""
              />
              <h2>KitStack</h2>
              <p>
                Collaborated on a one-stop football shirt collectors app, using
                online tools Google Meet, GitHub and Trello to delegate tasks.
                Our app was built in React and stylised with Tailwind.
              </p>
              <p>Technologies: HTML, Tailwind CSS, React, Firebase</p>
              <a href="#">Live demo</a> <a href="#">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Projects;
