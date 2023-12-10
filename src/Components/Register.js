import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import './style.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/register/',
        {
          username: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          password: formData.password,
          student_id: formData.studentId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        console.log('Registration successful');
        navigate('/login');
      } else {
        console.log('Registration failed:', response.data);
        // Handle registration error
        setErrors(response.data);
      }
    } catch (error) {
      console.error('Error during registration:', error.response.data);
      // Handle other errors (e.g., network issues)
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!data.studentId.trim()) {
      errors.studentId = 'Student ID is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Use a regular expression or any other method to check the email format
    // For simplicity, this example checks if there's an "@" symbol
    return email.includes('@');
  };


  


  return (
    <>
      <div className="register-wrapper">
        <div className="register-form-box register">
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="register-input-box">
              <span className="register-icon"><ion-icon name="person-circle-outline"></ion-icon></span>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                autocapitalize="none"
              />
              {errors.firstName && <span className="register-error">{errors.firstName}</span>}
              <label className="register-label">First Name</label>
            </div>

            <div className="register-input-box">
              <span className="register-icon"><ion-icon name="person-circle-outline"></ion-icon></span>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                autocapitalize="none"
              />
              {errors.lastName && <span className="register-error">{errors.lastName}</span>}
              <label className="register-label">Last Name</label>
            </div>

            <div className="register-input-box">
              <span className="register-icon"><ion-icon name="mail"></ion-icon></span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autocapitalize="none"
              />
              {errors.email && <span className="register-error">{errors.email}</span>}
              <label className="register-label">Email</label>
            </div>

            <div className="register-input-box">
              <span className="register-icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autocapitalize="none"
              />
              {errors.password && <span className="register-error">{errors.password}</span>}
              <label className="register-label">Password</label>
            </div>

            <div className="register-input-box">
              <span className="register-icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                autocapitalize="none"
              />
              {errors.confirmPassword && <span className="register-error">{errors.confirmPassword}</span>}
              <label className="register-label">Confirm Password</label>
            </div>

            <div className="register-input-box">
              <span className="register-icon"><ion-icon name="card"></ion-icon></span>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                autocapitalize="none"
              />
              {errors.studentId && <span className="register-error">{errors.studentId}</span>}
              <label className="register-label">Student ID</label>
            </div>

            <button type="submit" className="register-btn">Register</button>

            <div className="register-login">
              <p>Already have an account? <Link to="/login" className="register-link">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
