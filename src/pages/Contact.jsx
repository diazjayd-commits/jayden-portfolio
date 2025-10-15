import React from 'react';

export default function Contact() {
  return (
    <section className="page-container">
      <div className="page-card">
        <h2 className="page-title">Contact</h2>
        <p className="contact-text">Feel free to reach out — I’d love to connect!</p>
        <p className="contact-link">
          <strong>Email:</strong>{' '}
          <a href="mailto:diazjayd@kean.edu" className="highlight-link">
            diazjayd@kean.edu
          </a>
        </p>
        <p className="contact-link">
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/jayden-diaz-5117961b3"
            target="_blank"
            rel="noreferrer"
            className="highlight-link"
          >
            Jayden Diaz
          </a>
        </p>
      </div>
    </section>
  );
}
