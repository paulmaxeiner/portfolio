import React, { useState, useEffect } from 'react';

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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

      {projects.map((project, idx) => (
        <article className="overflow-hidden rounded-lg m-4 shadow-sm transition hover:shadow-lg">
          
          <img alt="" src={project.thumbnail || '/docs/images/blog/image-1.jpg'} className="h-56 w-full object-cover"/>

          <div className="bg-white p-4 sm:p-6">
            
            <time datetime={project.date} className="block text-xs text-gray-500">{formatMonthYear(project.date)}</time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">{project.name || 'n/a'}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed pb-3 text-gray-500">
              {project.description || 'No description available.'}
            </p>

            {Array.isArray(project.technologies) && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pb-3 border-b border-gray-100 dark:border-gray-800">
                {project.technologies.map((tech, i) => {
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


            {/* Modal Trigger */}
            <button
              onClick={() => setSelectedProject(project)}
              className="mt-3 text-blue-600 underline text-sm"
            >
              View more
            </button>



          </div>



        </article>


      ))}

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">
                {selectedProject.name || "Project Details"}
              </h2>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
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
              <p className="text-pretty text-gray-700">
                {selectedProject.fullDescription || "No additional info provided."}
              </p>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-600 underline"
                >
                  Visit project →
                </a>
              )}

              {Array.isArray(selectedProject.technologies) && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.technologies.map((tech, i) => {
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
          </div>
        </div>
      )}



    </div>
  )
}
