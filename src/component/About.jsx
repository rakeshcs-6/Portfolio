import React, { useEffect } from "react";
import "./About.css";
import Image from "./Image";
import profilePic from "../asset/boy.jpg";
import Button from "./Button";

function About() {
  return (
    <div className="about" id="about-section">
      <Image pic={profilePic} />
      <div className="intro-container">
        <h5>ABOUT ME</h5>
        <p className="intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          veniam alias deleniti saepe odit cupiditate perspiciatis consequuntur.
          Adipisci tenetur quod ullam nobis impedit obcaecati, dolorem facere
          magnam! Soluta, quasi autem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis veniam alias deleniti saepe odit cupiditate
          perspiciatis consequuntur. Adipisci tenetur quod ullam nobis impedit
          obcaecati, dolorem facere magnam! Soluta, quasi autem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Debitis veniam alias
          deleniti saepe odit cupiditate perspiciatis consequuntur. Adipisci
          tenetur quod ullam nobis impedit obcaecati, dolorem facere magnam!
          Soluta, quasi autem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis veniam alias deleniti saepe odit cupiditate
          perspiciatis consequuntur. Adipisci tenetur quod ullam nobis impedit
          obcaecati, dolorem facere magnam! Soluta, quasi autem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Debitis veniam alias
          deleniti saepe odit cupiditate perspiciatis consequuntur. Adipisci
          tenetur quod ullam nobis impedit obcaecati, dolorem facere magnam!
          Soluta, quasi autem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis veniam alias deleniti saepe odit cupiditate
          perspiciatis consequuntur. Adipisci tenetur quod ullam nobis impedit
          obcaecati, dolorem facere magnam! Soluta, quasi autem.
        </p>
        <Button className="custom-btn">Resume</Button>
      </div>
    </div>
  );
}

export default About;
