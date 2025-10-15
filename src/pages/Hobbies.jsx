import React from 'react';

const hobbies = [
  { title: 'Web Development', desc: 'Building React apps and experimenting with UI frameworks.' },
  { title: 'Gym', desc: 'Working out and teaching peers on how to workout efficiently' },
  { title: 'PC Hardware', desc: 'Upgrading, troubleshooting, and tuning custom PCs.' }
];

export default function Hobbies() {
  return (
    <section className="page-container">
      <div className="page-card">
        <h2 className="page-title">Hobbies</h2>
        <div className="hobbies-grid">
          {hobbies.map((h, i) => (
            <div key={i} className="hobby-item">
              <h3 className="hobby-title">{h.title}</h3>
              <p className="hobby-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
