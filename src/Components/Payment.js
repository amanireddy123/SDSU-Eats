// PaymentPage.js

import React, { useState } from 'react';
import './payment.css';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { itemsData, totalPrice } = location.state;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNum: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNum: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error when the user types
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zip &&
      formData.cardName &&
      formData.cardNum &&
      formData.expMonth &&
      formData.expYear &&
      formData.cvv
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or additional validation here

    if (isFormValid()) {
      console.log('Form submitted:', formData);
      navigate('/myorders', { state: { itemsData, totalPrice } });
    } else {
      setErrors({
        name: 'Name is required',
        email: 'Email is required',
        address: 'Address is required',
        city: 'City is required',
        state: 'State is required',
        zip: 'Zip Code is required',
        cardName: 'Name on Card is required',
        cardNum: 'Credit Card Number is required',
        expMonth: 'Expiration Month is required',
        expYear: 'Expiration Year is required',
        cvv: 'CVV is required',
      });
    }
  };

  return (
    <div className="payment-container">
      <form onSubmit={handleSubmit}>
        <div className="payment-row">
          <div className="payment-col">
            <h3 className="payment-title">Billing Address</h3>
            <div className="payment-inputBox">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
  
            <div className="payment-inputBox">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                autocapitalize="none"
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
  
            <div className="payment-inputBox">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
                autocapitalize="none"
                required
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>
  
            <div className="payment-inputBox">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
                autocapitalize="none"
                required
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>
  
            <div className="payment-flex">
              <div className="payment-inputBox">
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleChange}
                  autocapitalize="none"
                  required
                />
                {errors.state && <span className="error-message">{errors.state}</span>}
              </div>
  
              <div className="payment-inputBox">
                <label htmlFor="zip">Zip Code:</label>
                <input
                  type="number"
                  id="zip"
                  name="zip"
                  placeholder="123456"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
                {errors.zip && <span className="error-message">{errors.zip}</span>}
              </div>
            </div>
          </div>
  
          <div className="payment-col">
            <h3 className="payment-title">Payment</h3>
            <div className="payment-inputBox">
              <label htmlFor="cardName">Name On Card:</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                placeholder="Enter card name"
                value={formData.cardName}
                onChange={handleChange}
                required
              />
              {errors.cardName && <span className="error-message">{errors.cardName}</span>}
            </div>
  
            <div className="payment-inputBox">
              <label htmlFor="cardNum">Credit Card Number:</label>
              <input
                type="text"
                id="cardNum"
                name="cardNum"
                placeholder="1111-2222-3333-4444"
                maxLength="19"
                value={formData.cardNum}
                onChange={handleChange}
                required
              />
              {errors.cardNum && <span className="error-message">{errors.cardNum}</span>}
            </div>
  
            <div className="payment-inputBox">
              <label htmlFor="expMonth">Exp Month:</label>
              <select
                name="expMonth"
                id="expMonth"
                value={formData.expMonth}
                onChange={handleChange}
                required
              >
                <option value="">Select Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              {errors.expMonth && <span className="error-message">{errors.expMonth}</span>}
            </div>
  
            <div className="payment-flex">
              <div className="payment-inputBox">
                <label htmlFor="expYear">Exp Year:</label>
                <select
                  name="expYear"
                  id="expYear"
                  value={formData.expYear}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
                {errors.expYear && <span className="error-message">{errors.expYear}</span>}
              </div>
  
              <div className="payment-inputBox">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="number"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
                {errors.cvv && <span className="error-message">{errors.cvv}</span>}
              </div>
            </div>
  
            <div className="payment-inputBox">
              <label>Card Accepted:</label>
              <img src={require("../images/cards.png")} alt="credit/debit card image" />
            </div>
          </div>
        </div>
  
        <input
          type="submit"
          value="Proceed to Checkout"
          className="payment-submit_btn"
          disabled={!isFormValid()}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}  
export default PaymentPage;
