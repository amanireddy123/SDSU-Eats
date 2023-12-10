import React, { useState }from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import Counter from './counter';

const Items1 = () => {

  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);
  const [quantity5, setQuantity5] = useState(0);
  const [quantity6, setQuantity6] = useState(0);
  const [quantity7, setQuantity7] = useState(0);
  const [quantity8, setQuantity8] = useState(0);
  const [quantity9, setQuantity9] = useState(0);
  
  var totalPrice = 0;

  const item1Price = 4.99;
  const item2Price = 5.49;
  const item3Price = 4.79;
  const item4Price = 4.29;
  const item5Price = 5.99;
  const item6Price = 4.49;
  const item7Price = 3.99;
  const item8Price = 5.49;
  const item9Price = 5.49;

  const navigate = useNavigate();

  const itemsData = [
    { id: 1, name: "Caramel Macchiato", price: item1Price, quantity: quantity1 },
    { id: 2, name: "Mocha Frappuccino", price: item2Price, quantity: quantity2 },
    { id: 3, name: "Vanilla Latte", price: item3Price, quantity: quantity3 },
    { id: 4, name: "Cappuccino", price: item4Price, quantity: quantity4 },
    { id: 5, name: "White Chocolate Mocha", price: item5Price, quantity: quantity5 },
    { id: 6, name: "Green Tea Latte", price: item6Price, quantity: quantity6 },
    { id: 7, name: "Iced Coffee", price: item7Price, quantity: quantity7 },
    { id: 8, name: "Peppermint Mocha", price: item8Price, quantity: quantity8 },
    { id: 9, name: "Caramel Frappuccino", price: item9Price, quantity: quantity9 },
    // Add more items as needed
  ];

  const calculateTotal = () => {
    const total =
      quantity1 * item1Price +
      quantity2 * item2Price +
      quantity3 * item3Price +
      quantity4 * item4Price +
      quantity5 * item5Price +
      quantity6 * item6Price +
      quantity7 * item7Price +
      quantity8 * item8Price +
      quantity9 * item9Price;

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
      <section className="showcase-area starbucks-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home"></h1>
        </div>
      </section>

      <section id="food-menu">
        <h2 className="food-menu-heading">Starbucks Menu</h2>
        <div className="food-menu-container container">

          {/* Item 1 */}
          <div className="food-menu-item">
            <div className="food-img">
                <img src= {require("../starbucks/item1")} alt="Caramel Macchiato" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Caramel Macchiato</h2>
              <p>
                Rich espresso with vanilla-flavored syrup and steamed milk, topped with caramel drizzle. (Price: $4.99)
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
              <img src={require("../starbucks/item2")} alt="Mocha Frappuccino" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Mocha Frappuccino</h2>
              <p>
                Coffee with rich mocha-flavored sauce, blended with milk, and ice. (Price: $5.49)
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
                <img src={require("../starbucks/item3")} alt="Item 3" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Mocha Frappuccino</h2>
              <p>
                Espresso and steamed milk with a sweet and creamy vanilla flavor. (Price: $4.79)
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
                <img src={require("../starbucks/item4")} alt="Cappuccino" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Cappuccino</h2>
              <p>
                    Espresso with steamed milk, topped with a deep layer of foam. (Price: $4.29)
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
                <img src={require("../starbucks/item5")} alt="Cappuccino" />
            </div>
            <div className="food-description">
              <h2 className="food-title">White Chocolate Mocha</h2>
              <p>
                    Espresso with white chocolate-flavored sauce, steamed milk, and whipped cream. (Price: $5.99)
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
        {/* Item 6 */}
        <div className="food-menu-item">
            <div className="food-img">
                <img src={require("../starbucks/item6")} alt="Green Tea Latte" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Green Tea Latte</h2>
              <p>
                Green tea with steamed milk and a hint of sweetness. (Price: $4.49)
              </p>
            </div>
            <div className="counter-and-button-container">
              <div className="counter-container">
                <Counter quantity={quantity6} setQuantity={setQuantity6} />
              </div>
              <div className="proceed-to-cart-container">
                <button className="proceed-to-cart-btn" onClick={handleProceedToCart} >Proceed to Cart</button>
              </div>
            </div>
          </div>
        {/* Item 7 */}
        <div className="food-menu-item">
            <div className="food-img">
                <img src={require("../starbucks/item7")} alt="Green Tea Latte" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Iced Coffee</h2>
              <p>
                    Starbucks iced coffee made with 100% Arabica coffee beans. (Price: $3.99)
              </p>
            </div>
            <div className="counter-and-button-container">
              <div className="counter-container">
                <Counter quantity={quantity7} setQuantity={setQuantity7} />
              </div>
              <div className="proceed-to-cart-container">
                <button className="proceed-to-cart-btn" onClick={handleProceedToCart} >Proceed to Cart</button>
              </div>
            </div>
          </div>
         {/* Item 8 */}
         <div className="food-menu-item">
            <div className="food-img">
                <img src={require("../starbucks/item8")} alt="Peppermint Mocha" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Iced Coffee</h2>
              <p>
                    Espresso with mocha sauce, peppermint-flavored syrup, and steamed milk. (Price: $5.49)
              </p>
            </div>
            <div className="counter-and-button-container">
              <div className="counter-container">
                <Counter quantity={quantity8} setQuantity={setQuantity8} />
              </div>
              <div className="proceed-to-cart-container">
                <button className="proceed-to-cart-btn" onClick={handleProceedToCart} >Proceed to Cart</button>
              </div>
            </div>
          </div>
        {/* Item 9 */}
        <div className="food-menu-item">
            <div className="food-img">
                <img src={require("../starbucks/item9")} alt="Caramel Frappuccino" />
            </div>
            <div className="food-description">
              <h2 className="food-title">Iced Coffee</h2>
              <p>
                    Coffee with caramel syrup, blended with ice and topped with whipped cream. (Price: $5.49)
              </p>
            </div>
            <div className="counter-and-button-container">
              <div className="counter-container">
                <Counter quantity={quantity9} setQuantity={setQuantity9} />
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

export default Items1;
