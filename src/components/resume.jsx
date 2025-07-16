import React, { useEffect, useState } from 'react';

function DateConverter({ dateInput }) {
  const convertDate = (input) => {
    if (!input) return '';
    const date = new Date(`01-${input}`);
    const options = { month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const formattedDate = convertDate(dateInput);

  return (
    <div>
      <p>Original Date: {dateInput}</p>
      <p>Formatted Date: {formattedDate}</p>
    </div>
  );
}




export default function WorkExperience() {
    const [jobs, setJobs] = useState([]);
    const [techMeta, setTechMeta] = useState({});

    useEffect(() => {
        fetch('/work.json')
            .then((res) => res.json())
            .then(setJobs)
            .catch((err) => console.error('Failed to load work history:', err));

        fetch('/techMeta.json')
            .then((res) => res.json())
            .then(setTechMeta)
            .catch((err) => console.error('Failed to load tech metadata:', err));
    }, []);

    return (
        <section className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
            <div className="space-y-6">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-sm dark:bg-gray-900 dark:border-gray-700"
                    >
                        {/* Top row: logo, dates, position */}
                        <div className="flex gap-4 items-start">
                            <img
                                src={job.logoUrl}
                                alt={`${job.company} logo`}
                                className="w-10 h-10 mt-1 shrink-0"
                            />
                            <div className="flex-1">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {job.startDate} – {job.endDate}
                                </p>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {job.company}
                                </h3>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {job.position}
                                </h3>
                                <p className="mt-2 text-gray-700 dark:text-gray-300">
                                    {job.description[0]}
                                </p>

                                {job.description.length > 1 && (
                                    <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
                                        {job.description.slice(1).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Bottom row: tech badges */}
                        {job.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-gray-100 dark:border-gray-800">
                                {job.technologies.map((tech, i) => {
                                    const meta = techMeta[tech] || {
                                        icon: '',
                                        bg: 'bg-gray-200',
                                        text: 'text-gray-800'
                                    };

                                    return (
                                        <span
                                            key={i}
                                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${meta.bg} ${meta.text}`}
                                        >
                                            {meta.icon && <i className={`${meta.icon} text-base`} />}
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                ))}
            </div>
        </section>
    );
}
