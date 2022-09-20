import React from "react";
import "./about.css";
import ME from "../../assets/abu.jpeg";
import { FaAward } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> Internship </small>
            </article>

            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Qualification</h5>
              <small> MCA </small>
            </article>

            <article className="about__card">
              <BsFillSuitHeartFill className="about__icon" />
              <h5>Interests</h5>
              <small>JS,react.js</small>
            </article>
          </div>
          <p>
            Hey there! Nice to have you here. I'm a self-taught web developer
            and my area of interest is front-end development. I love Javascript!
            I would like to believe that I'm proficient in the same. I'm
            familiar with react.js and node.js as well. I'm in the process of
            learning more about everything front-end and JS!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
