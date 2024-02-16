import React from "react";
import "../styles/blog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashnode, faSpotify } from "@fortawesome/free-brands-svg-icons";

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-info">
            <div className="card">
              <FontAwesomeIcon className="blog-icon" icon={faHashnode} />
              <h2>My Bootcamp Diary</h2>
              <p>
                I kept a weekly diary of my bootcamp experience to give myself
                the time to reflect on my progress when is was finished.
              </p>
              <button className="blog-button">
                <a href="https://mybootcampdiary.hashnode.dev/" target="blank">
                  Read more
                </a>
              </button>
            </div>
          </div>
          <div className="blog-form">
            <FontAwesomeIcon className="blog-icon" icon={faSpotify} />
            <h2>The Codewords Podcast</h2>
            <p>
              Welcome to Codewords, a podcast for developers by developers. Join
              us for an informal coffee chat with code newbies, senior engineers
              and more. Wherever you are on your unique coding journey, we’ve
              got you covered.{" "}
            </p>
            <button className="blog-button">
              <a
                href="https://open.spotify.com/show/1wX67b5fhcWK4TSB6ZGFO9"
                target="blank"
              >
                Listen now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
