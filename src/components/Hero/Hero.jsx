import React, { useState } from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      navigate(`/search-results?location=${searchInput}`);
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: "url('public/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <br />
              Welcome Home
              <br />
            </motion.h1>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter location"
            />
            <button className="button" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={2} end={37} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Livings</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={150} end={200} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={112} /> <span>+</span>
              </span>
              <span className="secondaryText">Homes Sold and Bought</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
