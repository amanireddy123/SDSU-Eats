import React, { useState }from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import Counter from './counter';

const Halal = () => {

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
    { id: 1, name: "Chicken Over Rice", price: item1Price, quantity: quantity1 },
    { id: 2, name: "Falafel Wrap", price: item2Price, quantity: quantity2 },
    { id: 3, name: "Lamb Gyro Platter", price: item3Price, quantity: quantity3 },
    { id: 4, name: "Hummus Bowl", price: item4Price, quantity: quantity4 },
    { id: 5, name: "Beef Kebab Skewers", price: item5Price, quantity: quantity5 },
    
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
      <section className="showcase-area halal-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home"></h1>
        </div>
      </section>

      <section id="food-menu">
        <h2 className="food-menu-heading">Halal Menu</h2>
        <div className="food-menu-container container">

          {/* Item 1 */}
          <div className="food-menu-item">
            <div className="food-img">
                <img src= {require("../halal/item1")} alt="Chicken Over Rice" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Chicken Over Rice</h2>
              <p>
              Tender grilled chicken served over a bed of aromatic rice, topped with a flavorful white sauce. (Price: $7.99)
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
              <img src={require("../halal/item2")} alt="Falafel Wrap" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Falafel Wrap</h2>
              <p>
              Crispy falafel balls wrapped in a warm pita with fresh vegetables and tahini sauce for a delightful vegetarian option. (Price: $5.49)
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
                <img src={require("../halal/item3")} alt="Lamb Gyro Platter" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Lamb Gyro Platter</h2>
              <p>
              Succulent slices of seasoned lamb, served on a platter with rice, salad, and drizzled with savory tzatziki sauce. (Price: $9.79)
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
                <img src={require("../halal/item4")} alt="Hummus Bowl" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Hummus Bowl</h2>
              <p>
              Creamy hummus served with warm pita bread and a side of fresh veggies, providing a satisfying and healthy choice. (Price: $10.29)
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
                <img src={require("../halal/item5")} alt="Beef Kebab Skewers" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Beef Kebab Skewers</h2>
              <p>
              Grilled beef kebabs marinated in a blend of Middle Eastern spices, served on skewers with a side of seasoned rice. (Price: $5.99)
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

export default Halal;
