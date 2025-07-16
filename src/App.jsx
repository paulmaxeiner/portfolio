import React from 'react';

import NavbarTabs from './components/NavbarTabs.jsx';
import WorkExperience from './components/resume.jsx';

function App() {
  return (
    
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white font-sans">
      <h1 className="text-4xl text-red-600">Tailwind is working</h1>
      <main className="max-w-5xl mx-auto px-4">
        <NavbarTabs />
        </main>
      <header className="text-center py-10">
        
        <h1 className="text-4xl font-bold">Paul Maxeiner</h1>
        <p className="text-lg text-gray-600">My Portfolio</p>
      </header>
    </div>
  );
}

export default App;



