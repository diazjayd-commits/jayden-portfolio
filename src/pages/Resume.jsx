import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section className="page-container">
      <div className="page-card resume-card">
        <h2 className="page-title">My Resume</h2>
        <p className="resume-intro">
          Here’s my professional resume showcasing my skills, experience, and education.
        </p>

        {/* Embedded Resume Viewer */}
        <div className="resume-viewer">
          <iframe
            src="/resume/Jayden-Diaz-Resume.pdf"
            title="Jayden Diaz Resume"
            width="100%"
            height="500px"
            style={{ border: 'none', borderRadius: '10px' }}
          >
            Your browser does not support embedded PDFs.
            <a href="/resume/Jayden-Diaz-Resume.pdf" download>
              Click here to download.
            </a>
          </iframe>
        </div>

        {/* Buttons Section */}
        <div className="resume-buttons">
          <a
            href="/resume/Jayden-Diaz-Resume.pdf"
            download
            className="download-btn"
          >
            <Download size={18} style={{ marginRight: '8px' }} />
            Download Resume (PDF)
          </a>

          <a
            href="/resume/Jayden-Diaz-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            <ExternalLink size={18} style={{ marginRight: '8px' }} />
            View in New Tab
          </a>
        </div>
      </div>
    </section>
  );
}
