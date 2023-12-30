import React from "react";
import "./Skills.css";
import html from "../asset/html.png";
import css from "../asset/css.png";
import javascript from "../asset/javascript.png";
import react from "../asset/React.png";

const skills = [
  {
    id: 1,
    name: "HTML",
    pic: html,
  },
  {
    id: 2,
    name: "CSS3",
    pic: css,
  },
  {
    id: 3,
    name: "Javascript",
    pic: javascript,
  },
  {
    id: 4,
    name: "React",
    pic: react,
  },
];

function Skills() {
  return (
    <div className="skills-container" id="skills-section">
      <h5>SKILLS</h5>
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill">
            <img src={skill.pic} alt="" height={70} width={100} />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
