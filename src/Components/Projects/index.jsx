import React from 'react';
import Slider from 'react-slick';
import "./index.css"
import project1_1 from "./assets/Screenshot (99).png";
import project1_2 from "./assets/Screenshot (62).png";
import project1_3 from "./assets/Screenshot (28).png";
import project2_1 from "./assets/Screenshot (12).png";
import project2_2 from "./assets/Screenshot (8).png";
import project2_3 from "./assets/Screenshot (9).png";
import project3_1 from "./assets/Screenshot (341).png";
import project3_2 from "./assets/Screenshot (343).png";
import project3_3 from "./assets/Screenshot (344).png";
import project4_1 from "./assets/Screenshot(345).png";
import project4_2 from "./assets/Screenshot(346).png";
import project4_3 from "./assets/Screenshot(347).png";
const projects = [
  {
    title: 'ShelterSpot',
    description: 'Developed a comprehensive online hotel booking web application, enabling users to search for hotels based on location. Key features include: Search and Sorting: Users can search hotels by location and sort results by rating or price. Detailed Hotel Information: Each hotel listing includes ratings, exact location, room facilities, and an image gallery. Technology Stack: Leveraged Node.js, HTML, CSS, and JavaScript for the frontend and backend. Utilized ejs template for dynamic rendering, Express.js for server-side framework, and MongoDB for database management.',
    images: [
      project1_1,
      project1_2,
      project1_3
    ],
    codeLink: 'https://github.com/Akshat264/Edu-Craft'
  },
  {
    title: 'Realtime Chat Application',
    description: 'Developed a real-time chat application using React, Node.js, MongoDB, and Socket.io, enabling secure and seamless communication between users. Implemented token-based authentication for secure login and registration. Designed and integrated user profile management features, including profile creation, editing, and picture uploads for personalized user experiences. Built real-time private chat functionality. Created real-time group chat rooms, enabling users to join or create chat rooms for collaborative discussions, with dynamic switching between private and group chats',
    images: [
      project4_1,
      project4_2,
      project4_3
    ],
    codeLink: 'https://github.com/Akshat264/PRODIGY_FS_04'
  },
  {
    title: 'EduCraft',
    description: 'Developed a web-based quiz maker application using React.js, Node.js, Express.js, and MongoDB. Sole developer responsible for end-to-end development, including system design, database modeling, backend and frontend implementation, and testing. Technologies used: React.js, Node.js, Express.js, MongoDB, EJS templates, CSS. It allows teachers to generate quality content and assessments to examine the students. This involves complete authentication of teachers and students.',
    images: [
      project2_1,
      project2_2,
      project2_3
    ],
    codeLink: 'https://github.com/Akshat264/Edu-Craft'
  },
  {
    title: 'Team Manager',
    description: 'Developed a team building web application using React.js, Node.js, Express.js, and MongoDB. The application facilitates the formation of teams from a pool of employees available on the platform. Features include filtering employees based on gender, department, and availability, as well as a search function by employee name. Successfully deployed a user-friendly team building platform, improving collaboration and productivity within the organization. Technologies used: React.js, Node.js, Express.js, MongoDB.',
    images: [
      project3_1,
      project3_2,
      project3_3
    ],
    codeLink: 'https://github.com/Akshat264/frontend_users'
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables auto sliding
    autoplaySpeed: 2000, // Time between slides in milliseconds
    responsive: [
        {
          breakpoint: 768, // When screen width is less than 768px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <>
    <h1 className='showcase'>Showcase of My Work</h1>
    <div className="project-section" id='projects'>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Slider {...sliderSettings}>
            {project.images.map((image, idx) => (
              <div key={idx}>
                <img className="project_ss" src={image} alt={`Screenshot ${idx + 1}`} />
              </div>
            ))}
          </Slider>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProjectSection;
