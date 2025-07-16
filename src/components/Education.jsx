import React, { useEffect, useState } from 'react';

export default function Education() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch('/education.json')
      .then((res) => res.json())
      .then(setSchools)
      .catch((err) => console.error('Failed to load education data:', err));
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

      <div className="space-y-8">
        {schools.map((edu, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row gap-6 p-6 rounded-xl border shadow-sm dark:bg-gray-900 bg-white dark:border-gray-700 border-gray-200 ${
              edu.highlight ? 'border-blue-500' : ''
            }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={edu.logoUrl}
                alt={`${edu.institution} logo`}
                className="w-16 h-16 rounded object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold dark:text-white text-gray-900">
                    {edu.degree}
                  </h3>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {edu.institution}
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.school !== 'n/a' && edu.school} • {edu.location}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-right">
                  {edu.startDate} – {edu.endDate}
                </p>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                GPA: {edu.GPA}
              </p>

              {edu.majors && Array.isArray(edu.majors) && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Majors:</strong> {edu.majors.join(', ')}
                </p>
              )}
              {edu.minors && Array.isArray(edu.minors) && edu.minors.length > 0 && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Minor:</strong> {edu.minors.join(', ')}
                </p>
              )}

              {edu.honors && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {edu.honors.map((honor, index) => (
                    <span
                      key={index}
                      className="inline-block rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 px-3 py-1 text-xs font-medium"
                    >
                      {honor}
                    </span>
                  ))}
                </div>
              )}

              {edu.courses && edu.courses.length > 0 && (
                <div className="pt-2">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Notable Courses:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                    {edu.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
