// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usersData from './users.json';
import './login.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username or Email is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    const user = usersData.users.find(u => u.username === formData.username && u.password === formData.password);

    if (!user) {
      newErrors.login = 'Invalid username or password';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Login successful');


      // Redirect to the homepage with the username as state
      navigate('/home', { state: { username: user.username } });
      window.location.reload();

      // You can also perform other actions after successful login
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="overlay-box">
          <div className="login-form-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="login-input-box">
                <span className="login-icon"><ion-icon name="mail"></ion-icon></span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autocapitalize="none"
                  required
                />
                {errors.username && <span className="login-error">{errors.username}</span>}
                <label>Username or Email</label>
              </div>
              <div className="login-input-box">
                <span className="login-icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='password123'
                  autocapitalize="none"
                  required
                />
                {errors.password && <span className="login-error">{errors.password}</span>}
                <label>Password</label>
              </div>
              <div className="login-remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <Link to="#" className="login-forgot-link">Forgot Password?</Link>
              </div>
              {errors.login && <p className="login-error">{errors.login}</p>}
              <button type="submit" className="login-btn">Login</button>
              <div className="login-register">
                <p>Don't have an account? <Link to="/register" className="register-link">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="login-footer">
        {/* ... (existing footer code) */}
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Login;
