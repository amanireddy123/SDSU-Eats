import React, { useState } from 'react';
import './aboutus.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs1 = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };


  return (
    <>
    {/* About Us Heading */}
    <div className="heading">
      <h1>About Us</h1> 

      <p>Welcome to SDSU Eats...</p>
    </div>

    {/* About Us Content */}
    <div className="container">
      <section className="about">
        
        <img className="about-image" src={require("../images/about_page.png")} alt="aboutpage image" />

        <div className="about-content">
            <h2>Order food with ease!</h2>

            <p>
              This project was designed for SDSU students to provide easy food delivery to students around the campus {showMore && (
                <>
                  You can order from wide variety of Restaurants on our list which are around the campus
                </>
              )}
            </p>

            <a className="read-more" onClick={toggleReadMore}>
              {showMore ? 'Read Less' : 'Read More'}
            </a>
          </div>

      </section>
    </div>

    <footer className="footer">
        <div className="contact-section">
          <a href="contact.html" className="footer-link">Contact Us</a>
          <p className="phone">Phone: <span>+1 858-334-0900</span></p>
          <p className="email">Email: <span>support@sdsueats.com</span></p>
        </div>
        <p className="copyright">
          &copy; 2023 SDSU EATS. All rights reserved.
        </p>
      </footer>
  </>
  );
}

export default AboutUs1;


      