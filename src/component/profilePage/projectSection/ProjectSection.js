import React from "react";
import "./projectSection.css";

import { ProjectData } from "../../../data/projects";

import { SectionSeparator } from "../../sectionSeparator/SectionSeparator";

const ProjectSection = () => {
  return (
    <div className="projects">
       <SectionSeparator />
      <label className="section-title">Projects</label>
      <div className="project-section">
      
        {ProjectData.map((project) => {
          return (
            <div className="project-card">
              <div className="project-info">
                <label className="project-title">{project.title}</label>
                
                <p>{project.about}</p>
                <div className="project-tags">
                 Techstack - { project.tags.map((tag, index) => {
                    return (
                     


                      <div className="project-tag" key={index}>
                      { tag}
                    </div>
                    );
                  })}
                </div>

                <div className="project-links">
                  {project.live && (
                    <a className="project-link" href={project.live}>
                      <div className="btn">View Live</div>
                    </a>
                  )}
                  {project.github && (
                    <a className="project-link" href={project.github}>
                      <div className="btn-secondary">View Source</div>
                    </a>
                  )}
                </div>


              </div>
              <img
                src={project.image}
                alt="project-img"
                className="project-photo"
              />
            </div>
          );
        })}

        {/*  */}
      </div>
    </div>
  );
};

export { ProjectSection };
