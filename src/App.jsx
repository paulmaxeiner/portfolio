import React from 'react';
import WorkExperience from './components/resume.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Paul Maxeiner</h1>
        <p className="text-lg text-gray-600">My Portfolio</p>
      </header>
      <main className="px-6">
        <WorkExperience />
      </main>
    </div>
  );
}

export default App;



