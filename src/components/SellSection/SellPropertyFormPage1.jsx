import React from "react";
import { useNavigate } from "react-router-dom";
import "./SellPropertyFormPage1.css";
import logo from '/logo2.png';

const SellPropertyFormPage1 = ({ nextStep, form, handleChange }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(e);
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="page1-container">
      <div className="page1-left-column">
        <img src={logo} alt="Elite Estate Logo" className="page1-logo" />
        <h1 className="page1-heading">Hi! We want to buy your home.</h1>
        <div className="page1-contact-box">
          <p>Have questions? Please call us. 1-877-850-4448</p>
        </div>
      </div>
      <div className="page1-right-column">
        <div className="page1-form-container">
          <h1>Sell Your Property - Basic Information</h1>
          <form onSubmit={handleSubmit} className="page1-form">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Property Name"
              className="page1-input"
              required
            />
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Property Price"
              className="page1-input"
              required
            />
            <textarea
              name="detail"
              value={form.detail}
              onChange={handleChange}
              placeholder="Property Detail"
              className="page1-textarea"
              required
            />
            <div className="page1-button-container">
              <button type="submit" className="page1-next-button">Next</button>
              <button type="button" className="page1-back-home-button" onClick={goToHomePage}>Back Home</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellPropertyFormPage1;
