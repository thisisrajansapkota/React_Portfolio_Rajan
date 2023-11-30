import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
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
