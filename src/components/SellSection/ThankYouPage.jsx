import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYouPage.css";
import logo from '/logo2.png'; // Adjust the path to your logo file

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleViewProperty = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="container">
      <div className="left-column">
        <img src={logo} alt="Elite Estate Logo" className="logo" />
        <h1>Hi! We want to buy your home.</h1>
        <div className="contact-box">
          <p>Have questions? Please call us. 1-877-850-4448</p>
        </div>
      </div>
      <div className="right-column">
        <div className="form-container thank-you-wrapper">
          <h1>Thank You for Submitting Your Property!</h1>
          <p>Your property submission is pending approval by the admin. You will be notified once it is approved.</p>
          <button onClick={handleViewProperty}>Visit Our Homepage</button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
