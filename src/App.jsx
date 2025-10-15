import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Linkedin, Download } from 'lucide-react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Hobbies from './pages/Hobbies.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import AIChat from './pages/AIChat.jsx';
import './App.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-wrapper">
      {/* === Burger Icon === */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* === Sidebar === */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <ul>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/experience" onClick={() => setMenuOpen(false)}>Experience</NavLink></li>
          <li><NavLink to="/hobbies" onClick={() => setMenuOpen(false)}>Hobbies</NavLink></li>
          <li><NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink></li>
          <li><NavLink to="/ai" onClick={() => setMenuOpen(false)}>AI</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          <li>
            <a href="https://linkedin.com/in/jayden-diaz-5117961b3" target="_blank" rel="noreferrer">
              <Linkedin size={16}/> LinkedIn
            </a>
          </li>
          <li>
            <a href="/resume/Jayden-Diaz-Resume.docx" download>
              <Download size={16}/> Resume
            </a>
          </li>
        </ul>
      </div>

      {/* === Page Routes === */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/ai" element={<AIChat />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
