import React from "react";
import "../styles/hero.scss";

const Main = () => {
  return (
    <div>
      <div class="hero">
        <div class="hero-content">
          <p>Hello world, my name's Rob.</p>
          <h1>I build websites like this one in React, it's a cycle.</h1>
          <p>I'm career switching into tech as a junior developer.</p>
          <button className="hero-button">View my work</button>
        </div>
        <div class="hero-img">
          <img src="../public/images/robjeybee-blue-shield.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
