import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState(location.state?.username || null);

  const handleLogout = () => {
    // Perform logout actions (e.g., clear user session, etc.)
    // You may also want to redirect to the login page after logout

    // Update the state to clear the username
    setUsername(null);

    // Navigate to the login page with state data
    
    navigate('/login', { state: { fromLogout: true } });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top " style={{ padding: '10px'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            SDSUEats
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myorders">
                  My Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            {/* Conditional rendering based on login status */}
            {username ? (
              // If username is present, show username and logout button
              <div className="d-flex align-items-center ms-auto">
                <span className="text-light me-2">{username}</span>
                <button className="btn btn-outline-light" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              // If not logged in, show login button
              <Link className="btn btn-outline-light ms-auto" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
