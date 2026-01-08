import React, { useState } from "react";
import "./research.css";
import NEDLogo from "../assets/university.png"; // Add NED University logo in assets folder

const researchData = [
  {
    id: 1,
    title: "Artificial Intelligence Lab",
    img: "https://www.neduet.edu.pk/sites/default/files/campus-map/campusMap.jpg",
    description: "Focused on AI, Machine Learning, and Robotics research.",
  },
  {
    id: 2,
    title: "Renewable Energy Research",
    img: "https://www.neduet.edu.pk/sites/default/files/campus-map/campusMap.jpg",
    description: "Innovating in solar, wind, and sustainable energy solutions.",
  },
  {
    id: 3,
    title: "Civil Engineering Innovations",
    img: "https://www.neduet.edu.pk/sites/default/files/campus-map/campusMap.jpg",
    description:
      "Research on sustainable urban development and infrastructure.",
  },
  {
    id: 4,
    title: "Cybersecurity Lab",
    img: "https://www.neduet.edu.pk/sites/default/files/campus-map/campusMap.jpg",
    description: "Focus on protecting digital systems and networks.",
  },
  {
    id: 5,
    title: "Robotics & Automation",
    img: "https://www.neduet.edu.pk/sites/default/files/campus-map/campusMap.jpg",
    description: "Developing autonomous systems and intelligent robots.",
  },
  {
    id: 6,
    title: "Data Science Center",
    img: "https://www.neduet.edu.pk/sites/default/files/campus-map/campusMap.jpg",
    description: "Analyzing big data and predictive modeling research.",
  },
  {
    id: 7,
    title: "Data Science Center",
    img: "https://www.neduet.edu.pk/sites/default/files/campus-map/campusMap.jpg",
    description: "Analyzing big data and predictive modeling research.",
  },
  {
    id: 7,
    title: "Data Science Center",
    img: "https://www.neduet.edu.pk/sites/default/files/campus-map/campusMap.jpg",
    description: "Analyzing big data and predictive modeling research.",
  },
];

const Research = () => {
  const [selectedResearch, setSelectedResearch] = useState(null);

  return (
    <div className={`research-container ${selectedResearch ? "blur" : ""}`}>
      <header className="research-header">
        <img src={NEDLogo} alt="NED University Logo" className="logo" />
        <h1>NED University of Engineering & Technology</h1>
      </header>

      <h2 className="research-title">Research Projects & Labs</h2>

      <div className="research-grid">
        {researchData.map((research) => (
          <div className="research-card" key={research.id}>
            <img src={research.img} alt={research.title} />
            <h3>{research.title}</h3>
            <button onClick={() => setSelectedResearch(research)}>
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedResearch && (
        <div className="modal-overlay">
          <div className="modal">
            <img src={selectedResearch.img} alt={selectedResearch.title} />
            <h2>{selectedResearch.title}</h2>
            <p>{selectedResearch.description}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedResearch(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Research;
