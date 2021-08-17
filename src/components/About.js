import React from "react";
import img from "../image/image2.png";
import CheckIcon from "@material-ui/icons/Check";

const About = () => {
  return (
    <div>
      <div className="about-left">
        <img src={img} alt="..." />
      </div>
      <div className="about-right">
        <h1>ABOUT INTRIGD</h1>
        <p>An opinion aggregator for long format content .</p>
        <p>
          <span>
            <CheckIcon className="logo" />
          </span>
          presents unbiased content with a vast coverage across industries and
          daily events
        </p>
        <p>
          <span>
            <CheckIcon className="logo" />
          </span>
          helps in effortless consumption of opinions through meaningful
          summaries
        </p>
        <button>Download</button>
      </div>
    </div>
  );
};

export default About;
