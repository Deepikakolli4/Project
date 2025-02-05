import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import Login from '../../Login';
import SignUp from '../../SignUp';

const Header = () => {
  const [renderLogin, setRenderLogin] = useState(false);
  const [renderSignUp, setRenderSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Banglore'); // State for selected location
  const navigate = useNavigate();

  // Check login status and retrieve username from localStorage when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUsername = localStorage.getItem('username');
    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLoginClick = () => {
    setRenderLogin(true);
    setRenderSignUp(false);
    navigate('/login');
  };

  const handleSignUpClick = () => {
    setRenderSignUp(true);
    setRenderLogin(false);
    navigate('/signup');
  };

  const handleLogout = () => {
    // Clear localStorage and reset state for logout
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/login'); // Redirect to login page after logout
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value); // Update the selected location
    // You can make an API call to your backend here to send the selected location
    // Example:
    // fetch('/api/set-location', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ location: e.target.value }),
    // });
  };

  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="ZomatoLogo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
        
              <select
                className="location-dropdown"
                value={selectedLocation}
                onChange={handleLocationChange}
              >
                <option value="Banglore">India</option>
                <option value="Delhi">Australia</option>
                <option value="Mumbai">Brazil</option>
                <option value="Chennai">Cannada</option>
                <option value="Chennai">Indonesia</option>
                <option value="Chennai">Brazil</option>
                <option value="Chennai">Quatar</option>
                <option value="Chennai">Signapore</option>
                <option value="Chennai">SoutAfrica</option>
                {/* Add more options as required */}
              </select>
            </div>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>

        <div className="auth-buttons">
          {isLoggedIn ? (
            <div className="profile-section">
              <img
                src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="Profile"
                className="header-profile-image"
              />
              <span className="header-username">{username}</span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button className="login-button" onClick={handleLoginClick}>
                Login
              </button>
              <button className="signup-button" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          )}
        </div>
        {renderLogin && <Login />}
        {renderSignUp && <SignUp />}
      </div>
    </div>
  );
};

export default Header;
