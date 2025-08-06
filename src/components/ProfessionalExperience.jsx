import React, { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function WorkExperience() {
  const [jobs, setJobs] = useState([]);
  const [techMeta, setTechMeta] = useState({});

  function formatMonthYear(dateStr) {
    const [month, year] = dateStr.split("-");
    const date = new Date(`${year}-${month}-01`);
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  }

  function DateDiff({ start, end }) {
    const parseDate = (str) => {
      const [month, year] = str.split('-').map(Number);
      return new Date(year, month - 1);
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
      months++;

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

  return (
    <div className="">
      {jobs.map((job, index) => (
        <div key={index} className="flex flex-col bg-white dark:bg-gray-900">
          <div className="inline mt-4 gap-3 items-start sm:flex">

            {/* Logo Column */}
            <img
              src={job.logoUrl}
              alt={`${job.company} logo`}
              className="w-12 h-12 object-contain"
            />

            {/* Content */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {job.position}
                  </h3>
                  <h4 className="text-md text-gray-900 dark:text-white">
                    {job.company}
                  </h4>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    <MapPin className="w-[1em] h-[1em] inline-block" /> {job.location}
                  </span>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-right">
                  <p>
                    <Calendar className="w-[1em] h-[1em] inline-block" />{" "}
                    {formatMonthYear(job.startDate)} – {formatMonthYear(job.endDate)}
                  </p>
                  <p><DateDiff start={job.startDate} end={job.endDate} /></p>
                </div>
              </div>

              {/* Description */}
              <ul className="text-sm mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                {job.description?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Skills */}
              {job.skills?.length > 0 && (
                <div className="mb-5">
                  <h5 className="text-sm font-semibold mt-4">Skills</h5>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}


















              {/* Technologies */}
              {/** 
              {job.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                  {job.technologies.map((tech, i) => {
                    const meta = techMeta[tech] || {
                      icon: '',
                      bg: 'bg-gray-200',
                      text: 'text-gray-800',
                    };
                    return (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${meta.bg} ${meta.text}`}
                      >
                        {meta.icon && <i className={`${meta.icon} text-base`} />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              )}
              */}
              

            </div>
          </div>
        </div>

      ))}
    </div>
  );
}
