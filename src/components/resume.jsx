import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function WorkExperience() {
  const [jobs, setJobs] = useState([]);
  const [techMeta, setTechMeta] = useState({});
  const [expandedIndex, setExpandedIndex] = useState(null);

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
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
      <motion.div layout className="space-y-6">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            layout
            whileHover={{ scale: 1.02 }}
            transition={{ layout: { duration: 0.3 } }}
            onClick={() => setExpandedIndex(index)}
            className="cursor-pointer flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700"
          >
            <div className="flex gap-4 items-start">
              <motion.img
                layoutId={`logo-${index}`}
                src={job.logoUrl}
                alt={`${job.company} logo`}
                className="w-10 h-10 mt-1 shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {job.startDate} – {job.endDate}
                </p>
                <motion.h3
                  layoutId={`company-${index}`}
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  {job.company}
                </motion.h3>
                <motion.h4
                  layoutId={`position-${index}`}
                  className="text-lg font-bold text-gray-900 dark:text-white"
                >
                  {job.position}
                </motion.h4>
                <p className="mt-2 text-gray-700 dark:text-gray-300 line-clamp-2">
                  {job.description[0]}
                </p>
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
                      layoutId={`company-${expandedIndex}`}
                      className="text-3xl font-bold text-gray-900 dark:text-white"
                    >
                      {expandedJob.company}
                    </motion.h3>
                    <motion.h4
                      layoutId={`position-${expandedIndex}`}
                      className="text-xl font-bold text-gray-700 dark:text-gray-300"
                    >
                      {expandedJob.position}
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}