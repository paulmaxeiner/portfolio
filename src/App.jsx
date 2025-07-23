import React from 'react';

import NavbarTabs from './components/NavbarTabs.jsx';
import Footer from './components/Footer.jsx';
import './App.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white font-sans ">
      <main className="max-w-5xl mx-auto px-4">
        <NavbarTabs />
        </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;



