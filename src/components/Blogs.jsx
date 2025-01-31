import React from "react";
import "../styles/blogs.css";

const Blogs = () => {
  return (
    <>
      <div className="blogs" id="blogs">
        <div className="blogs-content">
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
                className="blogs-codewords-img"
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
                className="blogs-codewords-img"
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
    </>
  );
};

export default Blogs;
