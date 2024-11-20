import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">LensVox</Link>
        </div>
        
          
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/"></Link></li>
          <li className="navbar-item"><Link to="/about">About</Link></li>
          <li className="navbar-item"><Link to="/services">Services</Link></li>
          <li className="navbar-item"><Link to="/projects">Projects</Link></li>
          <li className="navbar-item"><Link to="/contact">Contact</Link></li>
          <li className="navbar-item"><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
