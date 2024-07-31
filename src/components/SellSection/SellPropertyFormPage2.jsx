import React from "react";
import { useNavigate } from "react-router-dom";
import "./SellPropertyFormPage2.css";
import logo from '/logo2.png';

const SellPropertyFormPage2 = ({ nextStep, prevStep, form, handleChange }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(e);
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="page2-container">
      <div className="page2-left-column">
        <img src={logo} alt="Elite Estate Logo" className="page2-logo" />
        <h1 className="page2-heading">Sell Your Property - Location and Category</h1>
        <div className="page2-contact-box">
          <p>Have questions? Please call us. 1-877-850-4448</p>
        </div>
      </div>
      <div className="page2-right-column">
        <div className="page2-form-container">
          <h1>Sell Your Property - Location and Category</h1>
          <form onSubmit={handleSubmit} className="page2-form">
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="page2-input"
              required
            />
            <input
              type="text"
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              placeholder="Owner Name"
              className="page2-input"
              required
            />
            <input
              type="email"
              name="ownerEmail"
              value={form.ownerEmail}
              onChange={handleChange}
              placeholder="Owner Email"
              className="page2-input"
              required
            />
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className="page2-input"
              required
            />
            <div className="page2-button-container">
              <button type="button" onClick={prevStep} className="page2-back-button">Back</button>
              <button type="submit" className="page2-next-button">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellPropertyFormPage2;
