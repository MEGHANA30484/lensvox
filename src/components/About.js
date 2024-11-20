import React from 'react';
import './About.css';
import aboutBackgroundImage from './images/about-background.jpg'; // Ensure you have the generated image saved as 'about-background.jpg'

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="overlay">
          <h1>About Us</h1>
          <p>LensVox is an AI company dedicated to providing cutting-edge solutions and consultancy services.</p>
          <p>Our team of experts specializes in Generative AI, NLP, Vision, and Audio technologies.</p>
        </div>
      </section>
      <section className="mission-vision-section">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To harness the power of artificial intelligence to drive innovation and create impactful solutions for our clients.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To be the leading provider of AI solutions that transform industries and improve lives.</p>
        </div>
      </section>
      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
      <li>Innovation: Pushing the boundaries of AI technology.</li>
      <li>Integrity: Conducting business with the highest ethical standards.</li>
      <li>Excellence: Delivering exceptional quality in everything we do.</li>
      <li>Collaboration: Working together to achieve common goals.</li>
    </ul>
      </section>
      <section className="team-section">
        {/* <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="path_to_image" alt="Team Member" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="path_to_image" alt="Team Member" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div> */}
        {/* Add more team members as needed */}
      </section>
    </div>
  );
}

export default About;
