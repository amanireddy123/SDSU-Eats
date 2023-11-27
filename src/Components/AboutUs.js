import React from 'react';
import './aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs1 = () => {
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

          <p>This project was designed for...</p>

          <a className="read-more">Read More</a>
        </div>

      </section>
    </div>

    {/* Footer */}
    <footer className="bottomnavbar">
      <div className="logo">
      <img src={require("../images/logo3.webp")} alt="logo" />
      </div>

      <div className="address">
        619-000-0000
        5500 Campanile Drive  
        San Diego, CA-92115  
      </div>

      <div className="info">
       <p>Maps</p>
       <p>Pickup Stores</p>
       <p>Help</p>
       <p className="last-updated">Last Updated...</p> 
      </div>
    </footer>
  </>
  );
}

export default AboutUs1;


      