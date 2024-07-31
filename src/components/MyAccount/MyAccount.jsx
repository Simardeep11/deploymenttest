import React, { useContext, useState } from "react";
import "./MyAccount.css";
import { AuthContext } from "../../context/AuthContext";

const MyAccount = () => {
  const { user } = useContext(AuthContext);
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");
  const [role, setRole] = useState(user.role || "No Preference");
  const [birthYear, setBirthYear] = useState(user.birthYear || "");
  const [gender, setGender] = useState(user.gender || "Select");
  const [maritalStatus, setMaritalStatus] = useState(user.maritalStatus || "Select");
  const [city, setCity] = useState(user.city || "");
  const [province, setProvince] = useState(user.province || "No Preference");
  const [country, setCountry] = useState(user.country || "Canada");
  const [postalCode, setPostalCode] = useState(user.postalCode || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="account-container">
      <h2>Account Information</h2>
      <p>Here you can customize your basic account set-up information.</p>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h3>About You</h3>
          <div className="input-group">
            <label>First Name *</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Last Name *</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Display Name *</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Email *</label>
            <input type="email" value={email} readOnly />
          </div>
        </div>
        <div className="section">
          <h3>More About You</h3>
          <div className="input-group">
            <label>I am a</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option>No Preference</option>
              <option>Buyer</option>
              <option>Seller</option>
              <option>Agent</option>
            </select>
          </div>
          <div className="input-group">
            <label>Year of birth</label>
            <input
              type="text"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="input-group">
            <label>Marital status</label>
            <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
              <option>Select</option>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
            </select>
          </div>
        </div>
        <div className="section">
          <h3>Contact Information</h3>
          <div className="input-group">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Province</label>
            <select value={province} onChange={(e) => setProvince(e.target.value)}>
              <option>No Preference</option>
              {/* Add other provinces as options */}
            </select>
          </div>
          <div className="input-group">
            <label>Country</label>
            <input type="text" value={country} readOnly />
          </div>
          <div className="input-group">
            <label>Postal Code</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default MyAccount;
