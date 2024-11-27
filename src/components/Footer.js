import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './images/sample_logoLV.png';
import './Footer.css';
 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {<div className="footer-summary">
                    <h1> LensVox</h1>
                   
                    <p>
                        We are a leading IT solutions provider specializing in software development,
                        cloud services, and innovative digital solutions to help businesses thrive
                        in a tech-driven world.
                    </p>
                </div> }
                <div className="footer-Quicklinks">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
 
                <div className="footer-Resources">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/about">Blog</a></li>
                        <li><a href="/services">Newsletter</a></li>
                        <li><a href="/contact">Research paper</a></li>
                    </ul>
                </div>
                <div className='footer-contact'>
                <div className="contact">
                    <h3>Contact Us</h3>
                    <p>Email: Contact@lensvox.com</p>
                    <p>Phone: +91 9582742697</p>
                    <p>Address: Noida</p>
                </div>
                <div className="footer-icons">
                    {[
                        { icon: <FaFacebook />, link: 'https://facebook.com' },
                        { icon: <FaTwitter />, link: 'https://twitter.com' },
                        { icon: <FaLinkedin />, link: 'https://linkedin.com' },
                        { icon: <FaInstagram />, link: 'https://instagram.com' },
                        { icon: <FaGithub />, link: 'https://github.com' },
                    ].map(({ icon, link }, index) => (
                        <a key={index} href={link} target="_blank" rel="no-opener noreferrer">
                            {icon}
                        </a>
                    ))}
                </div>
                </div>
           
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()}  IT  Company. All  rights  reserved.</p>
            </div>
        </footer>
    );
};
 
export default Footer;
 