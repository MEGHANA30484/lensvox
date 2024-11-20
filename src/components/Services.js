import React from 'react';
import './Services.css';
import projectImage from './images/services-bg.png';
 
function Services() {
  return (
    <div id="services" className="services-container">
    <section className="hero-section" style={{ backgroundImage: `url(${projectImage})` }}>
      <div className="overlay">
          <h2>Our Services</h2>
          <p>We offer comprehensive AI solutions tailored to meet the unique needs of our clients.
          From conceptualization to implementation, we provide end-to-end services to ensure successful project delivery.
        </p>
        </div>
     </section>

       <section id='services-list' className='service-list-section'>
       <h2>Exclusive Solutions</h2>
         <div className="service-cards">
          <div className="card">
            <h3>Generative AI</h3>
            <p>Create and innovate with AI-generated content.</p>
          </div>
          <div className="card">
            <h3>NLP</h3>
            <p>Enhance your applications with advanced natural language processing.</p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>Leverage AI for image and video analysis.</p>
          </div>
          <div className="card">
            <h3>Audio</h3>
            <p>Transform audio experiences with AI-powered solutions.</p>
          </div>
        </div>
        </section>
        </div>

  );
}
 
export default Services;
 