// Gallery.js
import React from 'react';
import './index.css'; // Import the CSS file for styling
import image1 from "./assets/gallery1.jpeg";
import image2 from "./assets/gallery5.jpeg";
import image3 from "./assets/gallery4.jpeg";
import image4 from "./assets/gallery6.jpeg";
import image5 from "./assets/gallery7.jpeg";
import image6 from "./assets/gallery9.jpeg";
import image7 from "./assets/gallery10.jpeg";
import image8 from "./assets/gallery11.jpeg";
import image9 from "./assets/gallery12.jpeg";
import image10 from "./assets/gallery13.jpeg";
const photos = [
  { src: image1, alt: 'Event 1', text: 'Participated in the \'Consciousness Engineering\' workshop, where I explored advanced personal growth techniques and learned how to integrate new ways of thinking into everyday life. The workshop provided valuable insights into self-awareness, mindfulness, and effective strategies for personal and professional development.' },
  { src: image3, alt: 'Event 2', text: 'Visited the National Centre for Medium Range Weather Forecast as part of an industrial visit organized by my college. Gained valuable insights into weather forecasting technologies and methodologies, understanding how advanced data analysis and meteorological tools contribute to accurate weather predictions. It was an enlightening experience that showcased the intersection of technology and environmental science.' },
  { src: image2, alt: 'Event 3', text: 'Visited the National Centre for Medium Range Weather Forecast as part of an industrial visit organized by my college. Gained valuable insights into weather forecasting technologies and methodologies, understanding how advanced data analysis and meteorological tools contribute to accurate weather predictions. It was an enlightening experience that showcased the intersection of technology and environmental science.' },
  { src: image4, alt: 'Event 4', text: 'Visited the GeeksforGeeks headquarters in Noida as part of an industrial visit from college. Explored their dynamic work culture and learned about their innovative approaches to technical education and content creation. The visit provided a firsthand experience of the tech industry\'s environment and the opportunities it offers for growth and learning.' },
  { src: image5, alt: 'Event 5', text: 'Visited the GeeksforGeeks headquarters in Noida as part of an industrial visit from college. Explored their dynamic work culture and learned about their innovative approaches to technical education and content creation. The visit provided a firsthand experience of the tech industry\'s environment and the opportunities it offers for growth and learning.' },
  { src: image6, alt: 'Event 6', text: 'Participated in the Grand Finale of Smart India Hackathon 2023, a prestigious national-level competition that brings together innovative minds to solve real-world problems. It was an exhilarating experience collaborating with a diverse team, brainstorming creative solutions, and presenting our project to industry experts and government officials. A memorable event that fostered learning and growth.' },
  { src: image7, alt: 'Event 7', text: 'Participated in the Grand Finale of Smart India Hackathon 2023, a prestigious national-level competition that brings together innovative minds to solve real-world problems. It was an exhilarating experience collaborating with a diverse team, brainstorming creative solutions, and presenting our project to industry experts and government officials. A memorable event that fostered learning and growth.' },
  { src: image8, alt: 'Event 8', text: 'Participated in the Grand Finale of Smart India Hackathon 2023, a prestigious national-level competition that brings together innovative minds to solve real-world problems. It was an exhilarating experience collaborating with a diverse team, brainstorming creative solutions, and presenting our project to industry experts and government officials. A memorable event that fostered learning and growth.' },
  { src: image9, alt: 'Event 9', text: 'Participated in the Grand Finale of Smart India Hackathon 2023, a prestigious national-level competition that brings together innovative minds to solve real-world problems. It was an exhilarating experience collaborating with a diverse team, brainstorming creative solutions, and presenting our project to industry experts and government officials. A memorable event that fostered learning and growth.' },
  { src: image10, alt: 'Event 10', text: 'Participated in HackMAIT 5.0, a competitive hackathon that brought together talented coders and developers. Proud to have been shortlisted among the top 10 teams, showcasing our innovative project and problem-solving skills. It was an exciting and challenging experience that pushed us to think creatively and work collaboratively.' },
  // Add more photos as needed
];

const Gallery = () => {
  return (
    <>
    <h1 className='gallery_head' id='gallery'>Capturing Moments</h1>
    <div className="gallery">
      {photos.map((photo, index) => (
        <div key={index} className="photo-container">
          <img src={photo.src} alt={photo.alt} className="photo" />
          <div className="overlay">
            <p>{photo.text}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;
