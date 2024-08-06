import React from 'react';
import './index.css';
import profile from "./assets/profile_img.png";
import { useState, useEffect } from 'react';
const Section1= () => {
    const phrases = [
        "Bachelor of Technology (CSE)",
        "MERN Stack Developer",
        "Competitive Programmer",
      ];
    
      const [index, setIndex] = useState(0);
      const [displayText, setDisplayText] = useState("");
      const [isDeleting, setIsDeleting] = useState(false);
      const [typingSpeed, setTypingSpeed] = useState(150);
    
      useEffect(() => {
        const handleTyping = () => {
          const currentPhrase = phrases[index];
          const currentTextLength = displayText.length;
    
          if (!isDeleting && currentTextLength < currentPhrase.length) {
            setDisplayText(currentPhrase.substring(0, currentTextLength + 1));
            setTypingSpeed(150);
          } else if (isDeleting && currentTextLength > 0) {
            setDisplayText(currentPhrase.substring(0, currentTextLength - 1));
            setTypingSpeed(50);
          } else if (!isDeleting && currentTextLength === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 1000);
          } else if (isDeleting && currentTextLength === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % phrases.length);
          }
        };
    
        const timer = setTimeout(handleTyping, typingSpeed);
    
        return () => clearTimeout(timer);
      }, [displayText, isDeleting, index, typingSpeed, phrases]);
  return (
    <section className="portfolio-photo-section">
      <div className="parallax-background"></div>
      <div className="content">
        <img src= {profile} alt="Your Name" className="profile-photo" />
        <h1>Hi, I'm Akshat Pratap Singh</h1>
        <p className="typing-effect">{displayText}</p>
      </div>
    </section>
  );
};

export default Section1;
