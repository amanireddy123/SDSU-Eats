/// Import necessary modules
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import './style.css';

// Import the user data (replace with your actual path)
import userData from './users.json';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.studentId.trim()) {
      newErrors.studentId = 'Student ID is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // Check if the user already exists
      const existingUser = userData.users.find(
        (user) => user.email === formData.email
      );

      if (existingUser) {
        setErrors({ email: 'User with this email already exists' });
      } else {
        // If no errors and the user doesn't exist, add the new user
        const newUser = {
          id: userData.users.length + 1,
          username: formData.email, // Assuming email can be used as a username
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          studentId: formData.studentId,
        };

        // Update the user data
        userData.users.push(newUser);

        // Navigate to the home page
        navigate('/login');
      }
    } else {
      // If there are errors, update the state
      setErrors(newErrors);
    }
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
