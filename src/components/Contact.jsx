import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const departments = [
    {
      name: "Admission Office",
      email: "admissions@neduet.edu.pk",
      phone: "+92 21 99261261-8 Ext. 2412",
      location: "Admin Block, Ground Floor",
      hours: "9:00 AM - 4:00 PM (Mon-Fri)",
      person: "Mr. Abdul Rahman"
    },
    {
      name: "Registrar Office",
      email: "registrar@neduet.edu.pk",
      phone: "+92 21 99261261-8 Ext. 2201",
      location: "Admin Block, 1st Floor",
      hours: "9:00 AM - 4:00 PM (Mon-Fri)",
      person: "Dr. Mohammad Ali"
    },
    {
      name: "Examination Department",
      email: "examination@neduet.edu.pk",
      phone: "+92 21 99261261-8 Ext. 2302",
      location: "Academic Block, 2nd Floor",
      hours: "10:00 AM - 3:00 PM (Mon-Fri)",
      person: "Ms. Fatima Khan"
    },
    {
      name: "Accounts Department",
      email: "accounts@neduet.edu.pk",
      phone: "+92 21 99261261-8 Ext. 2403",
      location: "Admin Block, Ground Floor",
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      person: "Mr. Salman Ahmed"
    },
    {
      name: "Computer Engineering Department",
      email: "computer@neduet.edu.pk",
      phone: "+92 21 99261261-8 Ext. 3101",
      location: "Computer Engineering Building",
      hours: "9:00 AM - 5:00 PM (Mon-Fri)",
      person: "Dr. Ahmed Khan (HOD)"
    },
    {
      name: "Electrical Engineering Department",
      email: "electrical@neduet.edu.pk",
      phone: "+92 21 99261261-8 Ext. 3201",
      location: "Electrical Engineering Building",
      hours: "9:00 AM - 5:00 PM (Mon-Fri)",
      person: "Dr. Sara Raza (HOD)"
    }
  ];

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'admission', label: 'Admission Related' },
    { value: 'academic', label: 'Academic Matters' },
    { value: 'examination', label: 'Examination Issues' },
    { value: 'fee', label: 'Fee and Payments' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'complaint', label: 'Complaint/Suggestion' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: 'general',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">Get in touch with NED University of Engineering & Technology</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="university-address">
            <h2>University Address</h2>
            <div className="address-card">
              <h3>NED University of Engineering & Technology</h3>
              <p>University Road, Karachi-75270, Pakistan</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div>
                    <strong>Phone:</strong>
                    <p>+92 21 99261261-8</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">📧</span>
                  <div>
                    <strong>Email:</strong>
                    <p>info@neduet.edu.pk</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">🌐</span>
                  <div>
                    <strong>Website:</strong>
                    <p>www.neduet.edu.pk</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">🕒</span>
                  <div>
                    <strong>Office Hours:</strong>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="emergency-contacts">
            <h2>Emergency Contacts</h2>
            <div className="emergency-cards">
              <div className="emergency-card">
                <span className="emergency-icon">🚨</span>
                <h4>Campus Security</h4>
                <p>+92 21 99261261 Ext. 999</p>
                <p>Available 24/7</p>
              </div>
              <div className="emergency-card">
                <span className="emergency-icon">🏥</span>
                <h4>Medical Emergency</h4>
                <p>+92 21 99261261 Ext. 111</p>
                <p>First Aid & Ambulance</p>
              </div>
              <div className="emergency-card">
                <span className="emergency-icon">🚒</span>
                <h4>Fire & Safety</h4>
                <p>+92 21 99261261 Ext. 222</p>
                <p>Emergency Response</p>
              </div>
            </div>
          </div>

          <div className="department-contacts">
            <h2>Department Contacts</h2>
            <div className="departments-grid">
              {departments.map((dept, index) => (
                <div className="department-card" key={index}>
                  <h4>{dept.name}</h4>
                  <div className="dept-details">
                    <p><strong>Contact Person:</strong> {dept.person}</p>
                    <p><strong>Phone:</strong> {dept.phone}</p>
                    <p><strong>Email:</strong> {dept.email}</p>
                    <p><strong>Location:</strong> {dept.location}</p>
                    <p><strong>Hours:</strong> {dept.hours}</p>
                  </div>
                  <button className="btn-contact-dept">Contact</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-header">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible</p>
          </div>

          {submitted ? (
            <div className="success-message">
              <span className="success-icon">✅</span>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting us. We will get back to you within 24-48 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject of your message"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    {categories.map((cat, index) => (
                      <option key={index} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Please type your message here..."
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Send Message
                </button>
                <button type="reset" className="btn-reset">
                  Clear Form
                </button>
              </div>
            </form>
          )}

          <div className="response-time">
            <h3>Our Response Time</h3>
            <div className="time-cards">
              <div className="time-card">
                <span className="time-icon">⚡</span>
                <h4>General Inquiries</h4>
                <p>24-48 hours</p>
              </div>
              <div className="time-card">
                <span className="time-icon">📋</span>
                <h4>Admission Queries</h4>
                <p>1-2 business days</p>
              </div>
              <div className="time-card">
                <span className="time-icon">🎓</span>
                <h4>Academic Matters</h4>
                <p>2-3 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="campus-location">
        <h2>Find Us on Campus</h2>
        <div className="location-info">
          <div className="map-placeholder">
            <div className="map-image">
              <span className="map-icon">📍</span>
              <h3>Campus Map</h3>
              <p>Interactive map coming soon</p>
            </div>
          </div>
          <div className="directions">
            <h3>Directions</h3>
            <div className="direction-methods">
              <div className="direction-method">
                <h4>By Car</h4>
                <p>Located on University Road near Gulshan-e-Iqbal</p>
              </div>
              <div className="direction-method">
                <h4>Public Transport</h4>
                <p>Bus routes: 1C, 2C, 5A stop near campus</p>
              </div>
              <div className="direction-method">
                <h4>Landmarks</h4>
                <p>Near NIPA, opposite Civic Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-media">
        <h3>Connect With Us</h3>
        <div className="social-links">
          <a href="#" className="social-link facebook">
            <span className="social-icon">📘</span>
            <span>Facebook</span>
          </a>
          <a href="#" className="social-link twitter">
            <span className="social-icon">🐦</span>
            <span>Twitter</span>
          </a>
          <a href="#" className="social-link instagram">
            <span className="social-icon">📷</span>
            <span>Instagram</span>
          </a>
          <a href="#" className="social-link linkedin">
            <span className="social-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="#" className="social-link youtube">
            <span className="social-icon">🎬</span>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;