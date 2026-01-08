import React, { useState } from 'react';
// import './Students.css';

const Students = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [searchTerm, setSearchTerm] = useState('');

  const studentProfile = {
    name: "Alex Morgan",
    studentId: "2021-CE-123",
    department: "Computer Engineering",
    batch: "2021",
    semester: "7th",
    cgpa: "3.65",
    email: "alex.morgan@student.neduet.edu.pk",
    phone: "+92 300 1234567",
    address: "Hostel A, Room 305, NED University",
    dateOfBirth: "2002-05-15",
    enrollmentDate: "2021-09-01",
    status: "Active",
    bloodGroup: "O+",
    emergencyContact: "+92 300 7654321"
  };

  const courses = [
    { code: 'CE-301', name: 'Data Structures', credits: 3, grade: 'A', instructor: 'Dr. Ahmed', attendance: '87%' },
    { code: 'CE-302', name: 'Database Systems', credits: 3, grade: 'A-', instructor: 'Dr. Sara', attendance: '83%' },
    { code: 'CE-303', name: 'Operating Systems', credits: 3, grade: 'B+', instructor: 'Dr. Khan', attendance: '90%' },
    { code: 'CE-304', name: 'Computer Networks', credits: 3, grade: 'A', instructor: 'Dr. Raza', attendance: '84%' },
    { code: 'CE-305', name: 'Software Engineering', credits: 3, grade: 'B+', instructor: 'Dr. Fatima', attendance: '80%' }
  ];

  const fees = {
    tuitionFee: 75000,
    hostelFee: 20000,
    libraryFee: 5000,
    labFee: 10000,
    total: 110000,
    paid: 90000,
    due: 20000,
    dueDate: "2024-04-15"
  };

  const announcements = [
    { id: 1, title: 'Midterm Schedule Released', date: '2024-03-20', urgency: 'high' },
    { id: 2, title: 'Scholarship Application Deadline', date: '2024-03-25', urgency: 'high' },
    { id: 3, title: 'Sports Week Registration Open', date: '2024-03-18', urgency: 'medium' },
    { id: 4, title: 'Library Extended Hours', date: '2024-03-15', urgency: 'low' }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'courses', label: 'Courses', icon: '📚' },
    { id: 'grades', label: 'Grades', icon: '📊' },
    { id: 'attendance', label: 'Attendance', icon: '✅' },
    { id: 'fees', label: 'Fee Status', icon: '💰' },
    { id: 'documents', label: 'Documents', icon: '📄' }
  ];

  const Documents = [
    { name: 'Admission Letter', date: '2021-09-01', type: 'PDF', size: '2.4 MB' },
    { name: 'Fee Challan', date: '2024-03-01', type: 'PDF', size: '1.2 MB' },
    { name: 'Character Certificate', date: '2023-12-15', type: 'PDF', size: '1.8 MB' },
    { name: 'ID Card Copy', date: '2021-10-10', type: 'JPG', size: '0.8 MB' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="profile-tab">
            <div className="profile-header-card">
              <div className="profile-avatar">AM</div>
              <div className="profile-info-main">
                <h2>{studentProfile.name}</h2>
                <p className="student-id">{studentProfile.studentId}</p>
                <span className="status-badge active">{studentProfile.status}</span>
              </div>
            </div>

            <div className="profile-details-grid">
              <div className="detail-card">
                <h3>Academic Information</h3>
                <div className="details-list">
                  <DetailItem label="Department" value={studentProfile.department} />
                  <DetailItem label="Batch" value={studentProfile.batch} />
                  <DetailItem label="Current Semester" value={studentProfile.semester} />
                  <DetailItem label="CGPA" value={studentProfile.cgpa} />
                  <DetailItem label="Enrollment Date" value={studentProfile.enrollmentDate} />
                </div>
              </div>

              <div className="detail-card">
                <h3>Personal Information</h3>
                <div className="details-list">
                  <DetailItem label="Email" value={studentProfile.email} type="email" />
                  <DetailItem label="Phone" value={studentProfile.phone} type="phone" />
                  <DetailItem label="Address" value={studentProfile.address} />
                  <DetailItem label="Date of Birth" value={studentProfile.dateOfBirth} />
                  <DetailItem label="Blood Group" value={studentProfile.bloodGroup} />
                </div>
              </div>

              <div className="detail-card">
                <h3>Emergency Contact</h3>
                <div className="details-list">
                  <DetailItem label="Contact Person" value="John Morgan" />
                  <DetailItem label="Phone" value={studentProfile.emergencyContact} type="phone" />
                  <DetailItem label="Relationship" value="Father" />
                </div>
              </div>

              <div className="detail-card quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <button className="btn-action">Update Profile</button>
                  <button className="btn-action">Change Password</button>
                  <button className="btn-action">Download ID Card</button>
                  <button className="btn-action">Request Documents</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="courses-tab">
            <div className="section-header">
              <h3>Current Semester Courses</h3>
              <div className="semester-info">
                <span>Spring 2024 • 7th Semester</span>
                <span>Total Credits: 15</span>
              </div>
            </div>

            <div className="courses-grid">
              {courses.map((course, index) => (
                <div className="course-card" key={index}>
                  <div className="course-card-header">
                    <span className="course-code">{course.code}</span>
                    <span className="course-credits">{course.credits} Credits</span>
                  </div>
                  <h4 className="course-title">{course.name}</h4>
                  <div className="course-instructor">
                    <span className="icon">👨‍🏫</span>
                    {course.instructor}
                  </div>
                  <div className="course-stats">
                    <div className="stat">
                      <span className="label">Attendance</span>
                      <span className={`value ${parseInt(course.attendance) >= 85 ? 'good' : 'warning'}`}>
                        {course.attendance}
                      </span>
                    </div>
                    <div className="stat">
                      <span className="label">Grade</span>
                      <span className="value grade">{course.grade}</span>
                    </div>
                  </div>
                  <div className="course-actions">
                    <button className="btn-course">Syllabus</button>
                    <button className="btn-course">Materials</button>
                    <button className="btn-course">Assignments</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="timetable-section">
              <h4>Class Timetable</h4>
              <div className="timetable">
                <table>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Mon</th>
                      <th>Tue</th>
                      <th>Wed</th>
                      <th>Thu</th>
                      <th>Fri</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>09:00-10:30</td>
                      <td>CE-301</td>
                      <td>CE-302</td>
                      <td>-</td>
                      <td>CE-303</td>
                      <td>CE-304</td>
                    </tr>
                    <tr>
                      <td>10:45-12:15</td>
                      <td>CE-302</td>
                      <td>CE-305</td>
                      <td>CE-301</td>
                      <td>-</td>
                      <td>CE-303</td>
                    </tr>
                    <tr>
                      <td>01:30-03:00</td>
                      <td>-</td>
                      <td>CE-304</td>
                      <td>CE-305</td>
                      <td>CE-301</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'grades':
        return (
          <div className="grades-tab">
            <div className="gpa-overview">
              <div className="gpa-card main">
                <h4>Current CGPA</h4>
                <div className="gpa-value">{studentProfile.cgpa}</div>
                <span className="gpa-status">Good Standing</span>
              </div>
              <div className="gpa-card">
                <h4>Total Credits</h4>
                <div className="gpa-value">105</div>
                <span>Completed</span>
              </div>
              <div className="gpa-card">
                <h4>Remaining Credits</h4>
                <div className="gpa-value">15</div>
                <span>To Graduate</span>
              </div>
            </div>

            <div className="grades-table-section">
              <h4>Current Semester Grades</h4>
              <table className="grades-table">
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Midterm</th>
                    <th>Final</th>
                    <th>Total</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => {
                    const midterm = 35 + Math.random() * 10;
                    const final = 40 + Math.random() * 15;
                    const total = Math.round(midterm + final);
                    return (
                      <tr key={index}>
                        <td>{course.code}</td>
                        <td>{course.name}</td>
                        <td>{course.credits}</td>
                        <td>{Math.round(midterm)}</td>
                        <td>{Math.round(final)}</td>
                        <td>{total}/100</td>
                        <td className={`grade-cell grade-${course.grade}`}>
                          {course.grade}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="transcript-actions">
              <button className="btn-download">Download Transcript</button>
              <button className="btn-request">Request Grade Review</button>
              <button className="btn-calculator">GPA Calculator</button>
            </div>
          </div>
        );

      case 'fees':
        return (
          <div className="fees-tab">
            <div className="fee-summary">
              <div className="fee-card total">
                <h4>Total Fee</h4>
                <div className="fee-amount">Rs. {fees.total.toLocaleString()}</div>
              </div>
              <div className="fee-card paid">
                <h4>Paid Amount</h4>
                <div className="fee-amount">Rs. {fees.paid.toLocaleString()}</div>
              </div>
              <div className="fee-card due">
                <h4>Due Amount</h4>
                <div className="fee-amount">Rs. {fees.due.toLocaleString()}</div>
                <span className="due-date">Due by: {fees.dueDate}</span>
              </div>
            </div>

            <div className="fee-breakdown">
              <h4>Fee Breakdown</h4>
              <table className="breakdown-table">
                <thead>
                  <tr>
                    <th>Fee Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuition Fee</td>
                    <td>Rs. {fees.tuitionFee.toLocaleString()}</td>
                    <td><span className="status-paid">Paid</span></td>
                    <td>2024-03-01</td>
                  </tr>
                  <tr>
                    <td>Hostel Fee</td>
                    <td>Rs. {fees.hostelFee.toLocaleString()}</td>
                    <td><span className="status-paid">Paid</span></td>
                    <td>2024-03-01</td>
                  </tr>
                  <tr>
                    <td>Library Fee</td>
                    <td>Rs. {fees.libraryFee.toLocaleString()}</td>
                    <td><span className="status-pending">Pending</span></td>
                    <td>{fees.dueDate}</td>
                  </tr>
                  <tr>
                    <td>Lab Fee</td>
                    <td>Rs. {fees.labFee.toLocaleString()}</td>
                    <td><span className="status-pending">Pending</span></td>
                    <td>{fees.dueDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="payment-actions">
              <button className="btn-pay-now">Pay Now</button>
              <button className="btn-generate-challan">Generate Challan</button>
              <button className="btn-payment-history">Payment History</button>
              <button className="btn-fee-exemption">Apply for Exemption</button>
            </div>
          </div>
        );

      default:
        return (
          <div className="default-tab">
            <h3>{tabs.find(t => t.id === activeTab)?.label}</h3>
            <p>Content for this section is under development.</p>
          </div>
        );
    }
  };

  const DetailItem = ({ label, value, type = 'text' }) => (
    <div className="detail-row">
      <span className="detail-label">{label}:</span>
      <span className={`detail-value ${type}`}>
        {type === 'email' ? <a href={`mailto:${value}`}>{value}</a> : 
         type === 'phone' ? <a href={`tel:${value}`}>{value}</a> : value}
      </span>
    </div>
  );

  return (
    <div className="students-container">
      <div className="students-header">
        <h1>Student Portal</h1>
        <p className="welcome-message">Welcome back, {studentProfile.name}!</p>
      </div>

      <div className="student-search-bar">
        <input
          type="text"
          placeholder="Search courses, announcements, or resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-search">Search</button>
      </div>

      <div className="students-content">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-avatar">AM</div>
            <div className="sidebar-info">
              <h4>{studentProfile.name}</h4>
              <p>{studentProfile.studentId}</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`sidebar-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="sidebar-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-announcements">
            <h4>Latest Announcements</h4>
            {announcements.slice(0, 3).map(ann => (
              <div key={ann.id} className={`announcement-item ${ann.urgency}`}>
                <span className="ann-title">{ann.title}</span>
                <span className="ann-date">{ann.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="main-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Students;