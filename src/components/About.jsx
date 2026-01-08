// AboutPage.jsx
import React from "react";
import Logo from "../assets/university.png"
import Logo2 from "../assets/neduet.png"
import Collboration from "../assets/ilovened.jpg"
import Ned from '../assets/ned.jpg'
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section with University Logos */}
      <section className="about-hero">
        <div className="university-badges">
          <div className="university-logo">
            <div className="logo-circle ned">
              <img src={Logo} alt="" width="100%" id="ned" />
            </div>
            <h3>NED University of Engineering & Technology</h3>
          </div>
          <div className="collaboration-symbol">⚡</div>
          <div className="university-logo">
            <div className="logo-circle thar">
              <img src={Logo2} alt="" width="100%" id="tiest" />
            </div>
            <h3>Thar Institute of Engineering, Science & Technology</h3>
          </div>
        </div>

        <div className="hero-content">
          <h1>Inter-University Collaborative Research Project</h1>
          <p className="hero-subtitle">
            Bridging Engineering Excellence Between Karachi and Thar
          </p>
        </div>

        <div className="hero-image">
          <div className="image-overlay">
            <img src={Collboration} />
            <img src={Collboration} />
            <div className="image-caption">
              <p>
                Collaborative research initiative between NED University and
                TIEST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="section-header">
          <h2>Project Overview</h2>
          <div className="university-highlight">
            <span className="ned-highlight">NED University</span>
            <span className="collaboration-arrow">→</span>
            <span className="thar-highlight">TIEST Collaboration</span>
          </div>
        </div>

        <div className="overview-content">
          <div className="overview-text">
            <h3>Sustainable Engineering Solutions for Regional Development</h3>
            <p>
              This joint research initiative between{" "}
              <strong>
                NED University of Engineering & Technology, Karachi
              </strong>{" "}
              and{" "}
              <strong>
                Thar Institute of Engineering, Science & Technology
              </strong>{" "}
              aims to develop innovative engineering solutions addressing
              regional challenges while promoting academic excellence and
              technological advancement.
            </p>

            <div className="key-points">
              <div className="key-point">
                <span className="point-icon">🎯</span>
                <div>
                  <h4>Research Focus</h4>
                  <p>
                    Renewable energy systems, water conservation technologies,
                    and sustainable infrastructure development tailored for the
                    Thar region.
                  </p>
                </div>
              </div>

              <div className="key-point">
                <span className="point-icon">🤝</span>
                <div>
                  <h4>Collaborative Model</h4>
                  <p>
                    Combining NED's 100+ years of engineering expertise with
                    TIEST's regional insights and field experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-stats">
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-title">Prestigious Universities</div>
              <div className="stat-desc">Working in collaboration</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-title">Engineering Departments</div>
              <div className="stat-desc">Involved in research</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-title">Faculty Members</div>
              <div className="stat-desc">From both institutions</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">2 Years</div>
              <div className="stat-title">Project Duration</div>
              <div className="stat-desc">Phase 1: 2024-2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="universities-section">
        <div className="section-header">
          <h2>Participating Institutions</h2>
          <p className="section-subtitle">
            A collaboration between established excellence and emerging
            potential
          </p>
        </div>

        <div className="university-profiles">
          {/* NED University Profile */}
          <div className="university-profile ned-profile">
            <div className="profile-header">
              <div className="profile-logo ned-logo">
                <span>NED</span>
              </div>
              <h3>NED University of Engineering & Technology</h3>
              <p className="profile-location">
                Karachi, Sindh • Established 1921
              </p>
            </div>

            <div className="profile-details">
              <p>
                <strong>Pakistan's oldest engineering institution</strong> with
                a legacy of over 100 years in technical education. Renowned for
                producing engineering leaders who have shaped Pakistan's
                industrial and technological landscape.
              </p>

              <div className="profile-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🏛️</span>
                  <span>12 Engineering Departments</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">👨‍🎓</span>
                  <span>10,000+ Students</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🔬</span>
                  <span>50+ Research Labs</span>
                </div>
              </div>

              <div className="profile-role">
                <h4>Project Role:</h4>
                <p>
                  Technical expertise, research methodology, advanced laboratory
                  facilities, and academic supervision.
                </p>
              </div>
            </div>
          </div>

          {/* TIEST Profile */}
          <div className="university-profile thar-profile">
            <div className="profile-header">
              <div className="profile-logo thar-logo">
                <span>TIEST</span>
              </div>
              <h3>Thar Institute of Engineering, Science & Technology</h3>
              <p className="profile-location">
                Tharparkar, Sindh • Emerging Institution
              </p>
            </div>

            <div className="profile-details">
              <p>
                <strong>A growing engineering institution</strong> strategically
                located in Tharparkar, focused on addressing regional challenges
                through education and research. Committed to developing
                solutions specific to desert and arid region needs.
              </p>

              <div className="profile-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🌵</span>
                  <span>Desert Region Specialization</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">💧</span>
                  <span>Water Resource Focus</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">☀️</span>
                  <span>Solar Energy Research</span>
                </div>
              </div>

              <div className="profile-role">
                <h4>Project Role:</h4>
                <p>
                  Field implementation, regional insights, community engagement,
                  and practical application of research findings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="objectives-section">
        <div className="section-header">
          <h2>Project Objectives</h2>
          <p className="section-subtitle">
            Addressing regional challenges through innovative engineering
            solutions
          </p>
        </div>

        <div className="objectives-grid">
          <div className="objective-card">
            <div className="objective-icon">💧</div>
            <h3>Water Conservation</h3>
            <p>
              Develop affordable water harvesting and purification systems
              suitable for arid regions like Thar.
            </p>
            <div className="objective-tags">
              <span className="tag">Hydrology</span>
              <span className="tag">Filtration</span>
              <span className="tag">Conservation</span>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">☀️</div>
            <h3>Renewable Energy</h3>
            <p>
              Design and implement solar energy solutions optimized for desert
              conditions and rural communities.
            </p>
            <div className="objective-tags">
              <span className="tag">Solar Power</span>
              <span className="tag">Energy Storage</span>
              <span className="tag">Micro-grids</span>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🏗️</div>
            <h3>Sustainable Infrastructure</h3>
            <p>
              Create building materials and construction techniques using local
              resources for cost-effective housing.
            </p>
            <div className="objective-tags">
              <span className="tag">Local Materials</span>
              <span className="tag">Thermal Comfort</span>
              <span className="tag">Low-cost Design</span>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🌱</div>
            <h3>Agricultural Technology</h3>
            <p>
              Develop drought-resistant farming techniques and efficient
              irrigation systems for arid agriculture.
            </p>
            <div className="objective-tags">
              <span className="tag">Drip Irrigation</span>
              <span className="tag">Crop Science</span>
              <span className="tag">Soil Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="research-section">
        <div className="section-header">
          <h2>Research Domains</h2>
          <p className="section-subtitle">
            Interdisciplinary approach combining expertise from multiple
            engineering fields
          </p>
        </div>

        <div className="research-areas">
          <div className="research-card">
            <div className="research-header">
              <h3>Civil & Environmental Engineering</h3>
              <div className="university-indicator">
                <span className="ned-indicator">NED</span>
                <span className="thar-indicator">TIEST</span>
              </div>
            </div>
            <ul className="research-topics">
              <li>Water resource management in arid regions</li>
              <li>Low-cost housing using local materials</li>
              <li>Desert soil stabilization techniques</li>
              <li>Rainwater harvesting systems</li>
            </ul>
          </div>

          <div className="research-card">
            <div className="research-header">
              <h3>Electrical & Energy Engineering</h3>
              <div className="university-indicator">
                <span className="ned-indicator">NED</span>
                <span className="thar-indicator">TIEST</span>
              </div>
            </div>
            <ul className="research-topics">
              <li>
                Solar power optimization for high-temperature environments
              </li>
              <li>Micro-grid development for remote communities</li>
              <li>Energy storage solutions for intermittent supply</li>
              <li>Efficient power distribution in rural areas</li>
            </ul>
          </div>

          <div className="research-card">
            <div className="research-header">
              <h3>Mechanical & Agricultural Engineering</h3>
              <div className="university-indicator">
                <span className="ned-indicator">NED</span>
                <span className="thar-indicator">TIEST</span>
              </div>
            </div>
            <ul className="research-topics">
              <li>Drip irrigation system design</li>
              <li>Solar-powered agricultural machinery</li>
              <li>Food preservation and storage for arid climates</li>
              <li>Renewable energy for agricultural processing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Team */}
      <section className="team-section">
        <div className="section-header">
          <h2>Project Leadership</h2>
          <p className="section-subtitle">
            Combined expertise from both institutions
          </p>
        </div>

        <div className="team-container">
          <div className="team-column">
            <h3 className="team-column-title">NED University Team</h3>
            <div className="team-member">
              <div className="member-avatar ned-avatar">
                <span>DR</span>
              </div>
              <div className="member-info">
                <h4>Dr. Ahmed Khan</h4>
                <p className="member-title">
                  Project Coordinator • Professor of Civil Engineering
                </p>
                <p className="member-expertise">
                  Water Resource Management, 20+ years experience
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar ned-avatar">
                <span>PS</span>
              </div>
              <div className="member-info">
                <h4>Prof. Sarah Iqbal</h4>
                <p className="member-title">
                  Research Lead • Department of Electrical Engineering
                </p>
                <p className="member-expertise">
                  Renewable Energy Systems, Solar Technology Specialist
                </p>
              </div>
            </div>
          </div>

          <div className="team-column">
            <h3 className="team-column-title">TIEST Team</h3>
            <div className="team-member">
              <div className="member-avatar thar-avatar">
                <span>AR</span>
              </div>
              <div className="member-info">
                <h4>Dr. Ali Raza</h4>
                <p className="member-title">
                  Field Coordinator • Assistant Professor
                </p>
                <p className="member-expertise">
                  Regional Development, Community Engagement Specialist
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar thar-avatar">
                <span>SK</span>
              </div>
              <div className="member-info">
                <h4>Dr. Saima Karim</h4>
                <p className="member-title">
                  Technical Lead • Department of Environmental Sciences
                </p>
                <p className="member-expertise">
                  Arid Zone Ecology, Sustainable Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-section">
        <div className="section-header">
          <h2>Technical Implementation</h2>
          <p className="section-subtitle">
            Modern tools for research, data analysis, and project management
          </p>
        </div>

        <div className="tech-stack">
          <div className="tech-category">
            <h3>Frontend Development</h3>
            <div className="tech-items">
              <div className="tech-item">
                <div className="tech-icon react-icon">⚛️</div>
                <span>React.js</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon css-icon">🎨</div>
                <span>CSS3</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon js-icon">📊</div>
                <span>Chart.js</span>
              </div>
            </div>
          </div>

          <div className="tech-category">
            <h3>Data Analysis</h3>
            <div className="tech-items">
              <div className="tech-item">
                <div className="tech-icon python-icon">🐍</div>
                <span>Python</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon matlab-icon">🔢</div>
                <span>MATLAB</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon gis-icon">🗺️</div>
                <span>GIS Software</span>
              </div>
            </div>
          </div>

          <div className="tech-category">
            <h3>Project Management</h3>
            <div className="tech-items">
              <div className="tech-item">
                <div className="tech-icon git-icon">📚</div>
                <span>Git</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon jira-icon">📋</div>
                <span>Jira</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon docs-icon">📄</div>
                <span>Overleaf</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="outcomes-section">
        <div className="section-header">
          <h2>Expected Outcomes</h2>
          <p className="section-subtitle">
            Tangible benefits for academia and community
          </p>
        </div>

        <div className="outcomes-grid">
          <div className="outcome-card">
            <h3>Academic Contributions</h3>
            <ul>
              <li>Joint research publications in international journals</li>
              <li>
                Development of specialized curriculum for arid region
                engineering
              </li>
              <li>Student exchange programs between institutions</li>
              <li>Shared laboratory resources and expertise</li>
            </ul>
          </div>

          <div className="outcome-card">
            <h3>Community Impact</h3>
            <ul>
              <li>
                Deployable water conservation systems for Thar communities
              </li>
              <li>Affordable solar energy solutions for rural households</li>
              <li>Training programs for local technicians and engineers</li>
              <li>Sustainable agricultural practices for desert farming</li>
            </ul>
          </div>

          <div className="outcome-card">
            <h3>Long-term Vision</h3>
            <ul>
              <li>Establishment of permanent research center in Thar</li>
              <li>Continued collaboration on future projects</li>
              <li>
                Model for other inter-university collaborations in Pakistan
              </li>
              <li>Contribution to UN Sustainable Development Goals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact & Collaboration */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Interested in Collaboration?</h2>
          <p>
            This project welcomes partnerships with industry, NGOs, government
            agencies, and other academic institutions interested in sustainable
            development and engineering innovation.
          </p>

          <div className="contact-options">
            <div className="contact-option">
              <h4>NED University Contact</h4>
              <p>Dr. Ahmed Khan • ahmed.khan@neduet.edu.pk</p>
              <p>Department of Civil Engineering, NED University, Karachi</p>
            </div>

            <div className="contact-option">
              <h4>TIEST Contact</h4>
              <p>Dr. Ali Raza • ali.raza@tiest.edu.pk</p>
              <p>
                Thar Institute of Engineering, Science & Technology, Tharparkar
              </p>
            </div>
          </div>

          <button className="collaboration-btn">Request Project Details</button>
        </div>
      </section>
    </div>
  );
};

export default About;
