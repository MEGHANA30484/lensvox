import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Add CSS styles here

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  } ; 


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><h1>LensVox</h1></Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>
      </div>

    </nav>
  );
};

export default NavBar;
