import React from 'react';
import './Home.css';
import backgroundImage from './images/background.jpg'; // Ensure you have the generated image saved as 'background.jpg'

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <h1>Welcome to LensVox</h1>
          <p>We provide cutting-edge AI solutions and consultancy services.</p>
          <p>Specializing in Generative AI, NLP, Vision, and Audio.</p>
          <a href="#services" className="cta-button">Learn More</a>
        </div>
      </section>
      
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Generative AI</h3>
            <p>Create and innovate with AI-generated content.</p>
          </div>
          <div className="service-card">
            <h3>NLP</h3>
            <p>Enhance your applications with advanced natural language processing.</p>
          </div>
          <div className="service-card">
            <h3>Vision</h3>
            <p>Leverage AI for image and video analysis.</p>
          </div>
          <div className="service-card">
            <h3>Audio</h3>
            <p>Transform audio experiences with AI-powered solutions.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Home;
