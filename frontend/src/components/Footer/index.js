import React from "react";
// import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about-logos">
        <div className="footer-items">
          <a href="https://github.com/nathanblaz">
            {" "}
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="footer-items">
          <a href="https://www.linkedin.com/in/nathan-blaz-66489a8/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="credit">
          <a href="https://nathanblaz.github.io/">
            <img
              className="user-object--avi"
              src="https://avatars.githubusercontent.com/u/24424412?v=4"
              alt="Nate"
            />
          </a>
          <div className="footer-text">
            <a href="https://nathanblaz.github.io/">Built by Nathan Blaz</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
