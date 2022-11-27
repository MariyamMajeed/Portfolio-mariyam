import React from "react";
import "./portfolio.css";
import img1 from "../../assets/weath1.jpg";
import img2 from "../../assets/sunf.jpeg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="portfolio__container portfolio__content">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
            <h3>Weather App</h3>
            <small>
              A real time weather fetching app developed using node.js which
              utilises two public API's. Mapbox.com - for geographical data and
              weatherstack.com - for weather forecast.
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/MariyamMajeed/node-weather-website"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://mariyam-weather-app.herokuapp.com/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
            <h3>Trails - Gallery App</h3>
            <small>
              A single page responsive website build using html5,advanced css
              and javascript alone. The website displays gallery/exhibition of
              images. CSS transitions and animations , swiperjs are used to
              implement the design. Figma was utilised during the design phase.
              The website is deployed using vercel.
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/MariyamMajeed/Trails"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://trails-mariyammajeed.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
