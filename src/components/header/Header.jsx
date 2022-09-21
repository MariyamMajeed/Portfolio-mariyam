import React from "react";
import CTA from "./CTA";
import ME from "../../assets/jig.webp";
import Headersocial from "./HeaderSocials";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mariyam Majeed</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <Headersocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
