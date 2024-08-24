import React from 'react'
import { MdAutoGraph } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";

const homeConfig = {
  greeting: (
    <h1 className="heading">
      Hello There! I'm <strong className="main-name"> Harikesh Kushwaha</strong>
    </h1>
  ),
  titles: ["A Data Scientist", "A Machine Learning Specialist"],
  about: {
    start:
      "I am an IITD alumni and working in data science for a year. I'm excited by learning new things and letting the data speak for itself.",
    exit: "I'm fluent in Python, SQL and Python data science ecosystem. I have a deep interest in machine learning, specifically, in the state of the art ML algorithms and research.",
  },
  workTimeline: [
    {
      id: "work-1",
      title: "Senior Analyst",
      company: "Paisabazaar",
      description:
        "Developed and deployed machine learning models for credit risk and fraud detection. Analyzed big data to provide insights.",
      date: "2024-present",
      icon: <FaCreditCard />,
      tags: [
        "ml",
        "hive",
        "python",
        "scikit",
        "pandas",
        "sql",
        "fraud-detection",
      ],
    },
    {
      id: "work-0",
      title: "Junior Data Scientist",
      company: "Nuvoretail Enlytical",
      description:
        "Automated and optimized bidding process for AMS. Build models, microservices, and dashboards.",
      date: "2023-2024",
      icon: <MdAutoGraph />,
      tags: ["python", "mssql", "airflow", "flask", "scikit", "azure", "ml"],
    },
  ],
};


export default homeConfig