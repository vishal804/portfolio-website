import React from "react";
import "./aboutSection.css";
import { image } from "../../../assets";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="about-info">
        Hi there ! 👋, I'm <br />
        <span className="info-name">Vishal</span>
        <br /> I love experimenting with the web.
      </div>
      <div className="about-photo">
        <img alt="hero-img" src={image} className="picture" />
      </div>
    </div>
  );
};

export { AboutSection };
