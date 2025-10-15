import React from 'react';

const jobs = [
  {
    title: 'UX Desktop Support Technician',
    org: 'Kean University',
    time: 'Mar 2024 – Present',
    desc: 'Troubleshoot Windows/macOS systems, manage Active Directory, and assist with Microsoft 365 migration.'
  },
  {
    title: 'Sales Associate',
    org: 'The Home Depot',
    time: 'Mar 2022 – Jun 2025',
    desc: 'Assisted customers, managed product recommendations, and improved project satisfaction.'
  }
];

export default function Experience() {
  return (
    <section className="page-container">
      <div className="page-card">
        <h2 className="page-title">Experience</h2>
        <div className="experience-list">
          {jobs.map((job, i) => (
            <div key={i} className="experience-item">
              <h3 className="experience-role">{job.title}</h3>
              <p className="experience-org">{job.org}</p>
              <p className="experience-time">{job.time}</p>
              <p className="experience-desc">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
