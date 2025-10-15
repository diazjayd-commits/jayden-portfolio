import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <img src="https://media.licdn.com/dms/image/v2/D4E35AQHzINSiy2-M-A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1719441412846?e=1761094800&v=beta&t=_htQ0n0rpRU3B-ovvHkX3czr_tcDZMhAApcqEoV5RDc" alt="Profile" className="profile-img" />
        <h1 className="name">Jayden Diaz</h1>
        <p className="subtitle">
          IT Student at Kean University and UX Desktop Support Technician. <br />
          Passionate about networking, systems administration, and IT solutions.
        </p>

        <div className="button-group">
          <Link to="/ai" className="btn">Try AI Q&A</Link>
          <Link to="/experience" className="btn">View Experience</Link>
        </div>
      </div>

      <div className="nav-card-section">
        <h2>Explore My Portfolio</h2>
        <div className="card-grid">
          <Link to="/" className="nav-card">
            <h3>🏠 Home</h3>
            <p>Welcome to my personal site.</p>
          </Link>
          <Link to="/about" className="nav-card">
            <h3>👤 About</h3>
            <p>Learn more about who I am and my journey.</p>
          </Link>
          <Link to="/experience" className="nav-card">
            <h3>💼 Experience</h3>
            <p>See my work experience and technical skills.</p>
          </Link>
          <Link to="/hobbies" className="nav-card">
            <h3>🎧 Hobbies</h3>
            <p>Discover what I enjoy outside of work.</p>
          </Link>
          <Link to="/resume" className="nav-card">
            <h3>📄 Resume</h3>
            <p>View and download my resume.</p>
          </Link>
          <Link to="/contact" className="nav-card">
            <h3>📞 Contact</h3>
            <p>Get in touch with me.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
