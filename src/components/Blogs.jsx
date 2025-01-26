import React from "react";
import "../styles/blogs.css";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blogs = () => {
  return (
    <>
      <div className="blogs-container" id="blogs">
        <div className="blogs">
          <h2>articles and podcasts</h2>
          <p>
            Explore a collection of articles and engaging podcasts designed to
            inspire and support your coding journey. From personal stories to
            expert advice, there’s something here for every developer.
          </p>
          <div className="blog-cards">
            <div className="blog-card-codewords blog-card">
              <img src="/public/codewords-logo.png" alt="" />
              <h3>Codewords</h3>
              <p>
                A podcast for developers by developers. Join us for an informal
                coffee chat with code newbies, senior engineers and more.
                Wherever you are on your unique coding journey, we’ve got you
                covered.
              </p>
              <a href="#">Listen here <FontAwesomeIcon
                                    icon={faArrowUpLong}
                                    className="fa-arrow-up-long"
                                  /></a>
            </div>
            <div className="blog-card-hashnode blog-card">
              <img src="/public/bootcamp-logo.png" alt="" />
              <h3>Hasnode</h3>
              <p>
                Join me on this transformative journey as I document my Command
                Shift bootcamp experience, sharing the highs, the hurdles, and
                everything I learned along the way.{" "}
              </p>
              <a href="#">Read more <FontAwesomeIcon
                                    icon={faArrowUpLong}
                                    className="fa-arrow-up-long"
                                  /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
