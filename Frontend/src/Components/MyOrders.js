// Orders.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './myorders.css';

const Orders = () => {
  const location = useLocation();
  const { state } = location;

  // Initialize orders from the location state or use orders from localStorage
  const [orders, setOrders] = useState(state ? state.itemsData : getOrdersFromLocalStorage());

  const [countdown, setCountdown] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    // Start the countdown when the component mounts
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Save orders to localStorage whenever it changes
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  function getOrdersFromLocalStorage() {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : [];
  }

  return (
    <div className="orders-container">
      <h1 className="orders-heading">Ongoing Orders</h1>

      {orders && orders.length > 0 ? (
        <>
          <ul className="order-list">
            {orders.filter(item => item.quantity > 0).map((item) => (
              <li key={item.id} className="order-item">
                <span className="order-item-name">{item.name}</span>
                <span className="order-item-quantity">Quantity: {item.quantity}</span>
                <span className="order-item-total">Total Price: ${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="estimated-time">
            <p className="estimated-time-heading">Estimated Time to Delivery:</p>
            <p className="countdown-timer">{formatTime(countdown)}</p>
          </div>
        </>
      ) : (
        <p className="no-orders-message">No orders at this time.</p>
      )}
    </div>
  );
};

export default Orders;
