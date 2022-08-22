import React from "react";
import "./socialSection.css";
import { SectionSeparator } from "../../sectionSeparator/SectionSeparator";
import { SocialData } from "../../../data/social";

console.log("SocialData", SocialData);
const SocialSection = () => {
  return (
    <div className="contact">
      <SectionSeparator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>

          <div className="social-contact">
            {SocialData.map((item, index) => {
              return (
                <a href={item.link} key={index}>
                  <div className="social-icon-div">
                    <img
                      src={item.icon}
                      alt="social-img"
                      className="social-icon"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SocialSection };
