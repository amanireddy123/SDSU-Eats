// MyCart.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './mycart.css'

const MyCart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { itemsData, totalPrice } = location.state;

  // Filter items with non-zero quantity
  const nonZeroQuantityItems = itemsData.filter(item => item.quantity > 0);

  const handleProceedToPayment = () => {
    // You can navigate to the payment page here
    console.log(totalPrice);
    navigate('/payment', { state: { itemsData, totalPrice } });
  };

  return (
    <div className="my-cart-container">
      <h1 className="my-cart-heading">My Cart</h1>
      <ul className="item-list">
        {nonZeroQuantityItems.map(item => (
          <li key={item.id} className="item">
            <span className="item-name">{item.name}</span>
            <span className="item-quantity">Quantity: {item.quantity}</span>
            <span className="item-total">Total Price: ${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <p className="total-price">Total Price: ${totalPrice}</p>
      <button
        className="proceed-to-payment-btn"
        onClick={handleProceedToPayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default MyCart;
