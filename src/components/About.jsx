import React from 'react'
import '../styles/about.css'
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
      <>
          <div className="about-container">
              <div className="about">
                    <h3>Nice to meet you</h3>
          <p>I'm press officer by day who's career switching into tech by trading in headlines for lines of code at night.</p>
          <img src="" alt="" />
          <p>Having cut my teeth at the Command Shift bootcamp, I've not only embraced but strived for clean code and the latest dev tools in the dynamic world of software development.</p>
          <p>But wait, there's more! Have you heard the Codewords podcast? That's me - your friendly neighbourhood host, with a backstage pass to the thoughts and strategies of amazing developers from around the globe.</p>
                  <p>You can follow my workflow and updates on LinkedIn using the hashtag <a href="#">#robsadev</a>.</p>
                  <div>
                           <a href="#">Email me  <FontAwesomeIcon
                              icon={faArrowUpLong}
                              className="fa-arrow-up-long"
                            /></a>
                  </div>
     
              </div>
          </div>
        
      </>
  )
}

export default About