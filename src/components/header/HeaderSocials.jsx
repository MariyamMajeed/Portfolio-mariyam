import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

function headersocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mariyammajeed98/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/MariyamMajeed" target="_blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com" target="_blank">
        <ImInstagram />
      </a>
    </div>
  );
}

export default headersocials;
