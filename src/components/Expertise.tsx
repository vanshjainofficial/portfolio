import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const allSkills = [
  "HTML", "CSS", "JavaScript", "React", "Vite", "Node.js", "TypeScript",
  "Express.js", "Python", "Java", "SQL", "Git", "GitHub",
  "Problem Solving", "REST APIs", "CMA", "Bootstrap",
  "Material UI", "Figma", "Responsive Design", "Debugging", "Teamwork",
  "Communication", "Time Management", "VS Code",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <p>
          I have hands-on experience building responsive websites and full-stack web applications using HTML, CSS, JavaScript, and React. I've also developed projects with Vite, Node.js, and Express, and worked with Python and Java. My skill set includes both frontend and backend development, with an understanding of REST APIs, version control, database management, and problem-solving.
        </p>
        <div className="flex-chips all-skills">
          {allSkills.map((skill, index) => (
            <Chip key={index} className="chip" label={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;