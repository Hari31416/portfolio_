import {
  SiPython,
  SiMicrosoftsqlserver,
  SiDocker,
  SiMicrosoftazure,
  SiJavascript,
  SiHtml5,
  SiWindowsterminal,
  SiApacheairflow,
  SiScikitlearn,
  SiMongodb,
  SiPandas,
  SiPytorch,
  SiTensorflow,
  SiSelenium,
  SiGithub,
  SiTableau,
  SiHuggingface,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt, FaAws } from "react-icons/fa";

import React from "react";

const skillsConfig = {
  mainSkills: [
    {
      id: "skills-0",
      className: "skill-icon",
      icon: <SiPython size={50} />,
      text: "Python",
    },
    {
      id: "skills-1",
      className: "skill-icon",
      icon: <GrMysql size={50} />,
      text: "MySQL",
    },
    {
      id: "skills-2",
      className: "skill-icon",
      icon: <SiScikitlearn size={50} />,
      text: "Scikit-learn",
    },
    {
      id: "skills-3",
      className: "skill-icon",
      icon: <SiPandas size={50} />,
      text: "pandas",
    },
    {
      id: "skills-4",
      className: "skill-icon",
      icon: <SiPytorch size={50} />,
      text: "PyTorch",
    },
    {
      id: "skills-5",
      className: "skill-icon",
      icon: <FaGitAlt size={50} />,
      text: "Git",
    },
    {
      id: "skills-6",
      className: "skill-icon",
      icon: <SiHuggingface size={50} />,
      text: "HuggingFace",
    },
  ],
  complementarySkills: [
    {
      id: "skills-7",
      className: "skill-icon",
      icon: <SiTensorflow size={50} />,
      text: "TensorFlow",
    },
    {
      id: "skills-8",
      className: "skill-icon",
      icon: <SiGithub size={50} />,
      text: "GitHub",
    },
    {
      id: "skills-9",
      className: "skill-icon",
      icon: <SiTableau size={50} />,
      text: "Tableau",
    },
    {
      id: "skills-10",
      className: "skill-icon",
      icon: <SiWindowsterminal size={50} />,
      text: "Bash",
    },
    {
      id: "skills-11",
      className: "skill-icon",
      icon: <SiMongodb size={50} />,
      text: "MongoDB",
    },
    {
      id: "skills-12",
      className: "skill-icon",
      icon: <SiApacheairflow size={50} />,
      text: "Airflow",
    },
    {
      id: "skills-13",
      className: "skill-icon",
      icon: <SiDocker size={50} />,
      text: "Docker",
    },
    {
      id: "skills-14",
      className: "skill-icon",
      icon: <SiJavascript size={50} />,
      text: "JavaScript",
    },
    {
      id: "skills-15",
      className: "skill-icon",
      icon: <SiSelenium size={50} />,
      text: "Selenium",
    },
    {
      id: "skills-16",
      className: "skill-icon",
      icon: <SiMicrosoftsqlserver size={50} />,
      text: "MSSQL",
    },
    {
      id: "skills-17",
      className: "skill-icon",
      icon: <SiHtml5 size={50} />,
      text: "HTML 5",
    },
    {
      id: "skills-18",
      className: "skill-icon",
      icon: <SiMicrosoftazure size={50} />,
      text: "Azure",
    },
    {
      id: "skills-19",
      className: "skill-icon",
      icon: <FaAws size={50} />,
      text: "AWS",
    },
  ],
};

export default skillsConfig
