import React, { useState }from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import Counter from './counter';

const HabbitGrill = () => {

  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);
  const [quantity5, setQuantity5] = useState(0);
  
  
  var totalPrice = 0;

  const item1Price = 10.99;
  const item2Price = 11.49;
  const item3Price = 12.79;
  const item4Price = 13.29;
  const item5Price = 14.99;
  

  const navigate = useNavigate();

  const itemsData = [
    { id: 1, name: "Grilled Chicken Sandwich", price: item1Price, quantity: quantity1 },
    { id: 2, name: "Avocado Bacon Burger", price: item2Price, quantity: quantity2 },
    { id: 3, name: "Salmon Bowl", price: item3Price, quantity: quantity3 },
    { id: 4, name: "Sweet Potato Fries", price: item4Price, quantity: quantity4 },
    { id: 5, name: "Mango Tango Salad", price: item5Price, quantity: quantity5 },
    
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
      <section className="showcase-area Habbit-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home"></h1>
        </div>
      </section>

      <section id="food-menu">
        <h2 className="food-menu-heading">HabbitGrill Menu</h2>
        <div className="food-menu-container container">

          {/* Item 1 */}
          <div className="food-menu-item">
            <div className="food-img">
                <img src= {require("../habbit/item1")} alt="Grilled Chicken Sandwich" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Grilled Chicken Sandwich</h2>
              <p>
              Juicy grilled chicken with fresh toppings on a toasted bun. (Price: $10.99)
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
              <img src={require("../habbit/item2")} alt="Avocado Bacon Burger" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Avocado Bacon Burger</h2>
              <p>
              Delicious burger topped with creamy avocado and crispy bacon. (Price: $11.49)
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
                <img src={require("../habbit/item3")} alt="Salmon Bowl" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Salmon Bowl</h2>
              <p>
              Healthy bowl with grilled salmon, brown rice, and a variety of veggies. (Price: $12.79)
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
                <img src={require("../habbit/item4")} alt="Sweet Potato Fries" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Sweet Potato Fries</h2>
              <p>
              Crispy sweet potato fries seasoned to perfection. (Price: $10.29)
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
                <img src={require("../habbit/item5")} alt="Mango Tango Salad" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Mango Tango Salad</h2>
              <p>
              'Refreshing salad with mango, mixed greens, and tangy vinaigrette. (Price: $15.99)
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

export default HabbitGrill;
