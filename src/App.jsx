import React, { useState, useRef, useEffect} from "react";
import "./App.css";
import { Star, ChevronRight } from "lucide-react";
import nedLogo from "./assets/university.png";
import NedUniversity from "./assets/welcome.jpg";
import NedCampus from "./assets/nedcampus.jpg"
import Classroom from "./assets/classroom.jpg"
import FacilityHouse from "./assets/class.jpg"
import IntroGate from "./assets/mainGate.jpeg"
import TiestBus from "./assets/park.jpeg"
import Uniform from "./assets/uniform.jpeg"
import WaterCooler from "./assets/watercooler.jpeg"
import ILoveNED from "./assets/ilovened.jpg"
import TopStudents from "./assets/friends.jpg"
import News3 from "./assets/news3.jpg"
import News2 from "./assets/news2.png"
import News1 from "./assets/news1.jpg";
import OurUniversity from "./assets/ned.jpg"




import Nedbus from "./assets/tiest.png"




import Facebook from "./assets/facebook.png";
import Instagram from "./assets/instagram.png";
import Youtube from "./assets/Youtube.png";
import Linkdin from "./assets/linkedin.png";

import Facility from "./assets/ilovened.jpg";

// Import all page components
import About from "./components/About";
import Departments from "./components/Departments";
import Events from "./components/Events";
import Research from "./components/Research";
import Gallery from "./components/Gallery";
import Students from "./components/Students";
import Teachers from "./components/Teachers";
import Contact from "./components/Contact";

// Import images for image slider
import Image1 from "./assets/ned.jpg";
import Image2 from "./assets/university.png";
import Image3 from "./assets/technology.png";

