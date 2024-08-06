import React from 'react';
import './index.css';
import { useState,useEffect,useRef } from 'react';
const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skills = [
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React.js', level: 'Intermediate' },
      { name: 'Node.js/Express.js', level: 'Intermediate' },
      {name: 'Mongodb', level: 'Intermediate'},
      {name: 'C/C++ Programming', level: 'Intermediate'},
      { name: 'HTML & CSS', level: 'Advanced' },
      { name: 'DSA', level: 'Intermediate' },
    ];
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(sectionRef.current);
          }
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm Akshat Pratap Singh, a passionate Full-Stack Developer with a strong background in web development and problem-solving. Currently pursuing Btech in Computer Science and Engineering from Ajay Kumar Garg Engineering College, I have honed my skills in technologies like MERN stack, Data Structures, and Algorithms. 
            </p>
            <p>
              My journey in tech has led me to work on diverse projects, from building interactive web applications to developing scalable backend systems. I love tackling new challenges and am always eager to learn and grow.
            </p>
            <p>
              In my free time, I enjoy competitive programming, working on personal projects, and exploring new technologies. Feel free to reach out if you'd like to collaborate or learn more about my work.
            </p>
          </div>
          <div className="about-skills">
            <h2>Skills</h2>
            <ul>
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className={`skill-item ${hoveredSkill === index ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {hoveredSkill === index ? skill.level : skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
