import React, { useEffect, useState } from 'react';

export default function WorkExperience() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/work.json')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Error loading work.json:', err));
  }, []);

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      {jobs.map((job, index) => (
        <div
          key={index}
          className={`bg-white p-6 mb-6 shadow-md rounded-lg border-l-4 ${
            job.highlight ? 'border-green-500' : 'border-gray-300'
          }`}
        >
          <div className="flex items-center gap-4">
            <img src={job.logoUrl} alt={`${job.company} logo`} className="h-10" />
            <h3 className="text-xl font-semibold">
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {job.position} at {job.company}
              </a>
            </h3>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {job.location} — {job.startDate} to {job.endDate}
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            {job.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {job.technologies.length > 0 && (
            <p className="mt-3 text-sm">
              <strong>Technologies:</strong> {job.technologies.join(', ')}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
