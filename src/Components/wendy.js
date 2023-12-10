import React, { useState }from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import Counter from './counter';

const Wendys = () => {

  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);
  const [quantity5, setQuantity5] = useState(0);
  
  
  var totalPrice = 0;

  const item1Price = 7.99;
  const item2Price = 5.49;
  const item3Price = 9.79;
  const item4Price = 10.29;
  const item5Price = 3.99;
  

  const navigate = useNavigate();

  const itemsData = [
    { id: 1, name: "Baconator", price: item1Price, quantity: quantity1 },
    { id: 2, name: "Spicy Chicken Nuggets", price: item2Price, quantity: quantity2 },
    { id: 3, name: "Dave's Single", price: item3Price, quantity: quantity3 },
    { id: 4, name: "Homestyle Chicken Sandwich", price: item4Price, quantity: quantity4 },
    { id: 5, name: "Small Frosty", price: item5Price, quantity: quantity5 },
    
    // Add more items as needed
  ];

  const calculateTotal = () => {
    const total =
      quantity1 * item1Price +
      quantity2 * item2Price +
      quantity3 * item3Price +
      quantity4 * item4Price +
      quantity5 * item5Price ;
      totalPrice = total;
    
  }

  const handleProceedToCart = () => {
    calculateTotal();
    console.log('Total Price:', totalPrice);
    // Navigate to the cart page (MyCart)
    navigate('/mycart', { state: { itemsData, totalPrice } });
  }
  

  return (
    <>
      <section className="showcase-area wendy-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home"></h1>
        </div>
      </section>

      <section id="food-menu">
        <h2 className="food-menu-heading">Wendy's Menu</h2>
        <div className="food-menu-container container">

          {/* Item 1 */}
          <div className="food-menu-item">
            <div className="food-img">
                <img src= {require("../wendy/item1")} alt="Baconator" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Baconator</h2>
              <p>
              A delicious and hearty burger loaded with bacon, cheese, and Wendy's signature beef patty. (Price: $7.99)
              </p>
            </div>
            <div className="counter-and-button-container">
              <div className="counter-container">
                <Counter quantity={quantity1} setQuantity={setQuantity1} />
              </div>
              <div className="proceed-to-cart-container">
                <button className="proceed-to-cart-btn" onClick={handleProceedToCart} >Proceed to Cart</button>
              </div>
            </div>
          </div>


          {/* Item 2 */}
          <div className="food-menu-item">
            <div className="food-img">
              <img src={require("../wendy/item2")} alt="Spicy Chicken Nuggets" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Spicy Chicken Nuggets</h2>
              <p>
              Spice up your meal with these crispy and flavorful spicy chicken nuggets. (Price: $5.49)
              </p>
            </div>
            <div className="counter-and-button-container">
              <div className="counter-container">
                <Counter quantity={quantity2} setQuantity={setQuantity2} />
              </div>
              <div className="proceed-to-cart-container">
                <button className="proceed-to-cart-btn" onClick={handleProceedToCart} >Proceed to Cart</button>
              </div>
            </div>
          </div>
        {/* Item 3*/ }
        <div className="food-menu-item">
            <div className="food-img">
                <img src={require("../wendy/item3")} alt="Dave's Single" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Dave's Single</h2>
              <p>
              Wendy's classic single patty burger featuring fresh ingredients and Dave's special sauce. (Price: $9.79)
              </p>
            </div>
            <div className="counter-and-button-container">
              <div className="counter-container">
                <Counter quantity={quantity3} setQuantity={setQuantity3} />
              </div>
              <div className="proceed-to-cart-container">
                <button className="proceed-to-cart-btn" onClick={handleProceedToCart} >Proceed to Cart</button>
              </div>
            </div>
          </div>
        {/* Item 4 */}
        <div className="food-menu-item">
            <div className="food-img">
                <img src={require("../wendy/item4")} alt="Homestyle Chicken Sandwich" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Homestyle Chicken Sandwichl</h2>
              <p>
              A homestyle favorite – crispy chicken fillet topped with lettuce, tomato, and mayo. (Price: $10.29)
              </p>
            </div>
            <div className="counter-and-button-container">
              <div className="counter-container">
                <Counter quantity={quantity4} setQuantity={setQuantity4} />
              </div>
              <div className="proceed-to-cart-container">
                <button className="proceed-to-cart-btn" onClick={handleProceedToCart} >Proceed to Cart</button>
              </div>
            </div>
        </div>
          {/* Item 5 */}
        <div className="food-menu-item">
            <div className="food-img">
                <img src={require("../wendy/item5")} alt="Small Frosty" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Small Frosty</h2>
              <p>
              Indulge in a sweet treat with Wendy's famous small Frosty, a perfect blend of chocolate or vanilla goodness. (Price: $5.99)
              </p>
            </div>
            <div className="counter-and-button-container">
              <div className="counter-container">
                <Counter quantity={quantity5} setQuantity={setQuantity5} />
              </div>
              <div className="proceed-to-cart-container">
                <button className="proceed-to-cart-btn" onClick={handleProceedToCart} >Proceed to Cart</button>
              </div>
            </div>
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
    </>
  );
}

export default Wendys;
