import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="logo"
        className="navbar-logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/Properties">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/AddProperty">Add Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
