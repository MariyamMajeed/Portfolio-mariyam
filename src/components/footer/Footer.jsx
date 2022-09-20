import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mariyam
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mariyammajeed98/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/MariyamMajeed">
          <FaGithub />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
