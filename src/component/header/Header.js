import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="logo">VD</div>
      <div className="menu">
        <div className="web-menu">

          {/* Web */}

          <div className="web">
            <div className="web-option">
              <a href="#projects">Projects</a>
            </div>
            <div className="web-option">
              <a href="#skills">Skills</a>
            </div>
            <div className="web-option">
              <a href="#blog">Blogs</a>
            </div>
            <div className="web-option">
              <a href="#social">Contact</a>
            </div>
          </div>

          {/* web */}
          
        </div>
      </div>
    </div>
  );
};

export { Header };