// Import images for University Overview
import LibraryImg from "./assets/ned.jpg";
import LabImg from "./assets/ned.jpg";
import CampusImg from "./assets/technology.png";
import SportsImg from "./assets/ned.jpg";
import AuditoriumImg from "./assets/ned.jpg";
import ResearchImg from "./assets/visit.png";
import ClassroomImg from "./assets/ned.jpg";
import HostelImg from "./assets/ned.jpg";
import ComputerLabImg from "./assets/ned.jpg";
// import { redirect } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [setSliderIndex] = useState(0);
  const [overviewIndex, setOverviewIndex] = useState(0);
  const [activeFacility, setActiveFacility] = useState("hostels");
  const contentRef = useRef(null);
   const [events, setEvents] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [filter, setFilter] = useState("all"); // 'all', 'upcoming', 'past'
   const eventsPerPage = 6;

  // Image Slider Data
  const sliderImages = [
    {
      src: Image1,
      title: "Main Campus View",
      description: "Beautiful view of NED University main campus",
    },
    {
      src: Image2,
      title: "University Building",
      description: "Modern infrastructure and facilities",
    },
    {
      src: Image3,
      title: "Technology Center",
      description: "Advanced technology and research facilities",
    },
  ];
  

  const faculties = [
    {
      title: "Faculty of Civil and Petroleum Engineering (CPL)",
      dean: "Dean Faculty of Civil and Petroleum Engineering",
      departments: [
        "Department of Civil Engineering",
        "Department of Urban and Infrastructure Engineering",
        "Department of Petroleum Engineering",
        "Department of Earthquake Engineering",
        "Department of Environmental Engineering",
      ],
    },
    {
      title: "Faculty of Electrical and Computer Engineering (ECE)",
      dean: "Dean Faculty of Electrical and Computer Engineering",
      departments: [
        "Department of Electrical Engineering",
        "Department of Electronic Engineering",
        "Department of Telecommunications Engineering",
        "Department of Computer and Information Systems Engineering",
        "Department of Bio-Medical Engineering",
        "Department of Computer Science & Information Technology",
        "Department of Software Engineering",
      ],
    },
    {
      title: "Faculty of Mechanical and Manufacturing Engineering (MME)",
      dean: "Dean Faculty of Mechanical and Manufacturing Engineering",
      departments: [
        "Department of Mechanical Engineering",
        "Department of Industrial and Manufacturing Engineering",
        "Department of Textile Engineering",
        "Department of Automotive and Marine Engineering",
      ],
    },
  ];

  // University Overview Images with Titles
  const overviewImages = [
    {
      src: LibraryImg,
      title: "Central Library",
      description: "Engr. Abul Kalam Library with 100,000+ books",
    },
    {
      src: LabImg,
      title: "Research Laboratory",
      description: "State-of-the-art engineering laboratories",
    },
    {
      src: CampusImg,
      title: "Main Campus",
      description: "Sprawling 40-acre campus in Karachi",
    },
    {
      src: SportsImg,
      title: "Sports Complex",
      description: "Modern sports facilities and gymnasium",
    },
    {
      src: AuditoriumImg,
      title: "Auditorium",
      description: "500-seat capacity auditorium for events",
    },
    {
      src: ResearchImg,
      title: "Research Center",
      description: "Advanced research and innovation center",
    },
    {
      src: ClassroomImg,
      title: "Smart Classrooms",
      description: "Modern classrooms with latest technology",
    },
    {
      src: HostelImg,
      title: "Student Hostels",
      description: "Comfortable accommodation for students",
    },
    {
      src: ComputerLabImg,
      title: "Computer Labs",
      description: "High-tech computer laboratories",
    },
  ];

  const studentReviews = [
    {
      id: 1,
      name: "Ali Raza",
      profileImg: nedLogo,
      rating: 5,
      department: "Computer Engineering",
      comment:
        "The faculty is highly supportive and the curriculum is industry-relevant. Great learning experience!",
      shortComment: "Excellent learning experience with great faculty support.",
    },
    {
      id: 2,
      name: "Sara Khan",
      profileImg: nedLogo,
      rating: 4,
      department: "Electrical Engineering",
      comment:
        "Well-equipped labs and practical approach make learning enjoyable and effective.",
      shortComment: "Practical learning with well-equipped labs.",
    },
    {
      id: 3,
      name: "Usman Ahmed",
      profileImg: nedLogo,
      rating: 5,
      department: "Civil Engineering",
      comment:
        "The field visits and industrial training programs are exceptionally well-organized.",
      shortComment: "Excellent industrial training programs.",
    },
    {
      id: 4,
      name: "Fatima Noor",
      profileImg: nedLogo,
      rating: 4,
      department: "Software Engineering",
      comment:
        "Project-based learning helps in building a strong portfolio for future career.",
      shortComment: "Great project-based learning approach.",
    },
    {
      id: 5,
      name: "Bilal Hassan",
      profileImg: nedLogo,
      rating: 5,
      department: "Mechanical Engineering",
      comment:
        "Excellent workshop facilities and hands-on training opportunities.",
      shortComment: "Best workshop facilities available.",
    },
    {
      id: 6,
      name: "Ayesha Malik",
      profileImg: nedLogo,
      rating: 4,
      department: "Biomedical Engineering",
      comment:
        "Innovative teaching methods and research opportunities in healthcare technology.",
      shortComment: "Innovative teaching methods.",
    },
    {
      id: 7,
      name: "Omar Farooq",
      profileImg: nedLogo,
      rating: 5,
      department: "Chemical Engineering",
      comment:
        "State-of-the-art labs and excellent industry connections for career growth.",
      shortComment: "State-of-the-art laboratory facilities.",
    },
    {
      id: 8,
      name: "Zainab Ali",
      profileImg: nedLogo,
      rating: 4,
      department: "Architecture",
      comment:
        "Creative environment with excellent studio facilities and design critiques.",
      shortComment: "Creative learning environment.",
    },
    {
      id: 9,
      name: "Hassan Rizvi",
      profileImg: nedLogo,
      rating: 5,
      department: "Telecommunications",
      comment:
        "Modern communication labs and excellent research opportunities available.",
      shortComment: "Modern labs and research opportunities.",
    },
    {
      id: 10,
      name: "Nadia Shah",
      profileImg: nedLogo,
      rating: 4,
      department: "Industrial Engineering",
      comment:
        "Practical approach to problem-solving and excellent industry exposure.",
      shortComment: "Excellent industry exposure.",
    },
  ];

 const newsData = [
   {
     source: "The Express Tribune",
     title:
       "Undergraduate - Online progressive transcripts of Undergraduate Fall Semester 2025 are live and accessible at student portal.",
     time: "December 30, 2025",
     image:
       News1,
   },

   {
     source: "Dawn",
     title:
       "Revised Notice - Registration of Spring Semester 2026 Undergraduate Programme",
     time: "December 29, 2025",
     image:
       News2,
   },
   {
     source: "Business Wire",
     title:
       "Undergraduate - All Results of Fall Semester Examinations - 2025 are announced and grades uploaded at student portal",
     time: "December 24, 2025",
     image:
       News3,
   },
 ];
  // Render star ratings
  const renderStars = (rating) => {
    return (
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={`star ${star <= rating ? "filled" : ""}`}
            fill={star <= rating ? "#ffd700" : "#e5e7eb"}
            stroke={star <= rating ? "#ffc107" : "#d1d5db"}
          />
        ))}
        <div className="rating-circle">
          <span className="rating-number">{rating}.0</span>
        </div>
      </div>
    );
  };


  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  // Image Slider Functions
  // const nextSlider = () => {
  //   setSliderIndex((prev) => (prev + 1) % sliderImages.length);
  // };

  const prevSlider = () => {
    setSliderIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  // University Overview Slider Functions
  const nextOverview = () => {
    setOverviewIndex((prev) => (prev + 1) % overviewImages.length);
  };

  const prevOverview = () => {
    setOverviewIndex(
      (prev) => (prev - 1 + overviewImages.length) % overviewImages.length
    );
  };

   const facilities = {
     hostels: {
       title: "Student Hostels & Accommodation",
       description:
         "The University provides comfortable residential accommodation for outstation students through Muhammad Bin Qasim (MBQ) Hostel, located adjacent to the main campus. This facility consists of separate blocks for boys and girls, and a dedicated International Students Hostel.",
       image:
         "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       sections: [
         {
           title: "Hostel Facilities",
           content:
             "The hostels are equipped with essential amenities including Common Rooms, Prayer Halls, Warden's Office, and Canteens. Additional services include Wi-Fi connectivity throughout the premises, washing and laundry services, and a Hostel Management Information System (HMIS) for computerized record keeping.",
         },
         {
           title: "Hostel Accommodation Details",
           content: `
            <h4>MBQ-I (Boys Hostel)</h4>
            <ul>
              <li><strong>Cubicle Rooms:</strong> 16 rooms (102 sq. ft. each) for 16 students</li>
              <li><strong>Dormitory Rooms:</strong> 34 rooms (203 sq. ft. each)</li>
            </ul>
            
            <h4>MBQ-II (Boys Hostel)</h4>
            <ul>
              <li><strong>Cubicle Rooms:</strong> 48 rooms (102 sq. ft. each) for 48 students</li>
              <li><strong>Dormitory Rooms:</strong> 72 rooms (203 sq. ft. each)</li>
            </ul>
            
            <h4>Girls Hostel</h4>
            <ul>
              <li><strong>Dormitory Rooms:</strong> 20 rooms (192 sq. ft. each) for 41 students</li>
            </ul>
            
            <h4>International Students Hostel</h4>
            <p>Separate accommodation facilities for international students with enhanced amenities.</p>
          `,
         },
         {
           title: "Allotment Process",
           content:
             "Hostel accommodation is primarily reserved for non-resident students of Karachi. The allotment process is transparent and merit-based, managed by a Hostel Allotment Committee. Applications are invited from newly admitted first-year students in November, and allocation follows a 'first come, first served' principle with a maintained merit list. Due to room shortages, dormitories accommodate three students each, while cubicle rooms are reserved for final-year students.",
         },
         {
           title: "Additional Services",
           content:
             "While boarding facilities are not provided, canteen services offer daily meals and refreshments. Residents have access to Wi-Fi for academic resources and laundry facilities. All hostel operations are managed through the HMIS system, and charges are collected semester-wise in advance.",
         },
       ],
     },
     classrooms: {
       title: "Classrooms & Learning Spaces",
       description:
         "State-of-the-art classrooms and lecture halls equipped with modern teaching aids to facilitate effective learning.",
       image:
         Classroom,
       sections: [
         {
           title: "Classroom Facilities",
           content:
             "The campus features 140 regular classrooms designed for interactive learning and student engagement.",
         },
         {
           title: "Smart Classrooms",
           content:
             "6 fully-equipped smart classrooms with advanced audio-visual systems, interactive whiteboards, and high-speed internet connectivity for enhanced digital learning experiences.",
         },
         {
           title: "Lecture Halls",
           content:
             "8 spacious lecture halls with comfortable seating, modern acoustics, and presentation facilities to accommodate larger student groups.",
         },
       ],
     },
     auditorium: {
       title: "Auditorium & Convocation Facilities",
       description:
         "Large capacity venues for academic events, convocations, conferences, and cultural activities.",
       image:
         NedUniversity,
       sections: [
         {
           title: "Main Auditorium",
           content:
             "A 550-seating capacity auditorium equipped with modern sound systems, lighting, and projection facilities for academic and cultural events.",
         },
         {
           title: "TIEST Auditorium",
           content:
             "Additional auditorium facility at TIEST for departmental events and presentations.",
         },
         {
           title: "Convocation Ground",
           content:
             "Spacious 250,000 sq. ft. convocation ground for large-scale university events, graduation ceremonies, and cultural festivals.",
         },
       ],
     },
     conferencing: {
       title: "Video Conferencing Facilities",
       description:
         "Modern conferencing facilities for virtual meetings, online classes, and international collaborations.",
       image:
         NedCampus,
       sections: [
         {
           title: "Video Conferencing Halls",
           content:
             "Three fully-equipped video conferencing halls with high-definition cameras, advanced audio systems, and seamless connectivity for hybrid learning and international collaborations.",
         },
       ],
     },
     facultyHousing: {
       title: "Faculty Housing",
       description:
         "On-campus residential accommodation for faculty members with various flat types based on designation.",
       image:
       FacilityHouse
         ,
       sections: [
         {
           title: "Faculty Accommodation",
           content: `
            <table class="faculty-table">
              <thead>
                <tr>
                  <th>Type of Flat</th>
                  <th>No. of Flats</th>
                  <th>Entitlement</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>A</td><td>14</td><td>BPS-20 & above</td><td>---</td></tr>
                <tr><td>B</td><td>20</td><td>BPS-19 & BPS-20</td><td>06 flats under construction</td></tr>
                <tr><td>C</td><td>24</td><td>BPS-17 & BPS-18</td><td>06 flats under construction</td></tr>
                <tr><td>D</td><td>06</td><td>BPS-14 & BPS-16</td><td>---</td></tr>
                <tr><td>E</td><td>22</td><td>BPS-08 to BPS-13</td><td>---</td></tr>
                <tr><td>F</td><td>42</td><td>BPS-01 to BPS-07</td><td>---</td></tr>
                <tr><td>City Campus Flats</td><td>03</td><td>BPS-01 to BPS-07</td><td>---</td></tr>
                <tr class="total-row"><td colspan="4"><strong>Total Flats: 131</strong></td></tr>
              </tbody>
            </table>
          `,
         },
       ],
     },
     technology: {
       title: "Technology & Robotics",
       description:
         "Advanced technology systems including AI and robotics to enhance learning and research capabilities.",
       image:
         Nedbus,
       sections: [
         {
           title: "AI & Robotics Technology",
           content:
             "State-of-the-art robotics and AI systems for cutting-edge research and practical learning in emerging technologies.",
         },
         {
           title: "Hostel Management Information System (HMIS)",
           content:
             "Fully computerized system for efficient management of hostel records, allotments, and operations with complete transparency.",
         },
         {
           title: "Wi-Fi Connectivity",
           content:
             "Campus-wide high-speed internet access, including hostel premises, enabling students to access online academic resources and research materials.",
         },
       ],
     },
   };

   // Facility buttons for sidebar
   const facilityButtons = [
     { id: "hostels", label: "Hostels", icon: "🏠" },
     { id: "classrooms", label: "Classrooms", icon: "📚" },
     { id: "auditorium", label: "Auditorium", icon: "🎭" },
     { id: "conferencing", label: "Video Conferencing", icon: "📹" },
     { id: "facultyHousing", label: "Faculty Housing", icon: "👨‍🏫" },
     { id: "technology", label: "Technology & AI", icon: "🤖" },
   ];

   const handleFacilityClick = (facilityId) => {
     setActiveFacility(facilityId);
     if (contentRef.current) {
       contentRef.current.scrollTop = 0;
     }
   };

   const eventsData = [
     {
       id: 1,
       title: "15th International Mechanical Engineering Conference 2026",
      //  date: "30-31 January 2026",
       type: "conference",
       status: "upcoming",
       theme: "Advancing Mechanical Engineering for Sustainable Development",
       description:
         "Join leading mechanical engineers, researchers, and industry experts from around the globe to discuss the latest advancements in mechanical engineering, sustainable technologies, and future innovations.",
       image:
         "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [
      //    { type: "flyer", url: "#" },
      //    { type: "website", url: "#" },
      //  ],
      //  location: "Main Auditorium",
      //  time: "09:00 AM - 05:00 PM",
       tags: ["Engineering", "Research", "International"],
     },
     {
       id: 2,
       title: "CAREER FAIR 2025",
       subtitle: "By Directorate of Industrial Liaison (DIL)",
      //  date: "19 November 2025",
       type: "career",
       status: "upcoming",
       theme:
         "The NED Career Fair 2025, organized by the Directorate of Industrial Liaison, serves as a vital bridge between graduating students and employers—offering a platform to explore career opportunities and secure jobs across diverse industries.",
       description:
         "Connect with top employers from various industries, attend career workshops, and explore internship opportunities in this premier career development event.",
       image:
         "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [
      //    { type: "brochure", url: "#" },
      //    { type: "sponsorship", url: "#" },
      //  ],
      //  location: "Convocation Ground",
      //  time: "10:00 AM - 06:00 PM",
       tags: ["Career", "Recruitment", "Industry"],
     },
     {
       id: 3,
       title: "3rd International Conference on Economics and Allied Sciences",
      //  date: "11-12 November 2025",
       type: "conference",
       status: "upcoming",
       theme:
         "Innovation, Sustainability, and Islamic Finance: Shaping Pakistan's Green Economy (ISIF-2025)",
       description:
         "Exploring innovative approaches to sustainable economic development with a focus on Islamic finance principles and green economy initiatives.",
       image:
         "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [
      //    { type: "flyer", url: "#" },
      //    { type: "website", url: "#" },
      //  ],
      //  location: "Business School Auditorium",
      //  time: "09:30 AM - 05:30 PM",
       tags: ["Economics", "Finance", "Sustainability"],
     },
     {
       id: 4,
       title: "15th International Civil Engineering Conference (ICEC-2025)",
      //  date: "5-7 November 2025",
       type: "conference",
       status: "upcoming",
       theme:
         "Nano-Driven Material Innovation: Applications in Civil Engineering",
       description:
         "Jointly organized by NEDUET and The IEP, this conference explores nanotechnology's role in revolutionizing civil infrastructure and construction materials.",
       image:
         "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [{ type: "website", url: "#" }],
      //  location: "Civil Engineering Department",
      //  time: "10:00 AM - 06:00 PM",
       tags: ["Civil Engineering", "Nanotechnology", "Construction"],
     },
     {
       id: 5,
       title:
         "11th International Conference of the Linguistics Association of Pakistan",
      //  date: "7-8 November 2025",
       type: "conference",
       status: "upcoming",
       theme:
         "Exploring the Intersections of Language, Technology, and Society: Advancing Internationalization, Sustainability and Inclusive Development",
       description:
         "A multidisciplinary conference focusing on the role of language in technological advancement and societal development.",
       image:
         "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [
      //    { type: "website", url: "#" },
      //    { type: "flyer", url: "#" },
      //  ],
      //  location: "Arts & Humanities Building",
      //  time: "09:00 AM - 05:00 PM",
       tags: ["Linguistics", "Technology", "Society"],
     },
     {
       id: 6,
       title: "International Electrical Engineering Conference (IEEC-2025)",
      //  date: "9-10 May 2025",
       type: "conference",
       status: "postponed",
       theme: "Transforming Horizons in Electrical Engineering - (THRIVE)",
       description:
         "Conference postponed due to security situation. New date to be announced. Exploring cutting-edge developments in electrical engineering and power systems.",
       image:
         NedCampus,
      //  links: [
      //    { type: "website", url: "#" },
      //    { type: "call-for-papers", url: "#" },
      //    { type: "poster", url: "#" },
      //  ],
      //  location: "Electrical Engineering Department",
      //  time: "TBA",
       tags: ["Electrical", "Engineering", "Postponed"],
       isPostponed: true,
     },
     {
       id: 7,
       title: "International Mechanical Engineering Conference 2025",
      //  date: "25-26 April 2025",
       type: "conference",
       status: "past",
       theme: "Advancing Mechanical Systems and Technologies",
       description:
         "A successful gathering of mechanical engineering professionals discussing innovations in mechanical systems and industrial applications.",
       image:
         "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [
      //    { type: "website", url: "#" },
      //    { type: "flyer", url: "#" },
      //  ],
      //  location: "Mechanical Engineering Department",
       tags: ["Mechanical", "Industry", "Completed"],
     },
     {
       id: 8,
       title: "2nd Conference on Architecture – History, Theory & Practice",
      //  date: "31 Jan & 1 Feb 2025",
       type: "conference",
       status: "past",
       theme:
         "Architectural Encounters: Neo-liberalism and Localness-Conflicts and Solutions",
       description:
         "Exploring the tension between global architectural trends and local cultural contexts in contemporary design.",
       image:
         "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [],
      //  location: "Architecture Department",
       tags: ["Architecture", "Design", "Theory"],
     },
     {
       id: 9,
       title:
         "2nd International Conference on Technology-Driven Climate Action",
      //  date: "16-17 January 2025",
       type: "conference",
       status: "past",
       theme: "CLIMATECH-2025",
       description:
         "Focusing on technological solutions for climate change mitigation and adaptation strategies.",
       image:
         "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [
      //    { type: "website", url: "#" },
      //    { type: "call-for-abstract", url: "#" },
      //    { type: "flyer", url: "#" },
      //  ],
      //  location: "Environmental Sciences Department",
       tags: ["Climate", "Technology", "Environment"],
     },
     {
       id: 10,
       title:
         "4th International Conference on Advanced Materials and Process Engineering",
      //  date: "20 November 2024",
       type: "conference",
       status: "past",
       theme: "Innovations in Material Science",
       description:
         "Showcasing breakthroughs in material science and engineering processes.",
       image:
         "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [
      //    { type: "website", url: "#" },
      //    { type: "call-for-paper", url: "#" },
      //    { type: "flyer", url: "#" },
      //  ],
      //  location: "Materials Engineering Department",
       tags: ["Materials", "Engineering", "Research"],
     },
     {
       id: 11,
       title: "CAREER FAIR 2024",
       subtitle: "By Directorate of Industrial Liaison",
      //  date: "19 November 2024",
       type: "career",
       status: "past",
       theme: "Connecting Talent with Opportunity",
       description:
         "A successful career fair connecting students with leading employers across various industries.",
       image:
         "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [
      //    { type: "brochure", url: "#" },
      //    { type: "photographs", url: "#" },
      //    { type: "videos", url: "#" },
      //  ],
      //  location: "University Grounds",
       tags: ["Career", "Networking", "Completed"],
     },
     {
       id: 12,
       title: "University Convocation 2024",
      //  date: "29 October 2024",
       type: "convocation",
       status: "past",
       theme: "Celebrating Academic Excellence",
       description:
         "Annual convocation ceremony honoring graduating students and their academic achievements.",
       image:
         "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //  links: [],
      //  location: "Convocation Ground",
       tags: ["Graduation", "Ceremony", "Celebration"],
     },
   ];

   useEffect(() => {
     // Filter events based on selected filter
     let filteredEvents = [...eventsData];

     if (filter === "upcoming") {
       filteredEvents = eventsData.filter(
         (event) => event.status === "upcoming"
       );
     } else if (filter === "past") {
       filteredEvents = eventsData.filter((event) => event.status === "past");
     }

     setEvents(filteredEvents);
     setCurrentPage(1); // Reset to first page when filter changes
   }, [filter]);

   // Calculate pagination
   const indexOfLastEvent = currentPage * eventsPerPage;
   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
   const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
   const totalPages = Math.ceil(events.length / eventsPerPage);

   const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);
     window.scrollTo({ top: 0, behavior: "smooth" });
   };

   const getStatusBadge = (status, isPostponed) => {
     if (isPostponed) {
       return <span className="event-status postponed">Postponed</span>;
     }

     switch (status) {
       case "upcoming":
         return <span className="event-status upcoming">Upcoming</span>;
       case "past":
         return <span className="event-status past">Past Event</span>;
       default:
         return null;
     }
   };

   const getEventTypeIcon = (type) => {
     switch (type) {
       case "conference":
         return "🎤";
       case "career":
         return "💼";
       case "convocation":
         return "🎓";
       default:
         return "📅";
     }
   };

  //  const getLinkIcon = (linkType) => {
  //    switch (linkType) {
  //      case "website":
  //        return "🌐";
  //      case "flyer":
  //        return "📋";
  //      case "brochure":
  //        return "📄";
  //      case "call-for-papers":
  //        return "📝";
  //      case "photographs":
  //        return "📸";
  //      case "videos":
  //        return "🎬";
  //      default:
  //        return "🔗";
  //    }
  //  };


  // Render content based on active navigation
  const renderContent = () => {
    switch (activeNav) {
      case "home":
        return (
          <>
            {/* NED Visit Section */}
            <section className="NED-Visit">
              <div className="images">
                <img
                  src={NedUniversity}
                  alt="NED University"
                  id="img"
                  width="100%"
                />
              </div>
            </section>

            {/* Courses Section */}

            <section>
              <section className="student-activities-section">
                <h2 className="section-heading">Student Activities</h2>
                <div className="cards-container">
                  {/* Card 1: Robotics Club */}
                  <div className="activity-card">
                    <div className="image-container">
                      <img
                        src={OurUniversity}
                        alt="Students in Robotics Club building robots"
                      />
                      <div className="overlay">
                        <button className="view-details-btn">
                          View Details
                        </button>
                      </div>
                    </div>
                    <br />
                    <h3>⭐⭐⭐⭐</h3>
                    <h3 className="card-title">Mission 2026</h3>
                  </div>

                  {/* Card 2: Sports Team */}
                  <div className="activity-card">
                    <div className="image-container">
                      <img
                        src={NedUniversity}
                        alt="Students playing team sports"
                      />
                      <div className="overlay">
                        <button className="view-details-btn">
                          View Details
                        </button>
                      </div>
                    </div>
                    <br />
                    <h3>⭐⭐⭐⭐</h3>
                    <h3 className="card-title">Welcome</h3>
                  </div>

                  {/* Card 3: Community Volunteering */}
                  <div className="activity-card">
                    <div className="image-container">
                      <img
                        src={Nedbus}
                        alt="Students volunteering in community service"
                      />
                      <div className="overlay">
                        <button className="view-details-btn">
                          View Details
                        </button>
                      </div>
                    </div>
                    <br />
                    <h3>⭐⭐⭐⭐</h3>
                    <h3 className="card-title">Garden</h3>
                  </div>
                </div>
              </section>

              <section className="student-activities-section">
                <div className="cards-container">
                  {/* Card 1: Robotics Club */}
                  <div className="activity-card">
                    <div className="image-container">
                      <img
                        src={IntroGate}
                        alt="Students in Robotics Club building robots"
                      />
                      <div className="overlay">
                        <button className="view-details-btn">
                          View Details
                        </button>
                      </div>
                    </div>
                    <br />
                    <h3>⭐⭐⭐⭐</h3>
                    <h3 className="card-title">Main Gate</h3>
                  </div>

                  {/* Card 2: Sports Team */}
                  <div className="activity-card">
                    <div className="image-container">
                      <img
                        src={TiestBus}
                        alt="Students playing team sports"
                      />
                      <div className="overlay">
                        <button className="view-details-btn">
                          View Details
                        </button>
                      </div>
                    </div>
                    <br />
                    <h3>⭐⭐⭐⭐</h3>
                    <h3 className="card-title">NED Bus</h3>
                  </div>

                  {/* Card 3: Community Volunteering */}
                  <div className="activity-card">
                    <div className="image-container">
                      <img
                        src={Uniform}
                        alt="Students volunteering in community service"
                      />
                      <div className="overlay">
                        <button className="view-details-btn">
                          View Details
                        </button>
                      </div>
                    </div>
                    <br />
                    <h3>⭐⭐⭐⭐</h3>
                    <h3 className="card-title">Uniform</h3>
                  </div>
                </div>
              </section>
            </section>

            <section className="student-activities-section">
              <div className="cards-container">
                {/* Card 1: Robotics Club */}
                <div className="activity-card">
                  <div className="image-container">
                    <img
                      src={WaterCooler}
                      alt="Students in Robotics Club building robots"
                    />
                    <div className="overlay">
                      <button className="view-details-btn">View Details</button>
                    </div>
                  </div>
                  <br />
                  <h3>⭐⭐⭐⭐</h3>
                  <h3 className="card-title">Water Cooler</h3>
                </div>

                {/* Card 2: Sports Team */}
                <div className="activity-card">
                  <div className="image-container">
                    <img
                      src={ILoveNED}
                      alt="Students playing team sports"
                    />
                    <div className="overlay">
                      <button className="view-details-btn">View Details</button>
                    </div>
                  </div>
                  <br />
                  <h3>⭐⭐⭐⭐</h3>
                  <h3 className="card-title">I love NED</h3>
                </div>

                {/* Card 3: Community Volunteering */}
                <div className="activity-card">
                  <div className="image-container">
                    <img
                      src={TopStudents}
                      alt="Students volunteering in community service"
                    />
                    <div className="overlay">
                      <button className="view-details-btn">View Details</button>
                    </div>
                  </div>
                  <br />
                  <h3>⭐⭐⭐⭐</h3>
                  <h3 className="card-title">Students</h3>
                </div>
              </div>
            </section>

            <section className="faculties-section">
              <div className="container">
                <h2 className="section-title">Our Faculties & Departments</h2>
                <div className="faculties-grid">
                  {faculties.map((faculty, index) => (
                    <div key={index} className="faculty-card">
                      <h3 className="faculty-title">{faculty.title}</h3>
                      <p className="dean-info">{faculty.dean}</p>
                      <h4 className="departments-heading">Departments:</h4>
                      <ul className="departments-list">
                        {faculty.departments.map((dept, deptIndex) => (
                          <li key={deptIndex}>{dept}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="student-reviews-section">
              <div className="static-reviews">
                <h3 className="grid-title">Student Reviews</h3>
                <br />
                <div className="reviews-grid">
                  {studentReviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="static-review-card">
                      <div className="card-header">
                        <div className="static-profile">
                          <img src={review.profileImg} alt={review.name} />
                        </div>
                        <div className="static-info">
                          <h4>{review.name}</h4>
                          <p>{review.department}</p>
                        </div>
                        <div className="static-rating">
                          <div className="static-rating-circle">
                            <span>{review.rating}.0</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-stars">
                        {renderStars(review.rating)}
                      </div>
                      <p className="static-comment">
                        "{review.comment.substring(0, 80)}..."
                      </p>
                    </div>
                  ))}
                </div>
                <div className="reviews-grid">
                  {studentReviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="static-review-card">
                      <div className="card-header">
                        <div className="static-profile">
                          <img src={review.profileImg} alt={review.name} />
                        </div>
                        <div className="static-info">
                          <h4>{review.name}</h4>
                          <p>{review.department}</p>
                        </div>
                        <div className="static-rating">
                          <div className="static-rating-circle">
                            <span>{review.rating}.0</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-stars">
                        {renderStars(review.rating)}
                      </div>
                      <p className="static-comment">
                        "{review.comment.substring(0, 80)}..."
                      </p>
                    </div>
                  ))}
                </div>

                <div className="reviews-grid">
                  {studentReviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="static-review-card">
                      <div className="card-header">
                        <div className="static-profile">
                          <img src={review.profileImg} alt={review.name} />
                        </div>
                        <div className="static-info">
                          <h4>{review.name}</h4>
                          <p>{review.department}</p>
                        </div>
                        <div className="static-rating">
                          <div className="static-rating-circle">
                            <span>{review.rating}.0</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-stars">
                        {renderStars(review.rating)}
                      </div>
                      <p className="static-comment">
                        "{review.comment.substring(0, 80)}..."
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="news-section">
              <h1 className="news-section-title">NEWS</h1>
              <div className="news-cards-container">
                {newsData.map((item, index) => (
                  <div className="news-card" key={index}>
                    <div className="news-image">
                      <img src={item.image} alt="news" />
                    </div>
                    <div className="news-content">
                      <span className="news-source">{item.source}</span>
                      <h3 className="news-title">{item.title}</h3>
                      <p className="news-time">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="student-facilities">
              <center>
                <h1>Student Facilities</h1>
              </center>
              <div className="facilities-container">
                {/* Sidebar with facility buttons */}
                <div className="facilities-sidebar">
                  <h2 className="sidebar-title">Facilities</h2>
                  <p className="sidebar-description">
                    Explore the comprehensive facilities designed to enhance
                    student life and learning experience.
                  </p>

                  <div className="facility-buttons">
                    {facilityButtons.map((button) => (
                      <button
                        key={button.id}
                        className={`facility-btn ${
                          activeFacility === button.id ? "active" : ""
                        }`}
                        onClick={() => handleFacilityClick(button.id)}
                      >
                        <span className="btn-icon">{button.icon}</span>
                        <span className="btn-label">{button.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="sidebar-stats">
                    <h3>Quick Stats</h3>
                    <ul>
                      <li>140+ Classrooms</li>
                      <li>6 Smart Classrooms</li>
                      <li>8 Lecture Halls</li>
                      <li>550-seat Auditorium</li>
                      <li>250,000 sq. ft. Convocation Ground</li>
                      <li>3 Video Conferencing Halls</li>
                      <li>Separate Hostels for Boys & Girls</li>
                    </ul>
                  </div>
                </div>

                {/* Main content area */}
                <div className="facilities-content" ref={contentRef}>
                  <div className="facility-header">
                    <h1>{facilities[activeFacility].title}</h1>
                    <p className="facility-description">
                      {facilities[activeFacility].description}
                    </p>
                  </div>

                  <div className="facility-image-container">
                    <img
                      src={facilities[activeFacility].image}
                      alt={facilities[activeFacility].title}
                      className="facility-image"
                    />
                  </div>

                  <div className="facility-sections">
                    {facilities[activeFacility].sections.map(
                      (section, index) => (
                        <div key={index} className="facility-section">
                          <h3>{section.title}</h3>
                          <div
                            className="section-content"
                            dangerouslySetInnerHTML={{
                              __html: section.content,
                            }}
                          />
                        </div>
                      )
                    )}
                  </div>

                  <div className="additional-info">
                    <h3>Additional Information</h3>
                    <p>
                      All facilities are designed with student comfort and
                      academic excellence in mind. The university continually
                      upgrades and maintains these facilities to provide the
                      best possible environment for learning and personal
                      development.
                    </p>
                    <p>
                      For more details about any specific facility or to inquire
                      about availability, please contact the university
                      administration office.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="events-section">
              <div className="events-container">
                {/* Section Header */}
                <center>
                  <h1>University Events</h1>
                </center>

                {/* Filter Tabs */}
                <div className="events-filter">
                  <button
                    className={`filter-btn ${filter === "all" ? "active" : ""}`}
                    onClick={() => setFilter("all")}
                  >
                    All Events
                  </button>
                  <button
                    className={`filter-btn ${
                      filter === "upcoming" ? "active" : ""
                    }`}
                    onClick={() => setFilter("upcoming")}
                  >
                    Upcoming Events
                  </button>
                  <button
                    className={`filter-btn ${
                      filter === "past" ? "active" : ""
                    }`}
                    onClick={() => setFilter("past")}
                  >
                    Past Events
                  </button>
                </div>

                {/* Events Grid */}
                <div className="events-grid">
                  {currentEvents.map((event) => (
                    <div key={event.id} className="event-card">
                      {/* Event Image */}
                      <div className="event-image">
                        <img src={event.image} alt={event.title} />
                        {getStatusBadge(event.status, event.isPostponed)}
                      </div>

                      {/* <div className="event-date">
                        <span className="date-day">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="date-month">
                          {event.date.split(" ")[1]}
                        </span>
                        <span className="date-year">
                          {event.date.split(" ")[2]}
                        </span>
                      </div> */}

                      {/* Event Content */}
                      <div className="event-content">
                        <div className="event-header">
                          <span className="event-type">
                            {getEventTypeIcon(event.type)}{" "}
                            {event.type.charAt(0).toUpperCase() +
                              event.type.slice(1)}
                          </span>
                          <h3 className="event-title">{event.title}</h3>
                          {event.subtitle && (
                            <p className="event-subtitle">{event.subtitle}</p>
                          )}
                        </div>

                        <div className="event-details">
                          <div className="event-theme">
                            <strong>Theme:</strong> {event.theme}
                          </div>

                          <p className="event-description">
                            {event.description}
                          </p>

                          {/* <div className="event-meta">
                            {event.location && (
                              <div className="meta-item">
                                <span className="meta-icon">📍</span>
                                <span>{event.location}</span>
                              </div>
                            )}
                            {event.time && (
                              <div className="meta-item">
                                <span className="meta-icon">⏰</span>
                                <span>{event.time}</span>
                              </div>
                            )}
                          </div> */}

                          {/* Event Tags */}
                          <div className="event-tags">
                            {event.tags.map((tag, index) => (
                              <span key={index} className="event-tag">
                                {tag}
                              </span>
                            ))}
                          </div>

                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      className={`pagination-btn ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                      onClick={() =>
                        currentPage > 1 && handlePageChange(currentPage - 1)
                      }
                      disabled={currentPage === 1}
                    >
                      ← Previous
                    </button>

                    <div className="page-numbers">
                      {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        // Show first, last, and pages around current page
                        if (
                          pageNumber === 1 ||
                          pageNumber === totalPages ||
                          (pageNumber >= currentPage - 1 &&
                            pageNumber <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={pageNumber}
                              className={`page-number ${
                                currentPage === pageNumber ? "active" : ""
                              }`}
                              onClick={() => handlePageChange(pageNumber)}
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          pageNumber === currentPage - 2 ||
                          pageNumber === currentPage + 2
                        ) {
                          return (
                            <span key={pageNumber} className="page-dots">
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>

                    <button
                      className={`pagination-btn ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                      onClick={() =>
                        currentPage < totalPages &&
                        handlePageChange(currentPage + 1)
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next →
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* University Overview with Images */}
            <section className="university-overview">
              <div className="overview-header">
                <h2>NED University Overview</h2>
                <p className="overview-subtitle">Academic Year 2024-2025</p>
              </div>

              <div className="overview-container">
                <button
                  className="overview-arrow prev-overview"
                  onClick={prevOverview}
                >
                  &#10094;
                </button>

                <div className="overview-content">
                  <div className="overview-image-container">
                    <img
                      src={overviewImages[overviewIndex].src}
                      alt={overviewImages[overviewIndex].title}
                      className="overview-image"
                    />
                    <div className="overlay-content">
                      <h3>{overviewImages[overviewIndex].title}</h3>
                      <p>{overviewImages[overviewIndex].description}</p>
                      <div className="image-counter">
                        {overviewIndex + 1} / {overviewImages.length}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="overview-arrow next-overview"
                  onClick={nextOverview}
                >
                  &#10095;
                </button>
              </div>

              <div className="overview-thumbnails">
                {overviewImages.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${
                      index === overviewIndex ? "active" : ""
                    }`}
                    onClick={() => setOverviewIndex(index)}
                  >
                    <img src={image.src} alt={image.title} />
                  </div>
                ))}
              </div>
            </section>
          </>
        );

      case "about":
        return <About />;

      case "departments":
        return <Departments />;

      case "events":
        return <Events />;

      case "research":
        return <Research />;

      case "gallery":
        return <Gallery />;

      case "students":
        return <Students />;

      case "teachers":
        return <Teachers />;

      case "contact":
        return <Contact />;

      default:
        return (
          <div className="coming-soon">
            <h2>Coming Soon</h2>
            <p>This page is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : ""}`}>
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo-section">
          <img src={nedLogo} alt="NED University Logo" className="logo" />
          <div className="university-info">
            <h1>NED University of Engineering & Technology</h1>
            <p>Thar Institute Of Engneering Ssciece And Technology (TIEST)</p>
          </div>
        </div>

        <div className="header-controls">
          <button
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* <div className="user-profile">
            <div className="user-avatar">AM</div>
            <div className="user-info">
              <span className="user-name">Alex Morgan</span>
              <span className="user-role">Student • Computer Engineering</span>
            </div>
          </div> */}
        </div>
      </header>

      {/* Navigation */}
      <nav className="dashboard-nav">
        <div className="nav-container">
          <ul className="nav-menu">
            {[
              "home",
              "about",
              "departments",
              "events",
              "research",
              "gallery",
              "students",
              "teachers",
              "contact",
            ].map((item) => (
              <li
                key={item}
                className={`nav-item ${activeNav === item ? "active" : ""}`}
                onClick={() => handleNavClick(item)}
              >
                <a href={`#${item}`} onClick={(e) => e.preventDefault()}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">
        {renderContent()} 
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>About</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Vice Chancellor's Message</a>
                </li>
                <li>
                  <a href="#">Our University</a>
                </li>
                <li>
                  <a href="#">Vision & Mission</a>
                </li>
                <li>
                  <a href="#">University Organization</a>
                </li>
                <li>
                  <a href="#">University Bodies</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Admissions</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Undergraduate Admission</a>
                </li>
                <li>
                  <a href="#">Postgraduate Admission</a>
                </li>
                <li>
                  <a href="#">Ph.D. Admission</a>
                </li>
                <li>
                  <a href="#">PGD Admission</a>
                </li>
              </ul>
              <div className="contact-info">
                <h5>Admission Enquiries</h5>
                <p className="contact-detail">(92-21) 99261261-8 Ext - 2412</p>
                <p className="contact-detail">
                  ug_admissions@cloud.neduct.edu.pk
                </p>
              </div>
            </div>

            <div className="footer-section">
              <h4>Academics</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Faculties & Departments</a>
                </li>
                <li>
                  <a href="#">Academic Calendar</a>
                </li>
                <li>
                  <a href="#">Academic Programmes</a>
                </li>
              </ul>
              <div className="contact-info">
                <h5>General Enquiries</h5>
                <p className="contact-detail">(92-21) 99261261-8</p>
                <p className="contact-detail">registra@neduct.edu.pk</p>
              </div>
            </div>

            <div className="footer-section">
              <h4>Students</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">One Window</a>
                </li>
                <li>
                  <a href="#">Scholarships List</a>
                </li>
                <li>
                  <a href="#">Students Hand Book</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo">
              <img
                src={nedLogo}
                alt="NED University Logo"
                className="footer-logo-img"
              />
              <div>
                <h5>NED University of Engineering & Technology</h5>
                <p>University Road, Karachi-75270, Pakistan</p>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.facebook.com/share/17kJ5A9WY6/"
                className="social-link"
              >
                <img src={Facebook} alt="" height="20px" />
              </a>
              <a
                href="https://www.instagram.com/neduet_edu_pk?igsh=MjN0cWQ3OXg2Zzhs"
                className="social-link"
              >
                <img src={Instagram} alt="" height="35px" />
              </a>
              <a
                href="https://youtube.com/@neduetofficial?si=PsmxdY6iqyYP6rXc"
                className="social-link"
              >
                <img src={Youtube} alt="" height="20px" />
              </a>
              <a
                href="https://www.linkedin.com/school/ned-university-of-engineering-&-technology-karachi/"
                className="social-link"
              >
                <img src={Linkdin} alt="" height="40px" />
              </a>
            </div>

            <div className="copyright">
              <p>
                Copyright © NED University of Engineering & Technology, 2025
              </p>
              <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Accessibility</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
