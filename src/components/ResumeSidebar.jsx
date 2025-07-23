import React from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' }
  
];

export default function ResumeSidebar() {
  return (
    <aside className="lg:block w-48 sticky top-24 h-fit absolute left-0 p-4 items-left z-100 bg-white dark:bg-zinc-800 shadow-lg rounded-lg">
      <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-700 dark:text-gray-200">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="hover:text-blue-500 transition-colors"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
