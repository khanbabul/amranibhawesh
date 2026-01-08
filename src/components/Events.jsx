import React, { useState } from 'react';
import './Events.css';
import Fastival from  "../assets/ned.jpg"

const Events = () => {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Annual Tech Fest 2024",
      type: "festival",
      date: "2024-03-15",
      time: "09:00 AM - 05:00 PM",
      location: "Main Auditorium",
      description: "Annual technology festival showcasing student projects and innovations",
      image: Fastival
    },
    {
      id: 2,
      title: "Career Fair 2024",
      type: "career",
      date: "2024-03-20",
      time: "10:00 AM - 04:00 PM",
      location: "Sports Complex",
      description: "Connect with top companies and explore job opportunities",
      image: Fastival
    },
    {
      id: 3,
      title: "International Conference on AI",
      type: "conference",
      date: "2024-04-05",
      time: "09:00 AM - 06:00 PM",
      location: "Conference Hall",
      description: "International conference on Artificial Intelligence and Machine Learning",
      image: Fastival
    },
    {
      id: 4,
      title: "Sports Week",
      type: "sports",
      date: "2024-04-10",
      time: "08:00 AM - 08:00 PM",
      location: "Sports Ground",
      description: "Annual inter-department sports competition",
      image: Fastival
    },
    {
      id: 5,
      title: "Alumni Reunion",
      type: "alumni",
      date: "2024-04-25",
      time: "06:00 PM - 10:00 PM",
      location: "Convocation Hall",
      description: "Annual alumni reunion and networking event",
      image: Fastival
    },
    {
      id: 6,
      title: "Workshop on Robotics",
      type: "workshop",
      date: "2024-05-05",
      time: "02:00 PM - 06:00 PM",
      location: "Computer Lab 3",
      description: "Hands-on workshop on robotics and automation",
      image: Fastival
    }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  const eventTypes = [
    { id: 'all', label: 'All Events' },
    { id: 'conference', label: 'Conferences' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'festival', label: 'Festivals' },
    { id: 'career', label: 'Career Fairs' },
    { id: 'sports', label: 'Sports' },
    { id: 'alumni', label: 'Alumni Events' }
  ];

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>University Events</h1>
        <p className="events-subtitle">Stay updated with upcoming events and activities</p>
      </div>

      <div className="events-filter">
        {eventTypes.map(type => (
          <button
            key={type.id}
            className={`filter-btn ${filter === type.id ? 'active' : ''}`}
            onClick={() => setFilter(type.id)}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {filteredEvents.map(event => (
            <div className="event-card" key={event.id}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <span className={`event-type ${event.type}`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-details">
                  <div className="detail-item">
                    <span className="icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="icon">⏰</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <span className="icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-actions">
                  <button className="register-now">Register Now</button>
                  <button className="btn-details">More Info</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Events;