import React, { useState } from "react";
import SatelliteImage from "../assets/satelliteImage.png"
import "./Departments.css";

const Department = () => {
  const [active, setActive] = useState("vc");

  const renderContent = () => {
    switch (active) {
      case "vc":
        return (
          <div className="content-section">
            <h2>Vice Chancellor's Message</h2>
            <p>
              Over the past 100 years, NED University has played a pivotal role
              in shaping the lives and careers of thousands of graduates. Rooted
              in its mission to deliver quality education and foster innovation,
              the University continues to evolve in response to the dynamic
              needs of society.
            </p>
            <p>
              With 107 degree programmes and approximately 13,000 students, NED
              prepares future professionals with creativity, analytical ability,
              and practical expertise.
            </p>
            <p>
              Our nationally recognized Centers of Excellence, including NIC,
              NCCDA, NCAI, NCCS, and NCR&A, are engines of innovation
              contributing to Pakistan’s technological future.
            </p>

            <div className="signature">
              <strong>Prof. Dr. Muhammad Tufail</strong>
              <br />
              Vice-Chancellor
            </div>
          </div>
        );

      case "vision":
        return (
          <div className="content-section">
            <h2>Vision & Mission</h2>

            <h4>Our Vision</h4>
            <p>
              Be a leader in enabling Pakistan's social and economic
              transformation.
            </p>

            <h4>Our Mission</h4>
            <p>
              Acquire education and research excellence in engineering and
              allied disciplines to produce leadership and enable application of
              knowledge and skills for the benefit of society with integrity and
              wisdom.
            </p>
          </div>
        );

      case "organization":
        return (
          <div className="content-section">
            <h2>University Organization</h2>

            <h4>Vice Chancellor</h4>
            <p>
              <strong>Prof. Dr. Muhammad Tufail</strong>
              <br />
              B.E. (Mech), M.Sc., Ph.D. (UK)
              <br />
              Email: vc@neduet.edu.pk
            </p>

            <h4>Pro Vice Chancellor</h4>
            <p>
              <strong>Prof. Dr. Noman Ahmed</strong>
              <br />
              B.Arch, Ph.D. (UK)
              <br />
              Email: deanams@neduet.edu.pk
            </p>

            <h4>Registrar</h4>
            <p>
              <strong>Mr. Syed Ghazanfar Hussain</strong>
              <br />
              Email: registrar@neduet.edu.pk
            </p>
          </div>
        );

      case "bodies":
        return (
          <div className="content-section">
            <h2>University Bodies</h2>
            <ul className="list">
              <li>The Senate</li>
              <li>The Syndicate</li>
              <li>The Academic Council</li>
              <li>Board of Faculties</li>
              <li>Board of Studies</li>
              <li>Finance & Planning Committee</li>
              <li>International Advisory Board</li>
            </ul>
          </div>
        );

      case "facilities":
        return (
          <div className="content-section">
            <h2>Facilities</h2>

            <h4>Engr. Abul Kalam Library</h4>
            <p>
              One of Pakistan’s leading engineering academic libraries with
              digital and physical collections, RFID security, and book bank
              facilities.
            </p>

            <h4>Information Technology Services</h4>
            <p>
              Campus-wide WiFi, Metro-LAN, NEDUET-CMS, HPC clusters, video
              conferencing, and 24/7 IT support.
            </p>

            <h4>Medical & Student Facilities</h4>
            <p>
              Medical centers, hostels, sports complex, transport, and student
              welfare services.
            </p>
          </div>
        );

      case "policies":
        return (
          <div className="content-section">
            <h2>Institutional Policies</h2>
            <ul className="list">
              <li>Research Ethics Policy</li>
              <li>Plagiarism Policy</li>
              <li>Academic Freedom Policy</li>
              <li>Equality & Inclusion Policy</li>
              <li>Anti-Corruption Policy</li>
              <li>No Smoking Policy</li>
            </ul>
          </div>
        );

      case "gallery":
        return (
          <div className="content-section">
            <h2>Photo Gallery</h2>
            <div className="gallery">
              <div className="img-box">Image 1</div>
              <div className="img-box">Image 2</div>
              <div className="img-box">Image 3</div>
            </div>
          </div>
        );

      case "satellite":
        return (
          <div className="content-section">
            <h2>Satellite Image of NED University</h2>
            <div className="satellite">
              <img src={SatelliteImage} alt="" width="100%" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      <aside className="sidebar">
        <h3>Our University</h3>
        <button onClick={() => setActive("vc")}>
          Vice Chancellor's Message
        </button>
        <button onClick={() => setActive("vision")}>Vision & Mission</button>
        <button onClick={() => setActive("organization")}>
          University Organization
        </button>
        <button onClick={() => setActive("bodies")}>University Bodies</button>
        <button onClick={() => setActive("facilities")}>Facilities</button>
        <button onClick={() => setActive("policies")}>
          Institutional Policies
        </button>
        <button onClick={() => setActive("gallery")}>Photo Gallery</button>
        <button onClick={() => setActive("satellite")}>
          Satellite Imagery
        </button>
      </aside>

      <main className="content">{renderContent()}</main>

      
    </div>
    
  );
};

export default Department;
