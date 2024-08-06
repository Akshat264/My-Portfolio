import React, { useState } from 'react';
import './index.css';
import { FaDownload } from 'react-icons/fa'; 
import logo from "./assets/logo.jpeg";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={logo}/>Akshat Pratap Singh</div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
      <li>
          <a href="../../public/resume.pdf" className="download-btn" download>
            <FaDownload className="download-icon" /> Download Resume
          </a>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#certificates">Certificates</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
