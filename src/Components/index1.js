import React from 'react';
import './style.css';
import './HomePage.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const Index1 = () => {
  return (
    <div>
      <section className="showcase-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home">SDSU EATS</h1>
          <p>Find your favourite food on campus</p>
          <a href="#restaurant-list" className="btn btn-primary">Find Restaurants</a>
        </div>
      </section>
      <section id="food-menu">
      <h2 className="food-menu-heading">Most Popular Foods</h2>
      <div className="food-menu-container container">
        {/* Food Menu Item 1 */}
        <div className="food-menu-item">
          <div className="food-img">
            <img src={require("../images/coke.jpg")} alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Food Menu Item 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p className="food-price">Price: 10$</p>
          </div>
        </div>

        {/* Food Menu Item 2 */}
        <div className="food-menu-item">
          <div className="food-img">
            <img src={require("../images/Burrito.JPG")} alt="error" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Food Menu Item 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p className="food-price">Price: 10$</p>
          </div>
        </div>

        {/* Food Menu Item 3 */}
        <div className="food-menu-item">
          <div className="food-img">
            <img src={require("../images/chicken.jpg")} alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Food Menu Item 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p className="food-price">Price: 10$</p>
          </div>
        </div>

        {/* Food Menu Item 4 */}
        <div className="food-menu-item">
          <div className="food-img">
            <img src={require("../images/salad.jpg")}alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Food Menu Item 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p className="food-price">Price: 10$</p>
          </div>
        </div>

        {/* Food Menu Item 5 */}
        <div className="food-menu-item">
          <div className="food-img">
            <img src={require("../images/pizza.jpg")} alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Food Menu Item 5</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p className="food-price">Price: 10$</p>
          </div>
        </div>

        {/* Food Menu Item 6 */}
        <div className="food-menu-item">
          <div className="food-img">
            <img src={require("../images/jucie.jpg")} alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Food Menu Item 6</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p className="food-price">Price: 10$</p>
          </div>
        </div>
      </div>
    </section>
   
    <section id="restaurant-list">
      <div class="restaurant-container">
        <h2 class="restaurant-list-heading">Featured Restaurants</h2>
        <div class="restaurant-list-container container">
          
            <div className="restaurant-item">
                <div className="restaurant-img">
                    <img src={require("../images/sturbucks.jpeg")} alt="Restaurant 1" />
                </div>
                <div className="restaurant-description">
                    <h2 className="restaurant-title"> 
                        <Link to="/starbucks">Star Bucks</Link>
                    </h2>
                    
                    <p>
                        Description for Restaurant 1. Lorem ipsum dolor sit amet.
                    </p>
                    <p className="restaurant-location">Location: XYZ Street</p>
                </div>
            </div>
          
             
                <div className="restaurant-item">
                    <div className="restaurant-img">
                        <img src={require("../images/chipotle.jpg")} alt="Restaurant 2" />
                    </div>
                    <div className="restaurant-description">
                        <h2 className="restaurant-title">
                           <Link to="/starbucks">chipotle</Link>
                        </h2>
                        <p>
                            Description for Restaurant 1. Lorem ipsum dolor sit amet.
                        </p>
                        <p className="restaurant-location">Location: XYZ Street</p>
                    </div>
                </div>

          
                <div className="restaurant-item">
                    <div className="restaurant-img">
                        <img src={require("../images/habbit.JPG")} alt="Restaurant 3" />
                    </div>
                    <div className="restaurant-description">
                        <h2 className="restaurant-title">
                             <Link to="/starbucks">Habbit Grill</Link> 
                        </h2>
                        <p>
                            Description for Restaurant 1. Lorem ipsum dolor sit amet.
                        </p>
                        <p className="restaurant-location">Location: XYZ Street</p>
                    </div>
                </div>

             
                <div className="restaurant-item">
                    <div className="restaurant-img">
                        <img src={require("../images/halal.jpg")} alt="Restaurant 1" />
                    </div>
                    <div className="restaurant-description">
                        <h2 className="restaurant-title">
                             <Link to="/starbucks">Hallal Shack</Link> 
                        </h2>
                        <p>
                            Description for Restaurant 1. Lorem ipsum dolor sit amet.
                        </p>
                        <p className="restaurant-location">Location: XYZ Street</p>
                    </div>
                </div>

                <div className="restaurant-item">
                    <div class="restaurant-img">
                        <img src={require("../images/wendys.jpg")}alt="Restaurant 1" />
                    </div>
                    <div className="restaurant-description">
                        <h2 className="restaurant-title">
                             <Link to="/starbucks">Wendy's</Link>
                        </h2>
                        <p>
                            Description for Restaurant 1. Lorem ipsum dolor sit amet.
                        </p>
                        <p className="restaurant-location">Location: XYZ Street</p>
                    </div>
                </div>    
          </div>
      </div>
    </section>
    
    {/* Review Section */}
    <div className="reviews-container">
        {/* Review 1 */}
        <div className="review-section">
          <img src={require("../images/cust1.jpg")} alt="Customer 1" className="customer-photo" />
          <div className="review-content">
            <div className="star-rating">
              ★★★★☆
            </div>
            <p className="review-message">
              This product was amazing! Loved it!
            </p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="review-section">
          <img src={require("../images/cust2.jpg")} alt="Customer 2" className="customer-photo" />
          <div className="review-content">
            <div className="star-rating">
              ★★★☆☆
            </div>
            <p className="review-message">
              Good product. Worth the price.
            </p>
          </div>
        </div>

        {/* Review 3 */}
        <div className="review-section">
          <img src={require("../images/cust3.jpg")} alt="Customer 3" className="customer-photo" />
          <div className="review-content">
            <div className="star-rating">
              ★★★★★
            </div>
            <p className="review-message">
              Excellent product! Will buy again.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about">
        <div className="about-wrapper container">
          <div className="about-text">
            <p className="small">Why people love us?</p>
            <h2>We've been making healthy food last for 10 years</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
              eos omnis, nobis dignissimos perferendis et officia architecto,
              fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
              maiores praesentium soluta alias asperiores saepe commodi
              consequatur? Perferendis est placeat facere aspernatur!
            </p>
          </div>
          <div className="about-img">
            <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food" />
          </div>
        </div>
      </section>
      {/* Footer Section */}
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

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
    
    
    
  );
}

export default Index1;
