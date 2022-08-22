import React from "react";
import "./blogSection.css";
import { BlogData } from "../../../data/blog";

const BlogSection = () => {
  return (
    <div className="work">
      <label className="section-title">Blogs</label>
      <div className="work-list">
        {BlogData.map((item, index) => {
          return (
            <div className="blog">
              <h3 className="blog-title">{item.title}</h3>
              <small>
                <time>{item.date}</time> • {item.duration}
              </small>
              <p className="blog-description">{item.shortDescription}</p>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                  className="btn"
                >
                  Read
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { BlogSection };
