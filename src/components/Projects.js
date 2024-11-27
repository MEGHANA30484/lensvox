import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import projectImage from "./images/projects-bg.jpeg";

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${projectImage})` }}
      >
        <div className="overlay">
          <h2>Our Projects</h2>
          <p>
            Our projects showcase our expertise in transforming ideas into
            impactful solutions. Each project is a testament to our commitment
            to innovation and excellence.
          </p>
        </div>
      </section>

      <section id="project-list" className="project-list-section">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <Link to="/Generative">
              <h3>Generative Text Summarization</h3>
            </Link>
            <p>
              A project focused on creating concise and coherent summaries from
              large volumes of text using advanced NLP techniques.
            </p>
          </div>
          <div className="project-card">
            <Link to="/vision">
              <h3>Vision-based Quality Control</h3>
            </Link>
            <p>
              An AI solution for automating quality control processes in
              manufacturing using computer vision to detect defects and
              anomalies.
            </p>
          </div>
          <div className="project-card">
            <Link to="/audio">
              <h3>Audio Signal Processing for Noise Reduction</h3>
            </Link>
            <p>
              A proof of concept aimed at improving audio quality by reducing
              background noise through sophisticated signal processing
              algorithms.
            </p>
          </div>
          <div className="project-card">
            <Link to="/ai">
              <h3>AI-Powered Inventory Management</h3>
            </Link>
            <p>
            Optimize supply chain processes by predicting demand and reducing waste.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
