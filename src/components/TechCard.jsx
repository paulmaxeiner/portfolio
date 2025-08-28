import { useEffect, useState } from 'react';

const TechSection = () => {
  const [techMeta, setTechMeta] = useState({});

  useEffect(() => {
    fetch('/portfolio/techMeta.json')
      .then((res) => res.json())
      .then((data) => setTechMeta(data))
      .catch((err) => console.error('Failed to load techMeta:', err));
  }, []);

  return (
    <div className="">
      {Object.keys(techMeta).length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 mb-8">
          {Object.entries(techMeta).map(([tech, meta]) => (
            <span
              key={tech}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${meta.bg || 'bg-gray-200 dark:bg-zinc-800'} ${meta.text || 'text-gray-800 dark:text-gray-100'}`}
            >
              {meta.icon && <i className={`${meta.icon} text-xs`} />}
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechSection;
