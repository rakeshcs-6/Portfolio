import React, { useEffect } from "react";
import "./About.css";
import Image from "./Image";
import profilePic from "../asset/boy.png";
import Button from "./Button";

function About() {
  return (
    <div className="about" id="about-section">
      <Image pic={profilePic} />
      <div className="intro-container">
        <h5>ABOUT ME</h5>
        <p className="intro">
          Passionate front-end developer with a strong focus on React, adept at
          translating design concepts into interactive and efficient user
          interfaces. Armed with a comprehensive understanding of HTML, CSS, and
          JavaScript, I have successfully delivered visually appealing and
          highly functional web applications. My expertise lies in building
          responsive and cross-browser compatible UI components, ensuring a
          seamless user experience. With a keen eye for detail and a commitment
          to best practices, I collaborate effectively with cross-functional
          teams to bring projects from concept to completion. Eager to leverage
          my skills in creating innovative and user-centric solutions in the
          ever-evolving realm of front-end development.
        </p>
        <Button className="custom-btn">Resume</Button>
      </div>
    </div>
  );
}

export default About;
