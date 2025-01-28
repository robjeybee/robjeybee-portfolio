import React from "react";
import "../styles/blogs.css";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blogs = () => {
  return (
    <>
      <div className="blogs-container" id="blogs">
        <div className="blogs">
          <div className="blog-intro" >
            <h2>articles and podcasts</h2>
            <p>
              Explore a collection of articles and engaging podcasts designed to
              inspire and support your coding journey. From personal stories to
              expert advice, there’s something here for every developer.
            </p>
          </div>

          <div className="blog-cards">
            <div className="blog-card-codewords blog-card">
              <img src="/codewords-logo.png" alt="" />
              <div className="blog-card-content">
                <h3>Codewords</h3>
                <p>
                  A podcast for developers by developers. Join us for an
                  informal coffee chat with code newbies, senior engineers and
                  more. Wherever you are on your unique coding journey, we’ve
                  got you covered.
                </p>
                <a href="#">
                  Listen here{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpLong}
                    className="fa-arrow-up-long"
                  />
                </a>
              </div>
            </div>
            <div className="blog-card-hashnode blog-card">
              <img src="/bootcamp-logo.png" alt="" />
              <div className="blog-card-content">
                <h3>Hashnode</h3>
                <p>
                  Join me on this transformative journey as I document my
                  Command Shift bootcamp experience, sharing the highs, the
                  hurdles, and everything I learned along the way.{" "}
                </p>
                <a href="#">
                  Read more{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpLong}
                    className="fa-arrow-up-long"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
