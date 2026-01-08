import React, { useState } from 'react';
// import './Teachers.css';

const Teachers = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState('CE-301');

  const teacherProfile = {
    name: "Dr. Ahmed Khan",
    employeeId: "EMP-7890",
    department: "Computer Engineering",
    designation: "Associate Professor",
    email: "ahmed.khan@neduet.edu.pk",
    phone: "+92 21 99261261 Ext. 1234",
    office: "Computer Dept, Room 205",
    qualification: "Ph.D. Computer Science",
    specialization: "Artificial Intelligence",
    experience: "15 years",
    joiningDate: "2010-03-15"
  };

  const courses = [
    { 
      code: 'CE-301', 
      name: 'Data Structures', 
      semester: '7th', 
      students: 45,
      schedule: 'Mon/Wed 09:00-10:30',
      room: 'Lab-3',
      credits: 3
    },
    { 
      code: 'CE-401', 
      name: 'Artificial Intelligence', 
      semester: '8th', 
      students: 38,
      schedule: 'Tue/Thu 10:45-12:15',
      room: 'Room-402',
      credits: 3
    },
    { 
      code: 'CE-501', 
      name: 'Machine Learning', 
      semester: '9th', 
      students: 32,
      schedule: 'Mon/Wed 01:30-03:00',
      room: 'Lab-5',
      credits: 3
    },
    { 
      code: 'CE-601', 
      name: 'Advanced Algorithms', 
      semester: 'MS', 
      students: 25,
      schedule: 'Fri 09:00-12:00',
      room: 'Room-305',
      credits: 3
    }
  ];

  const students = [
    { id: '2021-CE-101', name: 'Ali Raza', attendance: '92%', assignments: 8, grade: 'A' },
    { id: '2021-CE-102', name: 'Sara Ahmed', attendance: '88%', assignments: 7, grade: 'A-' },
    { id: '2021-CE-103', name: 'Mohammad Khan', attendance: '85%', assignments: 6, grade: 'B+' },
    { id: '2021-CE-104', name: 'Fatima Noor', attendance: '95%', assignments: 9, grade: 'A+' },
    { id: '2021-CE-105', name: 'Usman Ali', attendance: '78%', assignments: 5, grade: 'B' },
    { id: '2021-CE-106', name: 'Zainab Malik', attendance: '90%', assignments: 8, grade: 'A' },
    { id: '2021-CE-107', name: 'Bilal Shah', attendance: '82%', assignments: 6, grade: 'B+' },
    { id: '2021-CE-108', name: 'Ayesha Raza', attendance: '96%', assignments: 9, grade: 'A+' }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'courses', label: 'My Courses', icon: '📚' },
    { id: 'attendance', label: 'Attendance', icon: '✅' },
    { id: 'grades', label: 'Grades', icon: '🎯' },
    { id: 'students', label: 'Students', icon: '👥' },
    { id: 'schedule', label: 'Schedule', icon: '🗓️' },
    { id: 'research', label: 'Research', icon: '🔬' }
  ];

  const announcements = [
    { id: 1, title: 'Faculty Meeting', date: '2024-03-25', time: '02:00 PM' },
    { id: 2, title: 'Midterm Papers Due', date: '2024-03-28', time: '05:00 PM' },
    { id: 3, title: 'Research Grant Deadline', date: '2024-04-05', time: '11:59 PM' },
    { id: 4, title: 'Seminar on AI Ethics', date: '2024-03-30', time: '10:00 AM' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="teacher-dashboard">
            <div className="dashboard-header">
              <h2>Welcome, {teacherProfile.name}</h2>
              <p className="dashboard-subtitle">{teacherProfile.designation}, {teacherProfile.department}</p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📚</div>
                <div className="stat-content">
                  <h3>{courses.length}</h3>
                  <p>Courses Teaching</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <h3>140</h3>
                  <p>Total Students</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-content">
                  <h3>24</h3>
                  <p>Attendance Pending</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📝</div>
                <div className="stat-content">
                  <h3>18</h3>
                  <p>Assignments to Grade</p>
                </div>
              </div>
            </div>

            <div className="quick-actions-grid">
              <h3>Quick Actions</h3>
              <div className="actions-grid">
                <button className="action-btn">Take Attendance</button>
                <button className="action-btn">Upload Materials</button>
                <button className="action-btn">Post Announcement</button>
                <button className="action-btn">Grade Assignments</button>
                <button className="action-btn">Schedule Class</button>
                <button className="action-btn">View Reports</button>
              </div>
            </div>

            <div className="upcoming-classes">
              <h3>Today's Classes</h3>
              <div className="classes-list">
                <div className="class-item">
                  <div className="class-time">09:00 - 10:30</div>
                  <div className="class-details">
                    <h4>Data Structures (CE-301)</h4>
                    <p>Lab-3 • 45 Students</p>
                  </div>
                  <button className="btn-attendance">Take Attendance</button>
                </div>
                <div className="class-item">
                  <div className="class-time">01:30 - 03:00</div>
                  <div className="class-details">
                    <h4>Machine Learning (CE-501)</h4>
                    <p>Lab-5 • 32 Students</p>
                  </div>
                  <button className="btn-attendance">Take Attendance</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="courses-management">
            <h2>My Courses</h2>
            <div className="courses-grid">
              {courses.map((course, index) => (
                <div className="course-card" key={index}>
                  <div className="course-card-header">
                    <span className="course-code">{course.code}</span>
                    <span className="course-credits">{course.credits} Credits</span>
                  </div>
                  <h3 className="course-title">{course.name}</h3>
                  <div className="course-info">
                    <div className="info-item">
                      <span className="label">Semester:</span>
                      <span className="value">{course.semester}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Students:</span>
                      <span className="value">{course.students}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Schedule:</span>
                      <span className="value">{course.schedule}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Room:</span>
                      <span className="value">{course.room}</span>
                    </div>
                  </div>
                  <div className="course-actions">
                    <button className="btn-course-action">Manage</button>
                    <button className="btn-course-action">Materials</button>
                    <button className="btn-course-action">Students</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="course-details-section">
              <h3>Course Management</h3>
              <div className="management-tools">
                <div className="tool-card">
                  <h4>Course Materials</h4>
                  <button className="btn-tool">Upload Syllabus</button>
                  <button className="btn-tool">Add Lecture Notes</button>
                  <button className="btn-tool">Share Resources</button>
                </div>
                <div className="tool-card">
                  <h4>Assignments</h4>
                  <button className="btn-tool">Create Assignment</button>
                  <button className="btn-tool">View Submissions</button>
                  <button className="btn-tool">Set Deadlines</button>
                </div>
                <div className="tool-card">
                  <h4>Assessments</h4>
                  <button className="btn-tool">Create Quiz</button>
                  <button className="btn-tool">Midterm Marks</button>
                  <button className="btn-tool">Final Exam</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'students':
        return (
          <div className="students-management">
            <div className="section-header">
              <h2>Student Management</h2>
              <div className="course-selector">
                <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                  {courses.map(course => (
                    <option key={course.code} value={course.code}>
                      {course.code} - {course.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="students-table-container">
              <table className="students-table">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Attendance</th>
                    <th>Assignments</th>
                    <th>Midterm</th>
                    <th>Final</th>
                    <th>Total</th>
                    <th>Grade</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => {
                    const midterm = 30 + Math.random() * 15;
                    const final = 35 + Math.random() * 20;
                    const total = Math.round(midterm + final);
                    return (
                      <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>
                          <span className={`attendance ${parseInt(student.attendance) >= 85 ? 'good' : 'warning'}`}>
                            {student.attendance}
                          </span>
                        </td>
                        <td>{student.assignments}/10</td>
                        <td>
                          <input type="number" defaultValue={Math.round(midterm)} className="grade-input" />
                        </td>
                        <td>
                          <input type="number" defaultValue={Math.round(final)} className="grade-input" />
                        </td>
                        <td>{total}/100</td>
                        <td>
                          <select defaultValue={student.grade} className="grade-select">
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="F">F</option>
                          </select>
                        </td>
                        <td>
                          <button className="btn-student-action">View</button>
                          <button className="btn-student-action">Message</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bulk-actions">
              <button className="btn-bulk">Update All Grades</button>
              <button className="btn-bulk">Download Student List</button>
              <button className="btn-bulk">Send Bulk Message</button>
              <button className="btn-bulk">Generate Report</button>
            </div>
          </div>
        );

      default:
        return (
          <div className="default-tab">
            <h2>{tabs.find(t => t.id === activeTab)?.label}</h2>
            <p>Content for this section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="teachers-container">
      <div className="teachers-header">
        <div className="header-left">
          <h1>Faculty Portal</h1>
          <p className="teacher-info">
            {teacherProfile.name} • {teacherProfile.designation} • {teacherProfile.department}
          </p>
        </div>
        <div className="header-right">
          <div className="teacher-brief">
            <div className="brief-avatar">AK</div>
            <div className="brief-info">
              <span className="brief-name">{teacherProfile.name}</span>
              <span className="brief-id">{teacherProfile.employeeId}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="teachers-content">
        <div className="teacher-sidebar">
          <div className="sidebar-profile">
            <div className="profile-avatar-large">AK</div>
            <div className="profile-details-sidebar">
              <h3>{teacherProfile.name}</h3>
              <p>{teacherProfile.designation}</p>
              <p>{teacherProfile.department}</p>
            </div>
          </div>

          <nav className="teacher-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="nav-icon">{tab.icon}</span>
                <span className="nav-label">{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-announcements">
            <h4>Upcoming Events</h4>
            {announcements.map(ann => (
              <div key={ann.id} className="event-item">
                <div className="event-title">{ann.title}</div>
                <div className="event-time">{ann.date} • {ann.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="teacher-main-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Teachers;