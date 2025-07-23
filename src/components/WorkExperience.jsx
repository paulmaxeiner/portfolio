import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function WorkExperience() {
  const [jobs, setJobs] = useState([]);
  const [techMeta, setTechMeta] = useState({});
  const [expandedIndex, setExpandedIndex] = useState(null);

  function formatMonthYear(dateStr) {
    const [month, year] = dateStr.split("-");
    const date = new Date(`${year}-${month}-01`);
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  }


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

  const expandedJob = expandedIndex !== null ? jobs[expandedIndex] : null;

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-left">Work Experience</h2>
      <motion.div layout className="space-y-6">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            layout
            whileHover={{ scale: 1.02 }}
            transition={{ layout: { duration: 0.3 } }}
            onClick={() => setExpandedIndex(index)}
            className="relative cursor-pointer flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700"
          >
            <div className="flex gap-2 items-start flex-col sm:flex-row">
              {/* Logo */}
              <motion.img
                layoutId={`logo-${index}`}
                src={job.logoUrl}
                alt={`${job.company} logo`}
                className="w-12 h-12 mt- shrink-0"
              />

              <div className="flex-1 w-full">
                {/* Header row with job info and responsive date block */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full">

                  {/* Title and company */}
                  <div>
                    <motion.h3
                      layoutId={`position-${index}`}
                      className="tracking-wide text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {job.position}
                    </motion.h3>
                    <motion.h4
                      layoutId={`company-${index}`}
                      className="text-lg font-medium text-gray-900 dark:text-white"
                    >
                      {job.company}
                    </motion.h4>
                  </div>

                  {/* Date block: static by default, absolute on sm+ */}
                  <div className="mt- sm:mt-0 text-sm text-gray-500 dark:text-gray-400 sm:absolute sm:top-2 sm:right-4 sm:text-right">
                    <p>{formatMonthYear(job.startDate)} – {formatMonthYear(job.endDate)}</p>
                    <p><DateDiff start={job.startDate} end={job.endDate} /></p>
                  </div>
                </div>

                {/* Description */}
                <ul className="text-sm mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  {job.description && job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>


              </div>
            </div>
          </motion.div>



        ))}

        <AnimatePresence>
          {expandedJob && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6 backdrop-blur"
            >
              <motion.div
                layoutId={`card-${expandedIndex}`}
                layout
                className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl overflow-auto max-h-[90vh]"
              >
                <button
                  onClick={() => setExpandedIndex(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl"
                  aria-label="Close"
                >
                  &times;
                </button>

                <div className="flex gap-4 items-start">
                  <motion.img
                    layoutId={`logo-${expandedIndex}`}
                    src={expandedJob.logoUrl}
                    alt={`${expandedJob.company} logo`}
                    className="w-12 h-12 mt-1 shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {expandedJob.startDate} – {expandedJob.endDate}
                    </p>
                    
                    <motion.h3
                      layoutId={`position-${expandedIndex}`}
                      className="text-xl font-bold text-gray-700 dark:text-gray-300"
                    >
                      {expandedJob.position}
                    </motion.h3>
                    <motion.h4
                      layoutId={`company-${expandedIndex}`}
                      className="text-md font-bold text-gray-900 dark:text-white"
                    >
                      {expandedJob.company}
                    </motion.h4>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {expandedJob.description[0]}
                    </p>

                    {expandedJob.description.length > 1 && (
                      <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
                        {expandedJob.description.slice(1).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {expandedJob.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                    {expandedJob.technologies.map((tech, i) => {
                      const meta = techMeta[tech] || {
                        icon: '',
                        bg: 'bg-gray-200',
                        text: 'text-gray-800',
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
                {expandedJob.skills && expandedJob.skills.length > 0 && (
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white">Skills:</h5>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {expandedJob.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}