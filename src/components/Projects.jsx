import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [techMeta, setTechMeta] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  function formatMonthYear(dateStr) {
    const [month, year] = dateStr.split("-");
    const date = new Date(`${year}-${month}-01`);
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  }

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => console.error('Failed to load project data:', err));
    fetch('/techMeta.json')
      .then((res) => res.json())
      .then(setTechMeta)
      .catch((err) => console.error('Failed to load tech metadata:', err));
  }, []);

  
  return (
    <div className="mt-16 sm:mt-20">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, idx) => (
          <motion.li
            key={idx}
            layoutId={`project-${idx}`}
            className="group relative flex flex-col items-start cursor-pointer dark:text-white"
            onClick={() => setSelectedProject({ ...project, idx })}
          >
            <img
              src={project.thumbnail || "/docs/images/blog/image-1.jpg"}
              alt="Project Thumbnail"
              className="h-48 w-full rounded-lg object-cover shadow-md"
            />

            <h2 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {/**This is the hover animation */} <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 dark:bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{project.name || "Untitled Project"}</span>
            </h2>

            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description || "No description available."}
            </p>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.idx}`}
              className="w-full max-w-md rounded-lg bg-white dark:bg-zinc-900 p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <h2
                  id="modalTitle"
                  className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl"
                >
                  {selectedProject.name || "Project Details"}
                </h2>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-zinc-800 dark:hover:text-white focus:outline-none"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <img
                  src={selectedProject.thumbnail || "/docs/images/blog/image-1.jpg"}
                  alt="Project Thumbnail"
                  className="rounded-md"
                />
                <p className="text-pretty text-gray-700 dark:text-gray-300">
                  {selectedProject.fullDescription || "No additional info provided."}
                </p>

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-blue-600 underline dark:text-blue-400"
                  >
                    Visit project →
                  </a>
                )}

                {Array.isArray(selectedProject.technologies) && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.technologies.map((tech, i) => {
                      const meta = techMeta[tech] || {
                        icon: "",
                        bg: "bg-gray-200 dark:bg-zinc-800",
                        text: "text-gray-800 dark:text-gray-100",
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
