import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src="/gym-hero.jpg" alt="Gym" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to GymLife</h1>
          <p>Organize your gym staff and roles effortlessly.</p>
        </div>
      </div>

      <div className="box-grid">
        <Link to="/employees" className="info-box employee-box">
          <div className="box-overlay">
            <h2>Employees</h2>
            <p>Manage your gym staff easily</p>
          </div>
        </Link>

        <Link to="/departments" className="info-box department-box">
          <div className="box-overlay">
            <h2>Departments</h2>
            <p>Structure your workout areas</p>
          </div>
        </Link>

        <Link to="/roles" className="info-box role-box">
          <div className="box-overlay">
            <h2>Roles</h2>
            <p>Define responsibilities clearly</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
