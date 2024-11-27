import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Generative from './components/Generative';
import Vision from './components/Vision';
import Audio from './components/Audio';
import AI from './components/AI';
import './App.css';





function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/generative" element={<Generative />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/ai" element={<AI />} />
        </Routes>
        <Footer path="/Footer" element={<Footer/>} />
      </div>
    </Router>
  );
}

export default App;
