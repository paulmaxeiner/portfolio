import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '40+', label: 'projects' },
  { value: '3.9', label: 'GPA' },
  { value: '29', label: 'test items' },
  { value: '50', label: 'states' },
];

function DateDiff({ start, end }) {
  const parseDate = (str) => {
    const [month, year] = str.split('-').map(Number);
    return new Date(year, month - 1); // JS months are 0-based
  };

  const getYearMonthDiff = (startStr, endStr) => {
    const startDate = parseDate(startStr);
    const endDate = parseDate(endStr);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months };
  };

  const { years, months } = getYearMonthDiff(start, end);

  const yearText = years > 0 ? `${years} ${years === 1 ? 'yr' : 'yrs'}` : '';
  const monthText = months > 0 ? `${months} ${months === 1 ? 'month' : 'mos'}` : '';
  const separator = years > 0 && months > 0 ? ', ' : '';

  return `${yearText}${separator}${monthText}` || '0 mos';
}


export default function Grid() {

  const [techMeta, setTechMeta] = useState({});
  const [projects, setProjects] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => console.error('Failed to load project data:', err));

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
    <div className="bg-white dark:bg-zinc-900 py-16 px-4 sm:px-8 lg:px-16">


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{/* TECHNOLOGIES */}
        <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-md p-6">

                {techMeta && Object.keys(techMeta).length > 0 && (
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 py-2"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              duration: Object.keys(techMeta).length * 1.5,
              ease: 'linear',
            }}
            style={{ width: 'max-content' }}
          >
            {/* Repeat items twice for seamless infinite scroll */}
            {Object.entries(techMeta).map(([tech, meta], i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${meta.bg || 'bg-gray-200 dark:bg-zinc-700'} ${meta.text || 'text-gray-800 dark:text-gray-100'}`}
              >
                {meta.icon && <i className={`${meta.icon} text-xs`} />}
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      )}

          {techMeta && Object.keys(techMeta).length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 mb-8">
              {Object.entries(techMeta).map(([tech, meta], i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${meta.bg || 'bg-gray-200 dark:bg-zinc-800'} ${meta.text || 'text-gray-800 dark:text-gray-100'}`}
                >
                  {meta.icon && <i className={`${meta.icon} text-xs`} />}
                  {tech}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-2xl font-semibold text-black dark:text-white">{Object.keys(techMeta).length}</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-300">technologies</p>
        </div>
        

{/* EXPERIENCE */}
        <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-md p-6">

          <div className="flex flex-wrap gap-2 pt-2 mb-8">
            {jobs.map((job, index) => (
              <div key={index} className="flex items-center justify-center p-2 rounded-lg">
                <img
                  src={job.logoUrl}
                  alt={job.company}
                  className="max-h-12 object-contain"
                  title={job.company}
                />
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-black dark:text-white">4+</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-300">years of professional experience</p>
        </div>

{/* TECHNOLOGIES */}
        <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold text-black dark:text-white">40+</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-300">projects</p>
        </div>

{/* TECHNOLOGIES */}
        <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold text-black dark:text-white">40+</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-300">projects</p>
        </div>


      </div>
    </div>
  );
}
