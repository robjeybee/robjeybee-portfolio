import React from "react";
import "../styles/blogs.css";
import "../styles/index.css";

const Blogs = () => {
  return (
    <>
      <div className="mobile-container desktop-container" id="blogs">
        <div className="mobile-content-container desktop-content-container">
          <div className="blogs-intro margin-bottom text-align-center text-align-left">
            <h2 className="font-size-40">articles and podcasts</h2>
            <div className="desktop-container-70pc">
                  <p className="font-size-20 line-height-30 line-height-26">
                Explore a collection of articles I've written and a podcast I've produced and hosted, all focused on supporting people on their coding journeys. From personal stories to expert advice, there’s something here for every developer.
            </p>
            </div>
        
          </div>
          <div className="blog-cards">
            <div className="blogs-codewords margin-bottom">
              <img
                className="mobile-blogs-img desktop-blogs-img"
                src="/codewords-logo.png"
                alt=""
              />
              <h2>Codewords</h2>
              <p className="font-size-20 line-height-30 line-height-26">
                A podcast for developers by developers. Join us for an informal
                coffee chat with code newbies, senior engineers and more.
                Wherever you are on your unique coding journey, we’ve got you
                covered.
              </p>
              <a className="cta-link line-height-26" href="https://open.spotify.com/show/1wX67b5fhcWK4TSB6ZGFO9?si=714fead54207405c" target="_blank">Listen here</a>
            </div>
            <div className="blogs-codewords">
              <img
                className="mobile-blogs-img desktop-blogs-img"
                src="/public/bootcamp-logo.png"
                alt=""
              />
              <h2>Hashnode</h2>
              <p className="font-size-20 line-height-30 line-height-26">
                Join me on this transformative journey as I document my Command Shift bootcamp experience, sharing the highs, the hurdles, and everything I learned along the way. 
              </p>
              <a className="cta-link line-height-26" href="https://mybootcampdiary.hashnode.dev/" target="_blank">Read more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-line-break desktop-line-break"></div>
    </>
  );
};

export default Blogs;
