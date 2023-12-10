// Counter.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Counter = ({ quantity, setQuantity }) => {
  const increment = () => {
    setQuantity(prevQty => prevQty + 1);
  }

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(prevQty => prevQty - 1);
    }
  }

  return (
    <div className="counter">
      <button className="decrement-btn" onClick={decrement}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className="quantity">{quantity}</span>
      <button className="increment-btn" onClick={increment}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default Counter;
