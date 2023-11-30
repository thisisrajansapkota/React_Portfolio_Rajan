import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>

            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#github">Github</a>
            </li>
            <li>
              <a href="#x">X</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">&copy; copyright all reserved. Made by me. ❤️</div>
    </footer>
  );
}

export default Footer;
