import React from "react";
import "../styles/blog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPodcast, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div className="blog">
      <h1  className="blog-header-title">Blogs.</h1>
      <div className="blog-container">
        <div className="blog-item">
          <div className="blog-item-card">
            <div>
              <FontAwesomeIcon icon={faBook} className="blog-fa-icon" />
            </div>
            <div className="blog-content">
              <h2 className="blog-card-title">A bootcampers diary</h2>
              <div className="blog-text">
                <p>
                  Welcome to the diary of my experience at the Command Shift coding bootcamp. From conquering challenges to collaborating with peers, each entry captures the highs and lows, showcasing the progression of my technical skills and problem-solving abilities. This diary is more than a record; it's a narrative of growth and transformation within the supportive and dynamic environment of Command Shift. Each entry marks a step towards becoming a more confident and skilled coder, turning the bootcamp experience into a personal coding saga.
                </p>
              </div>
            </div>
             <FontAwesomeIcon
                icon={faArrowRightLong}
                className="blog-faArrowRightLong"
              />
          </div>
        </div>

        <div className="blog-item">
          <div className="blog-item-card">
            <div>
              <FontAwesomeIcon icon={faPodcast} className="blog-fa-icon" />
            </div>
            <div className="blog-content">
              <h2 className="blog-card-title">Talking in code</h2>
              <div className="blog-text">
                <p>
                 Welcome to Codewords, a podcast crafted by developers for developers. The inspiration behind creating this podcast stems from the desire to establish a space where individuals at every stage of their coding journey can find relatability, insights, and camaraderie. Whether you're a code newbie taking your first steps, a seasoned senior engineer navigating complex challenges, or anywhere in between, Codewords is here for you. Join us for casual and informative coffee chats, where we explore the diverse experiences, lessons learned, and valuable perspectives within the world of coding. Together, let's build a community that supports and enriches each unique coding adventure.
                </p>
              </div>
               <FontAwesomeIcon
                icon={faArrowRightLong}
                className="blog-faArrowRightLong"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
