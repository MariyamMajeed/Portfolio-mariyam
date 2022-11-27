import React from "react";
import MariyamResume from "../../assets/mariyam resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={MariyamResume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
