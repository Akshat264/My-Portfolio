import React from 'react';
import Slider from 'react-slick';
import './index.css'; // Make sure to update the CSS import
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
const achievements = [
  {
    id: 1,
    title: 'SIH 2023 Finalist',
    description: 'Participated in Grand Finale of SIH\'23',
    image: img1, // Replace with your image path
  },
  {
    id: 2,
    title: 'Infosys Springboard',
    description: 'ReactJS Course Completion Certificate',
    image: img2, // Replace with your image path
  },
  {
    id: 3,
    title: 'IBM Skillsbuild',
    description: 'Placement Assistance learning plan Certificate',
    image: img3, // Replace with your image path
  },
  {
    id: 4,
    title: 'IBM Skillsbuild',
    description: 'Web development fundamentals badge',
    image: img5, // Replace with your image path
  },
  {
    id: 5,
    title: 'IBM Skillsbuild',
    description: 'Web Development learning plan Certificate',
    image: img4, // Replace with your image path
  },
  // Add more achievements as needed
];

const AchievementsSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
          },
        },
      ],
  };

  return (
    <div className="achievements-slider_new" id="certificates">
        <h1>Certifications</h1>
      <Slider {...settings}>
        {achievements.map((achievement) => (
          <div key={achievement.id} className="carousel-item_new">
            <img src={achievement.image} alt={achievement.title} className="achievement-image_new" />
            <div className="overlay_new">
              <h2 className="achievement-title_new">{achievement.title}</h2>
              <p className="achievement-description_new">{achievement.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AchievementsSlider;
