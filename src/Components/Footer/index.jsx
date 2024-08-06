// Footer.js

import React from 'react';
import './index.css'; // Ensure to add your CSS styles here
import codechef from "./assets/codechef.png";
import gfg from "./assets/gfg.png";
const Footer = () => {
  return (
    <footer className="footer_new" id='contact'>
      <div className="footer-content_new">
        <div className="footer-info_new">
          <div className="footer-contact_new">
            <p><strong>Contact No:</strong> <a href="tel:+919648911857">+91 9648911857</a></p>
            <p><strong>Email:</strong> <a href="mailto:pratapsinghakshat0@gmail.com">pratapsinghakshat0@gmail.com</a></p>
            <p><strong>Address:</strong> 3/299, Subhash Nagar Hardoi, Uttar Pradesh</p>
          </div>
          <div className="footer-copyright_new">
            <p>&copy; {new Date().getFullYear()} | Akshat Pratap Singh | All Rights Reserved.</p>
          </div>
          <div className="footer-dsa_new">
            <a href="https://www.geeksforgeeks.org/user/pratapsinghakshat0/" target="_blank" rel="noopener noreferrer" className="footer-dsa-link_new">
              <img src={gfg} alt="GeeksforGeeks Profile" className="footer-dsa-image_new" />
            </a>
            <a href="https://www.codechef.com/users/akshat264" target="_blank" rel="noopener noreferrer" className="footer-dsa-link_new">
              <img src={codechef} alt="Codeforces Profile" className="footer-dsa-image_new" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
