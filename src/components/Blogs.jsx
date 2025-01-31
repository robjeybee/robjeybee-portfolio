import React from "react";
import "../styles/blogs.css";
import "../styles/index.css";

const Blogs = () => {
  return (
    <>
      <div className="mobile-container desktop-container" id="blogs">
        <div className="mobile-content-container desktop-content-container">
          <div className="blogs-intro">
            <h2>articles and podcasts</h2>
            <p>
              Explore a collection of articles and engaging podcasts designed to
              inspire and support your coding journey. From personal stories to
              expert advice, there’s something here for every developer.
            </p>
          </div>
          <div className="blog-cards">
            <div className="blogs-codewords">
              <img
                className="mobile-blogs-img desktop-blogs-img"
                src="/codewords-logo.png"
                alt=""
              />
              <h2>Codewords</h2>
              <p>
                A podcast for developers by developers. Join us for an informal
                coffee chat with code newbies, senior engineers and more.
                Wherever you are on your unique coding journey, we’ve got you
                covered.
              </p>
              <a href="#">Listen here</a>
            </div>
            <div className="blogs-codewords">
              <img
                className="mobile-blogs-img desktop-blogs-img"
                src="/codewords-logo.png"
                alt=""
              />
              <h2>Codewords</h2>
              <p>
                A podcast for developers by developers. Join us for an informal
                coffee chat with code newbies, senior engineers and more.
                Wherever you are on your unique coding journey, we’ve got you
                covered.
              </p>
              <a href="#">Listen here</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Blogs;
