import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div>
      <img
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="logo"
        className="navbar-logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a property</li>
      </ul>
    </div>
  );
};

export default NavBar;
