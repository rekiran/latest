import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareH } from "@fortawesome/free-solid-svg-icons";

const terminal = <FontAwesomeIcon icon={faSquareH} />;
const stackList = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "ReactJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    name: "NextJs",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    name: "C",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    name: "Java",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    name: "Python",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code",
  },
];
export const Skills = () => {
  return (
    <div className="wrapper-skills">
      <div className="Container">
        <div className="SectionTitle">
          {terminal} &nbsp; Technologies I have worked with
        </div>
        <div className="technologies">
          {stackList.map((stack, index) => (
            <a key={index} className="tech">
              <img className="tech-img" src={stack.img} alt={stack.name} />
              <span>{stack.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
