import React from 'react';

const stats = [
  { value: '40+', label: 'projects' },
  { value: '3.9', label: 'GPA' },
  { value: '29', label: 'test items' },
  { value: '50', label: 'states' },
];

export default function Grid() {
  return (
    <div className="bg-white dark:bg-zinc-900 py-16 px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-card dark:bg-zinc-800 rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-black dark:text-white">{stat.value}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
