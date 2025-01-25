import React from 'react'
import '../styles/projects.css'

const Projects = () => {
  return (
      <>
          <div className="projects-container" id='projects'>
              <div className="projects">
                  <h2>my projects</h2>
                  <p>Dive into my collection of creations, each project is a stepping stone in my journey as a junior developer. From crafting seamless user experiences to tackling real-world challenges, these works reflect my curiosity and dedication to learning.</p>
                  <div className='project-cards'>
                      <div className='primary-project'>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RkYx7MFQabc5n_Xw9diz9FsaI7lEc8ZprQ&s" alt="" />
                          <h3>KitStack</h3>
                          <p>Collaborated on a one-stop football shirt collectors app, using online tools Google Meet, GitHub and Trello to delegate tasks. Our app was built in React and stylised with Tailwind.</p>
                          <p>Technologies:</p>
                          <ul>
                              <li>HTML</li>
                              <li>Tailwind CSS</li>
                              <li>React</li>
                              <li>Firebase</li>
                          </ul>
                      </div>
                      <div className='secondary-projects'>
                          <div className='secondary-project-1'>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RkYx7MFQabc5n_Xw9diz9FsaI7lEc8ZprQ&s" alt="" />
                          <h3>KitStack</h3>
                          <p>Collaborated on a one-stop football shirt collectors app, using online tools Google Meet, GitHub and Trello to delegate tasks. Our app was built in React and stylised with Tailwind.</p>
                          <p>Technologies:</p>
                          <ul>
                              <li>HTML</li>
                              <li>Tailwind CSS</li>
                              <li>React</li>
                              <li>Firebase</li>
                          </ul>
                          </div>
                          <div className='secondary-project-2'>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RkYx7MFQabc5n_Xw9diz9FsaI7lEc8ZprQ&s" alt="" />
                          <h3>KitStack</h3>
                          <p>Collaborated on a one-stop football shirt collectors app, using online tools Google Meet, GitHub and Trello to delegate tasks. Our app was built in React and stylised with Tailwind.</p>
                          <p>Technologies:</p>
                          <ul>
                              <li>HTML</li>
                              <li>Tailwind CSS</li>
                              <li>React</li>
                              <li>Firebase</li>
                          </ul>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </>
  )
}

export default Projects