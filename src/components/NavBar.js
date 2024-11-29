import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Add CSS styles here

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><h1>LensVox</h1></Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/"></Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
