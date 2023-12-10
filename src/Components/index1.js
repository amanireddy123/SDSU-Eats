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
      <section id="popular-food-menu">
      <h2 className="popular-food-menu-heading">Most Popular Foods</h2>
      <div className="popular-food-menu-container container">
        {/* Food Menu Item 1 */}
        <div className="popular-food-menu-item">
          <div className="food-img">
            <img src={require("../starbucks/item3")} alt="" />
          </div>
          <div className="popular-food-description">
            <h2 className="food-title">Machiato starbucks</h2>
            <p>
            Rich espresso with vanilla-flavored syrup and steamed milk, topped with caramel drizzle.
            </p>
            <p className="food-price">Price: 5.99$</p>
          </div>
        </div>

        {/* Food Menu Item 2 */}
        <div className="popular-food-menu-item">
          <div className="food-img">
            <img src={require("../chipotle/item2")} alt="error" />
          </div>
          <div className="popular-food-description">
            <h2 className="popular-food-title">Guacamole Chipotle</h2>
            <p>
            Creamy avocado goodness with zesty lime and spices, elevating your Chipotle bowl experience.
            </p>
            <p className="food-price">Price: 3.49$</p>
          </div>
        </div>

        {/* Food Menu Item 3 */}
        <div className="popular-food-menu-item">
          <div className="food-img">
            <img src={require("../images/chicken.jpg")} alt="" />
          </div>
          <div className="popular-food-description">
            <h2 className="popular-food-title">Fried Chiecken Halal</h2>
            <p>
            Crispy and flavorful fried chicken, perfectly seasoned  for a delightful and satisfying taste experience.
            </p>
            <p className="food-price">Price: 10$</p>
          </div>
        </div>

        {/* Food Menu Item 4 */}
        <div className="popular-food-menu-item">
          <div className="food-img">
            <img src={require("../images/salad.jpg")}alt="" />
          </div>
          <div className="popular-food-description">
            <h2 className="popular-food-title">Salad Chipotle</h2>
            <p>
            A refreshing mix of crisp greens, vibrant vegetables, and flavorful dressings for a healthy and delicious meal.
            </p>
            <p className="food-price">Price: 5.9$</p>
          </div>
        </div>

        {/* Food Menu Item 5 */}
        <div className="popular-food-menu-item">
          <div className="food-img">
            <img src={require("../images/pizza.jpg")} alt="" />
          </div>
          <div className="popular-food-description">
            <h2 className="popular-food-title">Chicken Pizza Wendys</h2>
            <p>
            Indulge in the perfect fusion of succulent chicken and savory toppings atop a crispy pizza crust, delivering a delicious harmony of flavors in every slice.
            </p>
            <p className="food-price">Price: 7.49$</p>
          </div>
        </div>

        {/* Food Menu Item 6 */}
        <div className="popular-food-menu-item">
          <div className="food-img">
            <img src={require("../wendy/item1")} alt="" />
          </div>
          <div className="popular-food-description">
            <h2 className="popular-food-title">Baconator Wendys</h2>
            <p>
            A delicious and hearty burger loaded with bacon, cheese, and Wendy's signature beef patty.
            </p>
            <p className="food-price">Price: 6.89$</p>
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
                    Savor the rich aroma and delightful flavors of our meticulously crafted Starbucks coffee, a comforting blend that awakens your senses with every sip
                    </p>
                    <p className="restaurant-location">Location: Aztec Student Union</p>
                </div>
            </div>
          
             
                <div className="restaurant-item">
                    <div className="restaurant-img">
                        <img src={require("../images/chipotle.jpg")} alt="Restaurant 2" />
                    </div>
                    <div className="restaurant-description">
                        <h2 className="restaurant-title">
                           <Link to="/chipotle">chipotle</Link>
                        </h2>
                        <p>
                        Experience a customizable delight with our Chipotle offerings—a fusion of proteins, fresh toppings, and flavorful choices tailored to your taste.
                        </p>
                        <p className="restaurant-location">Location: Aztec Student Union</p>
                    </div>
                </div>

          
                <div className="restaurant-item">
                    <div className="restaurant-img">
                        <img src={require("../images/habbit.JPG")} alt="Restaurant 3" />
                    </div>
                    <div className="restaurant-description">
                        <h2 className="restaurant-title">
                             <Link to="/habbitgrill">Habbit Grill</Link> 
                        </h2>
                        <p>
                        Indulge in a wholesome culinary experience at Habbit Grill, where fresh ingredients and bold flavors come together for a delightful meal.
                        </p>
                        <p className="restaurant-location">Location:SDSU West commons</p>
                    </div>
                </div>

             
                <div className="restaurant-item">
                    <div className="restaurant-img">
                        <img src={require("../images/halal.jpg")} alt="Restaurant 1" />
                    </div>
                    <div className="restaurant-description">
                        <h2 className="restaurant-title">
                             <Link to="/halal">Hallal Shack</Link> 
                        </h2>
                        <p>
                        Savor the fusion of diverse flavors at Halal Shack, offering a delectable selection of halal dishes for a satisfying and unique dining experience.
                        </p>
                        <p className="restaurant-location">Location:SDSU East commons</p>
                    </div>
                </div>

                <div className="restaurant-item">
                    <div class="restaurant-img">
                        <img src={require("../images/wendys.jpg")}alt="Restaurant 1" />
                    </div>
                    <div className="restaurant-description">
                        <h2 className="restaurant-title">
                             <Link to="/wendy">Wendy's</Link>
                        </h2>
                        <p>
                        Indulge in Wendy's signature tastes, where fresh ingredients and bold flavors come together in every bite for a delightful fast-food experience.
                        </p>
                        <p className="restaurant-location">Location:Aztec Student Union</p>
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
              SDSU EATS project is started to provide easy access to food to the students around the campus.
              You don't need to wait in line for food anymore. You can work on your assignments while we take
              care of your meal
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
