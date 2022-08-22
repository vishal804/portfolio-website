import React from "react";
import "./skillSection.css";
import { SectionSeparator } from "../../sectionSeparator/SectionSeparator";
import { SkillsData } from "../../../data/skills";

const SkillSection = () => {
  return (
    <div className="skills">
      <SectionSeparator />
      <label className="section-title">Skills</label>
      <div>
        {SkillsData.map((item, index) => {
          return (
            <div className="skills-section" key={index}>
              
              <div className="skills-list">
                {item.list.map((skill, index) => {
                  return (
                    <div className="skill-card" key={index}>
                    <img src={skill.icon} alt={skill.alt} />
                      {/* <div className="skill-icon">{skill.icon}</div> */}
                      <label className="skill-name">{skill.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { SkillSection };
